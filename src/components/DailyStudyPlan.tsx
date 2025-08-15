import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, Code, PenTool } from "lucide-react";

const DailyStudyPlan = () => {
  const studyPlan = [
    {
      activity: "Concept Review",
      icon: BookOpen,
      time: 30,
      percentage: 30,
      description: "Read theory, watch tutorials",
      color: "bg-primary"
    },
    {
      activity: "Problem Solving",
      icon: Code,
      time: 60,
      percentage: 60,
      description: "Practice coding problems",
      color: "bg-success"
    },
    {
      activity: "Reflection & Notes",
      icon: PenTool,
      time: 10,
      percentage: 10,
      description: "Document learnings, patterns",
      color: "bg-warning"
    }
  ];

  const totalTime = studyPlan.reduce((sum, item) => sum + item.time, 0);

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <CardTitle>Daily Study Plan</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Recommended daily allocation for effective DSA learning
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Total Time Display */}
        <div className="text-center p-4 bg-gradient-primary rounded-lg text-primary-foreground">
          <div className="text-3xl font-bold">{totalTime} min</div>
          <div className="text-sm opacity-90">Daily Commitment</div>
        </div>

        {/* Study Activities */}
        <div className="space-y-4">
          {studyPlan.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{activity.activity}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.time} min ({activity.percentage}%)
                  </div>
                </div>
                
                <Progress value={activity.percentage} className="h-2" />
                
                <p className="text-xs text-muted-foreground pl-6">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Bar Chart */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Time Distribution</h4>
          <div className="flex h-8 rounded-lg overflow-hidden">
            {studyPlan.map((activity, index) => (
              <div
                key={index}
                className={`${activity.color} flex items-center justify-center text-xs text-white font-medium transition-all hover:opacity-80`}
                style={{ width: `${activity.percentage}%` }}
                title={`${activity.activity}: ${activity.time} minutes`}
              >
                {activity.percentage}%
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-accent/50 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-accent-foreground mb-2">💡 Study Tips</h4>
          <ul className="text-xs text-accent-foreground/80 space-y-1">
            <li>• Consistency beats intensity - study daily rather than cramming</li>
            <li>• Focus on understanding patterns, not memorizing solutions</li>
            <li>• Take breaks every 25-30 minutes to maintain focus</li>
            <li>• Review previous topics regularly to reinforce learning</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStudyPlan;