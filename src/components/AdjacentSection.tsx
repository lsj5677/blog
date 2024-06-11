import { PostProps } from "@/service/posts";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  post: PostProps;
  type: "next" | "prev";
};

export default function AdjacentSection({
  post: { title, path },
  type,
}: Props) {
  return (
    <Link
      href={`/works/${path}`}
      className={`w-full truncate text-sm ${type === "next" && "text-right"}`}
    >
      <div
        className={`flex items-center text-xs opacity-60 ${type === "next" && "justify-end"}`}
      >
        {type === "prev" && (
          <>
            <MdKeyboardArrowLeft className="text-lg" />
            <span>이전글</span>
          </>
        )}
        {type === "next" && (
          <>
            <span>다음글</span>
            <MdKeyboardArrowRight className="text-lg" />
          </>
        )}
      </div>
      <span>{title}</span>
    </Link>
  );
}
