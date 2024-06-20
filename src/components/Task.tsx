import { Trash, Check } from "@phosphor-icons/react";
import { TaskProps } from "../Types";

export function Task({ task, onChangeTaskStatus, onDeleteTask }: TaskProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-zinc-800 p-4">
      <label
        htmlFor="checkbox"
        onClick={onChangeTaskStatus(task)}
        className="flex flex-1 cursor-pointer items-start gap-3"
      >
        <input
          readOnly
          type="checkbox"
          checked={task.isCompleted}
          className="hidden"
        />
        <div
          className={`my-1 flex size-4 items-center justify-center rounded-full transition-all ${
            task.isCompleted
              ? "border-none bg-indigo-600 hover:bg-indigo-500"
              : "border border-sky-500 hover:border-sky-400"
          }`}
        >
          {task.isCompleted && <Check size={10} weight="bold" />}
        </div>
        <p
          className={`flex-1 text-sm ${
            task.isCompleted ? "text-zinc-500 line-through" : "text-zinc-300"
          }`}
        >
          {task.content}
        </p>
      </label>
      <button
        className="cursor-pointer rounded text-zinc-500 hover:bg-zinc-700 hover:text-red-400"
        onClick={onDeleteTask(task)}
      >
        <Trash className="my-1" width={24} weight="bold" />
      </button>
    </div>
  );
}
