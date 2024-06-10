import { sans_serif } from "@/app/layout";
import WorkContent from "@/components/WorkContent";
import { getPost } from "@/service/posts";

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

  return (
    <article className={`my-10 px-5 ${sans_serif.className}`}>
      <div className="sub-wrap">
        <WorkContent post={post} />
      </div>
    </article>
  );
}
