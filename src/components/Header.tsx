import { point } from "@/app/layout";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-10 box-border w-full bg-main p-5">
      <div className="sub-wrap flex items-center justify-between">
        <h1>
          <Link href="/" className={`${point.className} text-xl`}>
            {"SuJIN's"}
          </Link>
        </h1>
        <nav className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
