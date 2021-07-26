import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), 'posts');

function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug, fields = []) {
    // Dynamically create slug based on file name
    const realSlug = slug.replace(/\.md$/, "");

    // Get the full path to the file
    const fullPath = join(postsDirectory, `${realSlug}.md`);


    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract frontmatter from the content of the post
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (data[field]) {
        items[field] = data[field];
      }
    });

    return items;
}

function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => 
        getPostBySlug(slug, fields))
        .sort((post1, post2) => 
            (post1.date > post2.date ? -1 : 1))
    return posts;
}

// Convert markdown to HTML
async function markdownToHtml(md) {
    const result = await remark().use(html).process(md);
    return result.toString();
}

export { getPostSlugs, getPostBySlug, getAllPosts, markdownToHtml }