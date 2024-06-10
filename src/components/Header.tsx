import { point } from "@/app/layout";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed z-10 box-border w-full bg-main py-5">
      <div className="sub-wrap flex items-center justify-between">
        <h1>
          <Link href="/" className={`${point.className} text-xl`}>
            {"SuJIN's"}
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
