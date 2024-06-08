import FilterableWorks from "@/components/FilterableWorks";
import { getAllPosts } from "@/service/posts";
import { sans_serif } from "../layout";

export default async function WorksPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div className={`px-5 py-10 ${sans_serif.className}`}>
      <div className="sub-wrap">
        <FilterableWorks posts={posts} categories={categories} />
      </div>
    </div>
  );
}
