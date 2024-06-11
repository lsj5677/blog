import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type PostProps = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostDataProps = PostProps & {
  content: string;
  next: PostProps | null;
  prev: PostProps | null;
};

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data/posts", "posts.json");
  return readFile(filePath, "utf-8")
    .then<PostProps[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// export async function getAllPosts(): Promise<PostProps[]> {
//   const filePath = path.join(process.cwd(), "data/posts", "posts.json");
//   return readFile(filePath, "utf-8")
//     .then<PostProps[]>(JSON.parse)
//     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
// }

export async function getFeaturedPosts(): Promise<PostProps[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getPost(fileName: string): Promise<PostDataProps> {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`Can't find ${fileName}`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, next, prev, content };
}
