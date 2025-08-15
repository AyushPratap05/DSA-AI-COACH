import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import DSAHeader from "@/components/DSAHeader";
import TopicCard, { Topic } from "@/components/TopicCard";
import TopicDetailPanel from "@/components/TopicDetailPanel";
import AIAssistant from "@/components/AIAssistant";
import DailyStudyPlan from "@/components/DailyStudyPlan";
import { dsaTopics, phaseCategories } from "@/data/dsaTopics";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [topics, setTopics] = useState<Topic[]>(dsaTopics);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("dsaProgress");
    if (savedProgress) {
      try {
        const progressData = JSON.parse(savedProgress);
        setTopics(prevTopics =>
          prevTopics.map(topic => ({
            ...topic,
            completed: progressData[topic.id] || false
          }))
        );
      } catch (error) {
        console.error("Failed to load progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage whenever topics change
  useEffect(() => {
    const progressData = topics.reduce((acc, topic) => {
      acc[topic.id] = topic.completed;
      return acc;
    }, {} as Record<string, boolean>);
    
    localStorage.setItem("dsaProgress", JSON.stringify(progressData));
  }, [topics]);

  const toggleTopicComplete = (topicId: string) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === topicId
          ? { ...topic, completed: !topic.completed }
          : topic
      )
    );

    const updatedTopic = topics.find(t => t.id === topicId);
    if (updatedTopic) {
      toast({
        title: updatedTopic.completed ? "Topic unmarked" : "Topic completed! 🎉",
        description: updatedTopic.completed 
          ? `Removed ${updatedTopic.title} from completed topics`
          : `Great job completing ${updatedTopic.title}!`,
      });
    }
  };

  const handleShowDetails = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsDetailOpen(true);
  };

  const completedCount = topics.filter(topic => topic.completed).length;

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <DSAHeader 
          completedTopics={completedCount} 
          totalTopics={topics.length} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* DSA Roadmap by Phases */}
            {phaseCategories.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="animate-slide-up" style={{ animationDelay: `${phaseIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    Phase {phaseIndex + 1}
                  </Badge>
                  <div>
                    <h2 className="text-xl font-semibold">{phase.name}</h2>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.topics.map(topicId => {
                    const topic = topics.find(t => t.id === topicId);
                    return topic ? (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        onToggleComplete={toggleTopicComplete}
                        onShowDetails={handleShowDetails}
                      />
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <DailyStudyPlan />
            <AIAssistant />
          </div>
        </div>

        {/* Topic Detail Panel */}
        <TopicDetailPanel
          topic={selectedTopic}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onToggleComplete={toggleTopicComplete}
        />
      </div>
    </div>
  );
};

export default Index;
