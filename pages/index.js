import Head from 'next/head'
import { ArticleList } from '../components/ArticleList';
import { Layout } from '../components/Layout'
import { getAllPosts } from '../lib/posts-api';

export default function Home({ posts }) {
  return (
    <Layout>
      <div>
        {/* About Me Header */}
        <div>
          <div>

          </div>
          
        </div>

        {posts && <ArticleList posts={posts}/>}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get all posts, and fields
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'image', 'description']);
  console.log(posts);
  return {
    props: { posts },
  };
}
