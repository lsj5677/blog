import { PostProps, getFeaturedPosts } from "@/service/posts";
import Card from "./Card";
import { point, sans_serif } from "@/app/layout";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function FeaturedWorks() {
  const posts = await getFeaturedPosts();
  return (
    <div className="bg-third px-5 py-20 text-center">
      <div className="sub-wrap">
        <h3 className={`mb-8 text-center text-3xl ${point.className}`}>
          Works
        </h3>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
          {posts.map((post: PostProps) => (
            <li
              className={`rounded-2xl bg-white shadow-lg ${sans_serif.className}`}
            >
              <Card post={post} />
            </li>
          ))}
        </ul>
        <Link
          href="/works"
          className={`mt-8 inline-block rounded-full bg-blue px-4 py-3 text-main shadow-md transition-all hover:bg-sky-950 hover:transition-all md:mt-10 ${sans_serif.className}`}
        >
          <article className="flex items-center justify-center gap-2">
            View More Works <FaArrowRight />
          </article>
        </Link>
      </div>
    </div>
  );
}
