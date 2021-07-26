import Link from "next/link";
import { parseISO, format } from "date-fns";
import { ArticleDate } from "./ArticleDate";

const ArticleList = ({ posts = [] }) => {
  // const dateToDisplay = parseISO(date);

  return (
    <ul className="md:grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <li className="space-y-3" key={post.title}>
          <div>
            <img className="rounded-lg" src={post.coverImage} />
          </div>
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
