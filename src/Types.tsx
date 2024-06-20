import { MouseEvent } from "react";

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  onDeleteTask: (
    taskToDelete: Task,
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeTaskStatus: (
    taskToChangeStatus: Task,
  ) => (event: MouseEvent<HTMLLabelElement>) => void;
}

export interface TaskProps {
  task: Task;
  onDeleteTask: (
    taskToDelete: Task,
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeTaskStatus: (
    taskToChangeStatus: Task,
  ) => (event: MouseEvent<HTMLLabelElement>) => void;
}
