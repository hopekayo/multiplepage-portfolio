"use client";
import { useState, useMemo } from "react";
import { postsConfig } from "@/config/posts";
import PostsSearch from "./PostsSearch";
import PostCard from "@/components/PostCard";
import PostsCategory from "./PostsCategory";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 根据分类筛选文章
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "全部") {
      return postsConfig.posts;
    }
    return postsConfig.posts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  // 重置页码到第一页当分类变化时
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {postsConfig.title}
        </h2>
      </div>

      {/* 分类筛选 */}
      <PostsCategory
        posts={postsConfig.posts}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <div className="flex flex-col items-stretch w-full gap-5">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <PostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              href={`/${post.slug}`}
              pattern="dots"
              imageUrl={post.image}
              readingTime={parseInt(post.readTime || "5")}
            />
          ))
        ) : (
          <p className="text-center text-neutral-500 dark:text-neutral-400 py-8">
            该分类下暂无文章
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {postsConfig.pagination.previous}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              aria-current={index + 1 === currentPage ? "page" : undefined}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                index + 1 === currentPage
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {postsConfig.pagination.next}
          </button>
        </div>
      )}

      <PostsSearch />
    </section>
  );
} 