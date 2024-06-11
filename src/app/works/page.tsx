import FilterableWorks from "@/components/FilterableWorks";
import { getAllPosts } from "@/service/posts";
import { nanum_gothic } from "../font";

export default async function WorksPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div className={`py-10 ${nanum_gothic.className}`}>
      <div className="sub-wrap">
        <FilterableWorks posts={posts} categories={categories} />
      </div>
    </div>
  );
}
