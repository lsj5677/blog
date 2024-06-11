import { rock_salt } from "@/app/font";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Main() {
  return (
    <div className="flex h-[calc(100vh-69px)] flex-col items-center justify-center bg-main">
      <div className="sub-wrap relative flex h-dvh flex-col gap-8 pb-20 pt-16 md:h-2/3 md:min-h-[700px] md:flex-row">
        <span
          className={`${rock_salt.className} absolute left-1/2 top-1/2 hidden w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 text-center text-7xl italic text-blue md:block`}
        >
          Lorem ipsum dolor
          <br /> held in slavery
        </span>
        <div className="flex flex-1 flex-col justify-between gap-10 text-blue md:gap-0">
          <p className="text-3xl">{"SUJIN's STORY"}</p>

          <p className="block min-h-[200px] flex-auto bg-white md:hidden">
            image
          </p>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio recusandae id hic quas explicabo saepe sunt eos
              laboriosam laborum ipsam doloribus, reiciendis cumque vitae. Quae
              porro officia quam illum ratione!
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col md:w-1/3">
          <p className="hidden flex-auto bg-white md:block">image</p>
          <div className="my-5 flex items-center justify-end gap-4 text-2xl text-blue">
            <Link href="#contact" className="text-3xl">
              <IoIosMail />
            </Link>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
