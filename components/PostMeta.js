import { ArticleDate } from "./ArticleDate";

const PostMeta = ({ title, image, date, author }) => {

  return (
    <>
      <div className="space-y-12">
        <img src={image} alt={`Cover image for article named ${title}`} />
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        {/* Author Section */}
        <div className="py-6 border-t border-b flex justify-start items-center space-x-8">
          <img
            className="rounded-full overflow-hidden w-16 h-16"
            src={author.picture}
            alt={author.name}
          />
          <div>
            <p className="font-bold text-lg">{author.name}</p>
            <p className="text-sm text-gray-500">
              Published on{" "}
              <ArticleDate date={date} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostMeta };
