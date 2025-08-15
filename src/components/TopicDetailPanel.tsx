import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lightbulb, CheckCircle2, Circle } from "lucide-react";
import { Topic } from "./TopicCard";

interface TopicDetailPanelProps {
  topic: Topic | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleComplete: (id: string) => void;
}

const TopicDetailPanel = ({ topic, isOpen, onClose, onToggleComplete }: TopicDetailPanelProps) => {
  if (!topic) return null;

  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-warning text-warning-foreground",
    Hard: "bg-destructive text-destructive-foreground"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{topic.title}</DialogTitle>
              <div className="flex items-center gap-2 mb-4">
                <Badge className={difficultyColors[topic.difficulty]} variant="secondary">
                  {topic.difficulty}
                </Badge>
                <Button
                  variant={topic.completed ? "default" : "outline"}
                  size="sm"
                  onClick={() => onToggleComplete(topic.id)}
                  className="gap-2"
                >
                  {topic.completed ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Circle className="h-4 w-4" />
                      Mark Complete
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
          </div>

          {/* Importance */}
          <div className="bg-accent/50 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-accent-foreground mb-1">Why is this important?</h4>
                <p className="text-sm text-accent-foreground/80">{topic.importance}</p>
              </div>
            </div>
          </div>

          {/* Key Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {topic.keyAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Problems */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Practice Problems ({topic.problems.length})
            </h3>
            <div className="space-y-3">
              {topic.problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground">
                      #{index + 1}
                    </span>
                    <span className="font-medium">{problem.title}</span>
                    <Badge 
                      className={difficultyColors[problem.difficulty]} 
                      variant="secondary"
                    >
                      {problem.difficulty}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="gap-1"
                  >
                    <a 
                      href={problem.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Solve
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopicDetailPanel;