import { sans_serif } from "@/app/layout";
import { PostProps } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: PostProps[];
};
export default function Card({ posts }: Props) {
  console.log("posts", posts);
  return (
    <>
      {posts.map(({ title, description, path }: PostProps) => (
        <li
          className={`rounded-2xl bg-white shadow-lg ${sans_serif.className}`}
        >
          <Link href={`/${path}`} key={path}>
            <Image
              src={`/images/posts/${path}.png`}
              alt={title}
              width={300}
              height={300}
              className="w-full rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="font-bold">{title}</h3>
              <p className="text-xs text-slate-400">{description}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
