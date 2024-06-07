import { point } from "@/app/layout";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Card from "./Card";

export default function Main() {
  return (
    <div className="bg-main">
      <div className="relative flex min-h-[700px] gap-8 px-5 py-24">
        <span
          className={`${point.className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] italic text-blue`}
        >
          {"LEESUJIN"}
        </span>
        <div className="flex flex-1 flex-col justify-between text-blue">
          <p className="text-3xl">{"SUJIN's STORY"}</p>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio recusandae id hic quas explicabo saepe sunt eos
              laboriosam laborum ipsam doloribus, reiciendis cumque vitae. Quae
              porro officia quam illum ratione!
            </p>
          </div>
        </div>
        <div className="flex w-1/3 flex-col">
          <p className="flex-auto bg-white">image</p>
          <div className="my-5 flex items-center justify-end gap-4 text-2xl text-blue">
            <button className="text-3xl">
              <IoIosMail />
            </button>
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
