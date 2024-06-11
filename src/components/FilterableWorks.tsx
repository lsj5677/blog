"use client";

import { PostProps } from "@/service/posts";
import { useState } from "react";
import CardsGrid from "./CardsGrid";
import Categories from "./Categories";

type Props = {
  posts: PostProps[];
  categories: string[];
};

const ALL_POSTS = "All";

export default function FilterableWorks({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <CardsGrid posts={filtered} />
    </section>
  );
}
