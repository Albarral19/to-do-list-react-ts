import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import { Trash } from "@phosphor-icons/react";

export function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <NewTask />
        <div className="to-do-content">
          <header className="">
            <div className="text-sky-600">
              Tarefas Criadas
              <span>0</span>
            </div>
            <div className="completed-tasks">
              Concluídas
              <span>0</span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium qui mollitia, minus sit, fugit alias enim, id ullam
                inventore obcaecati natus ad dolorem aliquid veniam? Numquam
                enim mollitia cum veniam.
              </p>
              <div>
                <Trash />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
