import { Trash, Check } from "@phosphor-icons/react";
import { TaskProps } from "../Types";

export function Task({ task, onChangeTaskStatus, onDeleteTask }: TaskProps) {
  function handleChange() {
    onChangeTaskStatus(task);
  }

  function handleDelete() {
    onDeleteTask(task);
  }

  return (
    <div className="flex items-start gap-3 rounded-lg bg-zinc-800 p-4">
      <label
        className="my-1 flex cursor-pointer items-center"
        htmlFor={`checkboxTask-${task.id}`}
      >
        <input
          type="checkbox"
          name="checkboxTask"
          id={`checkboxTask-${task.id}`}
          onChange={handleChange}
          className="hidden"
          checked={task.isCompleted}
        />
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
            task.isCompleted
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "border border-sky-500 hover:border-sky-400"
          }`}
        >
          {task.isCompleted && <Check size={16} weight="bold" />}
        </div>
      </label>

      <p
        className={`flex-1 text-sm ${
          task.isCompleted ? "text-zinc-500 line-through" : "text-zinc-300"
        }`}
      >
        {task.content}
      </p>
      <button
        className="cursor-pointer rounded text-zinc-500 hover:bg-zinc-700 hover:text-red-400"
        onClick={handleDelete}
      >
        <Trash className="my-1" width={24} weight="bold" />
      </button>
    </div>
  );
}
