import Link from "next/link";

const ArticleList = ({ posts = [] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { ArticleList };
