export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

// Mock data for development - Replace with WordPress REST API calls later
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-modern-web-apps-with-nextjs",
    title: "Building Modern Web Apps with Next.js",
    excerpt:
      "Learn how to leverage Next.js 15 features to build fast, SEO-friendly web applications with React Server Components.",
    content: `
# Building Modern Web Apps with Next.js

Next.js has revolutionized the way we build React applications. With the introduction of the App Router and Server Components, developers now have more power than ever to create performant, SEO-friendly applications.

## Key Features

### Server Components
Server Components allow you to render components on the server, reducing the JavaScript bundle sent to the client.

### App Router
The new App Router provides a more intuitive file-based routing system with support for layouts, loading states, and error boundaries.

### Image Optimization
Next.js automatically optimizes images for better performance and Core Web Vitals scores.

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

That's it! You're ready to start building your next project.
    `,
    featuredImage: "/blog/nextjs-cover.jpg",
    date: "2024-12-20",
    readTime: "5",
    tags: ["Next.js", "React", "Web Development"],
    author: {
      name: "Çağlar Çakmak",
      avatar: "/profile.jpg",
    },
  },
  {
    id: 2,
    slug: "mastering-typescript-for-react",
    title: "Mastering TypeScript for React Developers",
    excerpt:
      "A comprehensive guide to using TypeScript effectively in your React projects for better type safety and developer experience.",
    content: `
# Mastering TypeScript for React Developers

TypeScript has become the standard for building large-scale React applications. Let's explore how to use it effectively.

## Why TypeScript?

- **Type Safety**: Catch errors at compile time
- **Better DX**: Improved autocomplete and refactoring
- **Documentation**: Types serve as documentation

## Essential Patterns

### Typing Props

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return <button className={variant} onClick={onClick}>{children}</button>;
};
\`\`\`

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}
\`\`\`

Start using TypeScript today and never look back!
    `,
    featuredImage: "/blog/typescript-cover.jpg",
    date: "2024-12-15",
    readTime: "7",
    tags: ["TypeScript", "React", "JavaScript"],
    author: {
      name: "Çağlar Çakmak",
      avatar: "/profile.jpg",
    },
  },
  {
    id: 3,
    slug: "wordpress-headless-cms-guide",
    title: "WordPress as a Headless CMS: Complete Guide",
    excerpt:
      "Learn how to use WordPress as a headless CMS with Next.js for the best of both worlds - easy content management and modern frontend.",
    content: `
# WordPress as a Headless CMS

WordPress powers over 40% of the web. Combined with a modern frontend like Next.js, you get the best of both worlds.

## What is Headless WordPress?

A headless CMS separates the content management (backend) from the presentation (frontend). WordPress handles content, while Next.js handles the UI.

## Benefits

- **Performance**: Static generation and caching
- **Flexibility**: Use any frontend technology
- **Security**: Reduced attack surface
- **Scalability**: CDN-friendly architecture

## Setting Up

### 1. Enable WordPress REST API

WordPress REST API is enabled by default. Access it at:
\`\`\`
https://your-site.com/wp-json/wp/v2/posts
\`\`\`

### 2. Fetch Data in Next.js

\`\`\`typescript
async function getBlogPosts() {
  const res = await fetch('https://your-site.com/wp-json/wp/v2/posts');
  return res.json();
}
\`\`\`

### 3. Display Content

\`\`\`tsx
export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
        </article>
      ))}
    </div>
  );
}
\`\`\`

Start building your headless WordPress site today!
    `,
    featuredImage: "/blog/wordpress-cover.jpg",
    date: "2024-12-10",
    readTime: "10",
    tags: ["WordPress", "CMS", "Next.js", "Headless"],
    author: {
      name: "Çağlar Çakmak",
      avatar: "/profile.jpg",
    },
  },
];

// Helper function to get a single post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all blog slugs (for static generation)
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
