import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Target } from "lucide-react";

interface DSAHeaderProps {
  completedTopics: number;
  totalTopics: number;
}

const DSAHeader = ({ completedTopics, totalTopics }: DSAHeaderProps) => {
  const progressPercentage = (completedTopics / totalTopics) * 100;

  return (
    <div className="bg-card shadow-soft rounded-lg p-6 mb-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DSA Study Guide
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Master Data Structures & Algorithms for technical interviews
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">{completedTopics}/{totalTopics}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-success" />
            <div>
              <p className="text-sm text-muted-foreground">Completion</p>
              <p className="text-2xl font-bold text-success">{Math.round(progressPercentage)}%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Progress</span>
          <Badge variant={progressPercentage >= 80 ? "default" : "secondary"} className="bg-gradient-primary">
            {progressPercentage >= 80 ? "Expert" : progressPercentage >= 50 ? "Intermediate" : "Beginner"}
          </Badge>
        </div>
        <Progress value={progressPercentage} className="h-3" />
      </div>
    </div>
  );
};

export default DSAHeader;