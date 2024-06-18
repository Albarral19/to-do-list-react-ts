import { ChangeEvent } from "react";

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  onDeleteTask: (taskToDelete: Task) => void;
  onChangeTaskStatus: (
    taskToChangeStatus: Task,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TaskProps {
  task: Task;
  onDeleteTask: (taskToDelete: Task) => void;
  onChangeTaskStatus: (
    taskToChangeStatus: Task,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}
