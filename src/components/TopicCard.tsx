import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Topic {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  importance: string;
  keyAreas: string[];
  problems: {
    title: string;
    url: string;
    difficulty: "Easy" | "Medium" | "Hard";
  }[];
  completed: boolean;
}

interface TopicCardProps {
  topic: Topic;
  onToggleComplete: (id: string) => void;
  onShowDetails: (topic: Topic) => void;
}

const TopicCard = ({ topic, onToggleComplete, onShowDetails }: TopicCardProps) => {
  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-warning text-warning-foreground",
    Hard: "bg-destructive text-destructive-foreground"
  };

  return (
    <Card 
      className={cn(
        "group hover:shadow-medium transition-all duration-300 cursor-pointer",
        topic.completed && "ring-2 ring-success bg-success-light"
      )}
      onClick={() => onShowDetails(topic)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {topic.title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={difficultyColors[topic.difficulty]} variant="secondary">
              {topic.difficulty}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(topic.id);
              }}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              {topic.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {topic.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="h-3 w-3" />
            <span>{topic.problems.length} problems</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-primary">
            <Clock className="h-3 w-3" />
            <span>Click to explore</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicCard;