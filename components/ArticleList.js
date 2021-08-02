import Link from "next/link";
import { ArticleDate } from "./ArticleDate";

const ArticleList = ({ posts = [] }) => {

  return (
    <ul className="md:grid md:grid-cols-2 gap-16 space-y-12 md:space-y-0">
      {posts.map((post) => (
        <li className="space-y-3" key={post.title}>
          <img className="rounded-lg mb-3 min-h-[225px]" src={post.coverImage} />
          <Link href={`/posts/${post.slug}`}>
            <a className="text-4xl font-bold text-gray-900">{post.title}</a>
          </Link>
          <div>
            <ArticleDate date={post.date} />
          </div>

          <p className="text-base text-gray-600">{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export { ArticleList };
