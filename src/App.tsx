import {
  useState,
  FormEvent,
  ChangeEvent,
  MouseEvent,
  InvalidEvent,
} from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";
import { Task } from "./Types";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: Task = {
      id: tasks.length + 1,
      content: taskContent,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTaskContent("");
  }

  function createHandleTaskStatus(taskToChangeStatus: Task) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const tasksAfterChangeStatus = tasks.map((task) => {
        return task.id === taskToChangeStatus.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      });

      setTasks(tasksAfterChangeStatus);
    };
  }

  function deleteHandleTask(taskToDelete: Task) {
    return (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const tasksWithoutDeleteOne = tasks.filter((task) => {
        return task.id !== taskToDelete.id;
      });

      setTasks(tasksWithoutDeleteOne);
    };
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskContent(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskContentEmpty = taskContent.length === 0;

  return (
    <div className="h-screen bg-zinc-900">
      <Header />
      <main className="container mx-auto w-full px-4 md:w-[736px]">
        <form
          className="-mt-7 flex items-center justify-center gap-2"
          onSubmit={handleCreateNewTask}
        >
          <input
            name="taskContent"
            className="h-14 w-full rounded-lg border border-zinc-950 bg-zinc-800 p-4 text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-indigo-400"
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={taskContent}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button
            className="flex h-14 items-center justify-center gap-2 rounded-lg bg-sky-500 p-4 text-sm font-bold text-zinc-200 hover:bg-sky-600"
            disabled={isNewTaskContentEmpty}
          >
            <span>Criar</span> <PlusCircle size={14} weight="bold" />
          </button>
        </form>
        <TasksList
          tasks={tasks}
          onDeleteTask={deleteHandleTask}
          onChangeTaskStatus={createHandleTaskStatus}
        />
      </main>
    </div>
  );
}
