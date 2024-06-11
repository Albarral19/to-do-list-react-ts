import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="flex h-52 w-screen items-center justify-center bg-zinc-950">
      <img className="h-20" src={Logo} alt="Logo do to-do list" />
    </header>
  );
}
