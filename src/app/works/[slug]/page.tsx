import { getPost } from "@/service/posts";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Works | ${params.slug}`,
  };
}

export default async function WorkSlugPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  console.log(`post`, post);
  if (!post) {
    redirect("/works");
  }

  return (
    <div className="px-5">
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  );
}
