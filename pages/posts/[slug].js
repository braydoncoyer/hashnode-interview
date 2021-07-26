import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Layout } from "../../components/Layout";
import { PostContent } from '../../components/PostContent';
import { markdownToHtml, getPostBySlug, getAllPosts } from "../../lib/posts-api";
import { PostMeta } from "../../components/PostMeta";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <p>LOADING...</p>
      ) : (
        <>
          <article className="mb-32 space-y-12">
              <PostMeta
                title={post.title}
                image={post.coverImage}
                date={post.date}
                author={post.author}
            />
            <PostContent content={post.content}/>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "author",
    "coverImage",
  ]);

  console.log(post)

  const content = await markdownToHtml(post.content || "");
  
  return {
    props: {
      post: {
        ...post,
        content
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
