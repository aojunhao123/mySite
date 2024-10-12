import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Metadata } from 'next';

const blogPosts = [
  { 
    id: 1, 
    title: 'Getting Started with Next.js', 
    date: '2023-05-01', 
    content: `
      Next.js has revolutionized the way we build React applications. With its powerful features like server-side rendering and static site generation, it's become a go-to framework for developers looking to create fast, SEO-friendly websites.

      In this post, we'll cover:
      1. Setting up your first Next.js project
      2. Understanding the file-based routing system
      3. Creating dynamic pages with getStaticProps and getServerSideProps
      4. Optimizing images with the Next.js Image component
      5. Deploying your Next.js application

      By the end of this guide, you'll have a solid foundation to start building your own Next.js applications. Let's dive in!
    `
  },
  { 
    id: 2, 
    title: 'Building a Blog with shadcn/ui', 
    date: '2023-05-15', 
    content: `
      shadcn/ui is a fantastic collection of re-usable components that can significantly speed up your development process. In this post, we'll walk through the process of building a blog using Next.js and shadcn/ui.

      We'll cover:
      1. Setting up shadcn/ui in your Next.js project
      2. Using the Card component to display blog post previews
      3. Implementing a dark mode toggle with the shadcn/ui ThemeProvider
      4. Creating a responsive layout with the Grid component
      5. Adding interactive elements like buttons and form inputs

      By combining the power of Next.js with the beautiful, accessible components of shadcn/ui, you'll be able to create a professional-looking blog in no time!
    `
  },
  { 
    id: 3, 
    title: 'Advanced Next.js Techniques', 
    date: '2023-06-01', 
    content: `
      Once you've mastered the basics of Next.js, it's time to dive into some more advanced techniques. In this post, we'll explore some powerful features that can take your Next.js applications to the next level.

      We'll cover:
      1. Creating and using API routes for backend functionality
      2. Implementing middleware for request processing
      3. Setting up internationalization (i18n) for multi-language support
      4. Using Next.js preview mode for content management systems
      5. Optimizing performance with Incremental Static Regeneration (ISR)

      These advanced techniques will give you the tools you need to build complex, scalable applications with Next.js. Whether you're building a small personal project or a large-scale enterprise application, these skills will prove invaluable.
    `
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: `${post.title} - Published on ${post.date}`,
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none mb-8">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph.trim()}</p>
        ))}
      </div>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}