import { PostProps } from "@/service/posts";
import Image from "next/image";

type Props = {
  posts: PostProps[];
};
export default function Card({ posts }: Props) {
  console.log("posts", posts);
  return (
    <>
      {posts.map(({ title, description, category, path }: PostProps) => (
        <li key={path}>
          <Image
            src={`/images/posts/${path}.png`}
            alt={title}
            width={300}
            height={300}
            className="rounded-md"
          />
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{category}</span>
        </li>
      ))}
    </>
  );
}
