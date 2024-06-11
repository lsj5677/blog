import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}
