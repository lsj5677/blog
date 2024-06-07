import { sans_serif } from "@/app/layout";
import Card from "./Card";
import { PostProps } from "@/service/posts";

type Props = {
  posts: PostProps[];
};

export default function CardsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
      {posts.map((post: PostProps) => (
        <li
          className={`rounded-2xl bg-white shadow-lg ${sans_serif.className}`}
        >
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
