import { PlusCircle } from "@phosphor-icons/react";

export function NewTask() {
  return (
    <form className="-mt-7 flex items-center justify-center gap-2">
      <input
        className="h-14 w-full rounded-lg border border-zinc-950 bg-zinc-800 p-4 text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring focus:ring-indigo-400"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="flex h-14 items-center justify-center gap-2 rounded-lg bg-sky-500 p-4 text-sm font-bold text-zinc-200 hover:bg-sky-600">
        <span>Criar</span> <PlusCircle size={14} weight="bold" />
      </button>
    </form>
  );
}
