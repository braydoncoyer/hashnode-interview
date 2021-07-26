import Head from 'next/head'
import { ArticleList } from '../components/ArticleList';
import { Layout } from '../components/Layout'
import { getAllPosts } from '../lib/posts-api';

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="space-y-24">
        {/* About Me Header */}
        <div className="grid md:grid-cols-6 gap-3">
          <div className="space-y-4 col-span-4">
            <h2 className="text-3xl font-bold text-gray-900">Braydon Coyer</h2>
            <p className="text-lg text-gray-600">
              I’m Braydon, a senior full-stack engineer, creative coder and
              self-proclaimed designer who has a passion for the front-end
              spectrum.
            </p>
          </div>
          <img className="hidden w-24 h-24 md:block md:w-40 md:h-40 rounded-full col-span-2" src="/assets/blog/author/avatar.jpg" alt="Profile for Braydon Coyer" />
        </div>

        {posts && <ArticleList posts={posts} />}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get all posts, and fields
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'description']);
  console.log(posts);
  return {
    props: { posts },
  };
}
