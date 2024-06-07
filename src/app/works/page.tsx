import FilterableWorks from "@/components/FilterableWorks";
import { getAllPosts } from "@/service/posts";
import { sans_serif } from "../layout";

export default async function WorksPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div className={`px-5 ${sans_serif.className}`}>
      <FilterableWorks posts={posts} categories={categories} />
    </div>
  );
}
