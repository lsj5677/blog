import { getFeaturedPosts } from "@/service/posts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CardsGrid from "./CardsGrid";
import { nanum_myeongjo } from "@/app/font";

export default async function FeaturedWorks() {
  const posts = await getFeaturedPosts();
  return (
    <div className="bg-sub py-20 text-center tracking-tighter">
      <div className={`sub-wrap`}>
        <div className="mb-8 flex flex-col items-center justify-between gap-10 md:flex-row">
          <h3
            className={`text-brown shrink-0 text-left text-5xl tracking-tighter ${nanum_myeongjo.className}`}
          >
            My <span className="italic">Works</span>
          </h3>
          <p className="text-center opacity-70 md:text-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            voluptatum aspernatur ex necessitatibus et. Minus ad porro nostrum
            voluptate distinctio asperiores
          </p>
        </div>
        <CardsGrid posts={posts} />
        <Link
          href="/works"
          className={`bg-brown mt-8 inline-block px-4 py-3 text-main shadow-md transition-all hover:bg-sky-950 hover:transition-all md:mt-10`}
        >
          <div className="flex items-center justify-center gap-2">
            View More Works <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
