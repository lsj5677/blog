import { PostProps } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostProps;
};
export default function Card({ post: { title, path, description } }: Props) {
  return (
    <Link href={`/works/${path}`} key={path}>
      <article className="overflow-hidden">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={500}
          className="h-[200px] w-full md:h-[300px]"
        />
        <div className="p-4 text-left">
          <h3 className="mt-2 font-bold">{title}</h3>
          <p className="w-full truncate text-xs text-slate-500">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
