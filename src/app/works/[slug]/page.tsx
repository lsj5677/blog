import { sans_serif } from "@/app/layout";
import AdjacentSection from "@/components/AdjacentSection";
import Backbutton from "@/components/Backbutton";
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
  const { next, prev } = post;
  return (
    <article className={`my-10 px-5 ${sans_serif.className}`}>
      <div className="sub-wrap">
        <WorkContent post={post} />
        <section>
          <div className="my-10 flex justify-between border-b border-t border-third pb-10 pt-10">
            {prev && <AdjacentSection type="prev" post={prev} />}
            {next && <AdjacentSection type="next" post={next} />}
          </div>
          <Backbutton />
        </section>
      </div>
    </article>
  );
}
