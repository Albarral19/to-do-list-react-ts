import ClipboardText from "../assets/Clipboard.svg";
import { Task } from "./Task";

export function Tasks() {
  return (
    <div>
      <header className="flex justify-between pt-16 pb-6 rounded-lg font-bold">
        <div className="flex gap-2 items-center">
          <span className="text-sky-500">Tarefas criadas</span>
          <span className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs flex justify-center leading-3">
            0
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-indigo-400">Concluídas</span>
          <span className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs flex justify-center leading-3">
            0
          </span>
        </div>
      </header>
      <main>
        <div className="text-zinc-500 text-base flex leading-6 flex-col justify-center items-center border-t-zinc-800 border-t rounded-lg py-16">
          <img
            src={ClipboardText}
            alt="Imagem de um clipboard"
            className="pb-4"
          />
          <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <Task />
      </main>
    </div>
  );
}
