import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Header />
      <div className="container mx-auto px-4 w-full md:w-[736px]">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
