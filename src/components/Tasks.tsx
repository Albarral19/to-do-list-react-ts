import { Trash } from "@phosphor-icons/react";

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
        <div className="no-tasks">
          <img src="" alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div className="task">
          <input type="checkbox" name="" id="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            qui mollitia, minus sit, fugit alias enim, id ullam inventore
            obcaecati natus ad dolorem aliquid veniam? Numquam enim mollitia cum
            veniam.
          </p>
          <div>
            <Trash />
          </div>
        </div>
      </main>
    </div>
  );
}
