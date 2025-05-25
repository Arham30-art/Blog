import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filepath = path.join(process.cwd(), 'content', `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content, data } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="text-sm text-gray-500 mb-4 italic">
        By {data.author} | {new Date(data.date).toLocaleDateString()}
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert" />
    </div>
  );
}
