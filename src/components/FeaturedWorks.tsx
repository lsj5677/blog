import { getFeaturedPosts } from "@/service/posts";
import Card from "./Card";

export default async function FeaturedWorks() {
  const posts = await getFeaturedPosts();
  return (
    <div className="bg-third px-5 py-24">
      <h3>Works</h3>
      <ul className="grid grid-cols-3 gap-5">
        <Card posts={posts} />
      </ul>
    </div>
  );
}
