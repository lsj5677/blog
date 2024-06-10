import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import MarkdownViewer from "./MarkdownViewer";
import { PostDataProps } from "@/service/posts";

export default function WorkContent({ post }: { post: PostDataProps }) {
  const { title, description, date, path, content } = post;
  return (
    <>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={800}
        height={200}
        className="mx-auto my-4 h-1/6 max-h-[400px] w-full"
      />
      <div className="mb-8 border-b border-third pb-4 md:pb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold md:text-2xl">{title}</h2>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-xs">
            <CiCalendarDate className="text-xl" />
            <time>{date.toString()}</time>
          </div>
        </div>
        <p className="md:text-md text-sm">{description}</p>
      </div>
      <MarkdownViewer content={content} />
    </>
  );
}
