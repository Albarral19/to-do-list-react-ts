import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div className="h-screen bg-zinc-900">
      <Header />
      <div className="container mx-auto w-full px-4 md:w-[736px]">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
