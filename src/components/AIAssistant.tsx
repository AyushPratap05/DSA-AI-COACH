import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, MessageSquare, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// The AIAssistant component is now a standalone functional component
const AIAssistant = ({ topicTitle }) => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"concept" | "hint">("concept");
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<Array<{
    type: "user" | "assistant";
    content: string;
  }>>([]);
  const { toast } = useToast();

  // --- Gemini API Configuration ---
  // IMPORTANT: Replace with your actual key if running locally for testing.
  // Otherwise, leave as-is for the Canvas environment to inject.
  const GEMINI_API_KEY = ""; // PASTE YOUR KEY HERE FOR LOCAL TESTING
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;
  
  // --- Utility for Exponential Backoff ---
  const fetchWithExponentialBackoff = async (url: string, options: RequestInit, retries = 3, delay = 1000): Promise<unknown> => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          if (response.status === 429 && i < retries - 1) {
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
            continue;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Fetch attempt ${i + 1} failed:`, error);
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };
  
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage = input;
    setInput("");
    
    // Add user message to conversation
    setConversation(prev => [...prev, { type: "user", content: userMessage }]);

    try {
      let prompt = "";
      if (mode === "concept") {
        prompt = `As a DSA expert, explain the concept "${userMessage}" in the context of "${topicTitle}" in a clear, concise, and easy-to-understand manner.`;
      } else { // "hint" mode
        prompt = `Provide a small, conceptual hint for the DSA problem "${userMessage}" which is related to the topic "${topicTitle}". Do not provide the full solution or code. Focus on the core idea or a small step to get started.`;
      }
      
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };
      
      const result = await fetchWithExponentialBackoff(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Type assertion for Gemini API response
      type GeminiResponse = {
        candidates?: Array<{
          content?: {
            parts?: Array<{ text: string }>
          }
        }>
      };

      const res = result as GeminiResponse;
      
      if (res.candidates && res.candidates.length > 0 &&
          res.candidates[0].content && res.candidates[0].content.parts &&
          res.candidates[0].content.parts.length > 0) {
        const aiResponse = res.candidates[0].content.parts[0].text;
        setConversation(prev => [...prev, { type: "assistant", content: aiResponse }]);
      } else {
        throw new Error("Invalid response structure from Gemini API.");
      }
      
      toast({
        title: "AI Response Generated",
        description: "Your question has been answered!",
      });
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error),
        variant: "destructive",
      });
      setConversation(prev => [...prev, { type: "assistant", content: "Sorry, I couldn't get an AI response. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>AI Learning Assistant</CardTitle>
          </div>
          <div className="flex gap-2">
            <Button
              variant={mode === "concept" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setMode("concept");
                setConversation([]);
              }}
              className="gap-1"
            >
              <MessageSquare className="h-3 w-3" />
              Concept
            </Button>
            <Button
              variant={mode === "hint" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setMode("hint");
                setConversation([]);
              }}
              className="gap-1"
            >
              <Lightbulb className="h-3 w-3" />
              Hint
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {mode === "concept" 
            ? "Ask questions about DSA concepts and get detailed explanations"
            : "Get hints for specific problems without spoiling the solution"
          }
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Conversation History */}
        {conversation.length > 0 && (
          <div className="max-h-64 overflow-y-auto space-y-3 p-3 bg-muted/50 rounded-lg">
            {conversation.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  message.type === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card border"
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="space-y-3">
          <Textarea
            placeholder={mode === "concept" 
              ? `e.g., 'What is memoization in DP?' or 'Explain time complexity of binary search in ${topicTitle}'`
              : `e.g., 'I'm stuck on Two Sum problem' or 'Need help with recursive approach'`
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            className="min-h-[80px]"
          />
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {mode === "concept" ? "💡 Concept Clarifier" : "🔍 Problem Hint Generator"}
            </Badge>
            <Button 
              onClick={handleSubmit} 
              disabled={!input.trim() || isLoading}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              {isLoading ? "Thinking..." : "Ask AI"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
