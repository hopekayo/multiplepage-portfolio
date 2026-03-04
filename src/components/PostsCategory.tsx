"use client";

import { Post } from "@/types/post";

interface PostsCategoryProps {
  posts: readonly Post[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function PostsCategory({
  posts,
  selectedCategory,
  onSelectCategory,
}: PostsCategoryProps) {
  // 提取所有分类并统计文章数量
  const categories = posts.reduce((acc, post) => {
    const category = post.category || "默认";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 添加"全部"选项
  const allCategories = [{ name: "全部", count: posts.length },
    ...Object.entries(categories).map(([name, count]) => ({ name, count }))];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {allCategories.map((category) => (
        <button
          key={category.name}
          onClick={() => onSelectCategory(category.name)}
          className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
            selectedCategory === category.name
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {category.name}
          <span className="ml-1 opacity-60 text-xs">({category.count})</span>
        </button>
      ))}
    </div>
  );
}
