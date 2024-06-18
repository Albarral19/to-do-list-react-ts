import { Trash, Check } from "@phosphor-icons/react";
import { TaskProps } from "../Types";

export function Task({ task, onDeleteTask, onChangeTaskStatus }: TaskProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-zinc-800 p-4">
      <label className="my-1 cursor-pointer">
        <input
          type="checkbox"
          onChange={onChangeTaskStatus(task)}
          className="hidden"
          checked={task.isCompleted}
        />
        <div
          className={`flex size-4 items-center justify-center rounded-full transition-all ${
            task.isCompleted
              ? "border-none bg-indigo-600 hover:bg-indigo-500"
              : "border border-sky-500 hover:border-sky-400"
          }`}
        >
          {task.isCompleted && <Check size={10} weight="bold" />}
        </div>
      </label>

      <p
        className={`flex-1 text-sm ${
          task.isCompleted ? "text-zinc-500 line-through" : "text-zinc-300"
        }`}
      >
        {task.content}
      </p>
      <button className="cursor-pointer rounded text-zinc-500 hover:bg-zinc-700 hover:text-red-400">
        <Trash className="my-1" width={24} weight="bold" />
      </button>
    </div>
  );
}
