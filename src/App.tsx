export function App() {
  return (
    <div>
      <header>
        <img src="" alt="Logo do to-do list" />
      </header>

      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>

      <div className="to-do-content">
        <header>
          <div className="created-tasks">
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
              inventore obcaecati natus ad dolorem aliquid veniam? Numquam enim
              mollitia cum veniam.
            </p>
            <div>trash</div>
          </div>
        </main>
      </div>
    </div>
  );
}
