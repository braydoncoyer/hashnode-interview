import Head from 'next/head'
import { ArticleList } from '../components/ArticleList';
import { ContentLayout } from '../components/ContentLayout'
import { getAllPosts } from '../lib/posts-api';
import { PageLayout } from '../components/PageLayout';

export default function Home({ posts }) {

  const pageTitle = "Braydon's Blog - Home"

  return (
    <PageLayout title={pageTitle}>
      <div className="space-y-24">
        {/* About Me Header */}
        <div className="border-b">
          <div className="max-w-4xl mx-auto grid md:grid-cols-6 gap-3 py-12 px-4">
            <div className="space-y-4 col-span-5">
              <h2 className="text-3xl font-bold text-gray-900">
                Braydon Coyer
              </h2>
              <p className="text-lg text-gray-600">
                I’m Braydon, a senior full-stack engineer, creative coder and
                self-proclaimed designer who has a passion for the front-end
                spectrum.
              </p>
            </div>
            <img
              className="hidden w-24 h-24 md:block md:w-32 md:h-32 rounded-full col-start-6"
              src="/assets/blog/author/avatar.jpg"
              alt="Profile for Braydon Coyer"
            />
          </div>
        </div>

        <ContentLayout>{posts && <ArticleList posts={posts} />}</ContentLayout>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  // Get all posts, and fields
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'description']);

  return {
    props: { posts },
  };
}
