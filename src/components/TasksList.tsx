import { TasksListProps } from "../Types";
import { Task } from "./Task";
import ClipboardText from "../assets/Clipboard.svg";

export function TasksList({
  tasks,
  onChangeTaskStatus,
  onDeleteTask,
}: TasksListProps) {
  const tasksCompleted = tasks.reduce((count, task) => {
    return task.isCompleted ? count + 1 : count;
  }, 0);

  return (
    <div>
      <header className="flex justify-between rounded-lg pb-6 pt-16 font-bold">
        <div className="flex items-center gap-2">
          <span className="text-sky-500">Tarefas criadas</span>
          <span className="flex justify-center rounded-full bg-zinc-800 px-2 py-1 text-xs leading-3 text-zinc-200">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-indigo-400">Concluídas</span>
          <span className="flex justify-center rounded-full bg-zinc-800 px-2 py-1 text-xs leading-3 text-zinc-200">
            {tasksCompleted} de {tasks.length}
          </span>
        </div>
      </header>
      <main>
        <div
          className={
            tasks.length > 0
              ? "hidden"
              : "flex flex-col items-center justify-center rounded-lg border-t border-t-zinc-800 py-16 text-base leading-6 text-zinc-500"
          }
        >
          <img
            src={ClipboardText}
            alt="Imagem de um clipboard"
            className="pb-4"
          />
          <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onChangeTaskStatus={onChangeTaskStatus}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
