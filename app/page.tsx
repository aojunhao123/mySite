"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from 'lucide-react';

const blogPosts = [
  { 
    id: 1, 
    title: 'Getting Started with Next.js', 
    date: '2023-05-01',
    excerpt: 'Dive into the world of Next.js and learn how to build fast, SEO-friendly React applications.'
  },
  { 
    id: 2, 
    title: 'Building a Blog with shadcn/ui', 
    date: '2023-05-15',
    excerpt: 'Explore the power of shadcn/ui to create beautiful, accessible React components for your blog.'
  },
  { 
    id: 3, 
    title: 'Advanced Next.js Techniques', 
    date: '2023-06-01',
    excerpt: 'Take your Next.js skills to the next level with advanced techniques and optimizations.'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-6 text-center text-foreground">
          Welcome to My Blog
        </motion.h1>
        
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <p className="text-xl mb-4 text-foreground">
            Hi, I'm [Your Name]. I write about web development, with a focus on React and Next.js.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://github.com/yourusername">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="https://twitter.com/yourusername">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="https://linkedin.com/in/yourusername">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6 text-foreground">
          Recent Articles
        </motion.h2>
        
        <motion.div variants={containerVariants} className="space-y-6">
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/posts/${post.id}`}>
                <Card className="hover:shadow-lg transition-shadow bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <p className="text-sm text-card-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}