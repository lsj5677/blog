import { nanum_gothic } from "@/app/font";
import AdjacentSection from "@/components/AdjacentSection";
import Backbutton from "@/components/Backbutton";
import WorkContent from "@/components/WorkContent";
import { getFeaturedPosts, getPost } from "@/service/posts";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// export function generateMetadata({ params }: Props) {
//   return {
//     title: `Works | ${params.slug}`,
//     description: params.slug,
//   };
// }

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPost(slug);
  return {
    title: `Works | ${slug}`,
    description,
  };
}

export default async function WorkSlugPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { next, prev } = post;
  return (
    <article className={`my-10 ${nanum_gothic.className}`}>
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

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
