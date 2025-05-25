import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default async function BlogPage() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)

  const blogs = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8')
    const { data } = matter(fileContent)
    return data
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <div className="relative w-full h-64">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{' '}
                <span>
                  {new Date(blog.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
