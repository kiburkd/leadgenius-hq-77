import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
}

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className={task.completed ? "text-green-500" : "text-gray-400"}
              >
                <CheckCircle className="h-5 w-5" />
              </Button>
              <div>
                <h4 className="font-medium">{task.title}</h4>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {task.dueDate}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;