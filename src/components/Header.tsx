import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="h-52 bg-zinc-950 flex justify-center items-center w-screen">
      <img className="h-20" src={Logo} alt="Logo do to-do list" />
    </header>
  );
}
