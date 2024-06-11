import Link from "next/link";
import Nav from "./Nav";
import { rock_salt } from "@/app/font";

export default function Header() {
  return (
    <header className="fixed z-10 box-border w-full bg-main py-5">
      <div className="sub-wrap flex items-center justify-between">
        <h1>
          <Link href="/" className={`${rock_salt.className} text-xl`}>
            {"SuJIN's"}
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
