import { PlusCircle } from "@phosphor-icons/react";

export function NewTask() {
  return (
    <form className="flex items-center justify-center gap-2 -mt-7 ">
      <input
        className="w-full h-14 bg-zinc-800 border-zinc-950 border rounded-lg p-4 focus:outline-none focus:ring focus:ring-indigo-400 text-zinc-300 placeholder:text-zinc-500"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="text-zinc-200 text-sm font-bold bg-sky-500 rounded-lg p-4 flex justify-center items-center h-14 gap-2 hover:bg-sky-600">
        <span>Criar</span> <PlusCircle size={14} weight="bold" />
      </button>
    </form>
  );
}
