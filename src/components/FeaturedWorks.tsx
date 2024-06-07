import { getFeaturedPosts } from "@/service/posts";
import Card from "./Card";

export default async function FeaturedWorks() {
  const posts = await getFeaturedPosts();
  return (
    <div className="bg-third px-5 py-20">
      <div className="sub-wrap">
        <h3 className="mb-8 text-center text-3xl">Works</h3>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
          <Card posts={posts} />
        </ul>
      </div>
    </div>
  );
}
