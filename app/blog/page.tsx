import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const FeaturedBlogCard = dynamic(
  () => import("@/components/common/cards/FeaturedBlogCard"),
  {
    ssr: false,
  }
);

const BlogCard = dynamic(() => import("@/components/common/cards/BlogCard"), {
  ssr: false,
});

// create sample blog data with mockup images
const sampleBlog = [
  {
    id: 1,
    title: "Blog Title 1",
    subtitle: "Blog Subtitle 1",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Blog Title 2",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 2",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Blog Title 3",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 3",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "Blog Title 4",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 4",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Blog Title 5",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 5",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "Blog Title 6",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 6",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "Blog Title 7",
    date: "2021-10-10",
    shortDescription: "This is a short description for blog 7",
    image: "https://picsum.photos/200/300",
  },
];

const testFeaturedBlog = {
  title: "Blog Title 1",
  date: "2021-10-10",
  shortDescription: "This is a short description for blog 1",
  image: "https://picsum.photos/200/300",
};

const BlogPage = () => {
  return (
    <section className="container py-20 flex flex-col gap-12">
      <div className="bg-background dark:bg-foreground/5 backdrop-blur-md rounded-xl p-8">
        <div className="text-center flex flex-col items-center gap-4">
          <h4 className="text-lg text-muted-foreground uppercase">
            Welcome to my blog
          </h4>
          <h2 className="text-3xl font-semibold max-w-3xl">
            I write about{" "}
            <span className="gradient-text-hero">
              web development, programming, and tech
            </span>
            . I also talk about my journey as a{" "}
            <span className="gradient-text-hero">self-taught developer</span>.
          </h2>
        </div>
      </div>
      <FeaturedBlogCard
        title={testFeaturedBlog.title}
        date={testFeaturedBlog.date}
        shortDescription={testFeaturedBlog.shortDescription}
        image={testFeaturedBlog.image}
      />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Lates Blog</h2>
          <Button variant="link">Want a PR?</Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {sampleBlog.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              shortDescription={blog.shortDescription}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
