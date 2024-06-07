import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full max-w-screen-xl justify-between bg-main p-5">
      <h1>
        <Link href="/">{"SUJIN's"}</Link>
      </h1>
      <nav className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/works">Works</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
