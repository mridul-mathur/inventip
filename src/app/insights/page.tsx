'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BlogsCard } from '../blogscard';

interface Segment {
  _id: string;
  head: string;
  subhead: string;
  content: string;
  seg_img: string;
}

interface Tag {
  _id: string;
  tag: string;
}

interface Category {
  _id: string;
  category: string;
}
interface BlogProps {
  _id: string;
  title: string;
  brief: string;
  category: string;
  title_image: string;
  segments: Segment[];
  tags: string[];
}

const Insights = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [tags, setTags] = useState<Record<string, string>>({});
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [tagsLoading, setTagsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [blogsError, setBlogsError] = useState<Error | null>(null);
  const [tagsError, setTagsError] = useState<Error | null>(null);
  const [categoriesError, setCategoriesError] = useState<Error | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getdata/blogs`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data.data);
        setBlogsLoading(false);
      })
      .catch(error => {
        setBlogsError(error);
        setBlogsLoading(false);
      });

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getdata/tags`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        return response.json();
      })
      .then(data => {
        const tagMap: Record<string, string> = {};
        data.data.forEach((tag: Tag) => {
          tagMap[tag._id] = tag.tag;
        });
        setTags(tagMap);
        setTagsLoading(false);
      })
      .catch(error => {
        setTagsError(error);
        setTagsLoading(false);
      });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getdata/categories`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => {
        const categoryMap: Record<string, string> = {};
        data.data.forEach((category: Category) => {
          categoryMap[category._id] = category.category;
        });
        setCategories(categoryMap);
        setCategoriesLoading(false);
      })
      .catch(error => {
        setCategoriesError(error);
        setCategoriesLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const featuredBlog = blogs.length > 0 ? blogs[blogs.length - 1] : null;
  const filteredBlogs = blogs.filter(blog => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      blog.title.toLowerCase().includes(lowerCaseQuery) ||
      blog.brief.toLowerCase().includes(lowerCaseQuery) ||
      blog.tags.some(tagId =>
        tags[tagId]?.toLowerCase().includes(lowerCaseQuery)
      );

    const blogCategoryName = categories[blog.category];

    const matchesCategory =
      selectedCategory === 'All Categories' ||
      blogCategoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (blogsLoading || tagsLoading || categoriesLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        Loading...
      </div>
    );
  }

  if (blogsError || tagsError || categoriesError) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <p>Something went wrong. Please try refreshing the page.</p>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        No blogs available at the moment. Check back later!
      </div>
    );
  }

  return (
    <div
      data-theme="light"
      className="flex w-full flex-col items-center gap-8 px-16 pt-[4rem]"
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-12">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h1 className="text-center text-max">Writings from our team</h1>
          <p className="w-1/2 text-center text-para">
            here comes some more content about the blogs section like these are
            the top blogs for this category, the latest industry news from us.
          </p>
        </div>
        {featuredBlog && (
          <Link
            href={`insights/${blogs[blogs.length - 1]._id}`}
            className="w-full"
          >
            <div className="relative flex h-[32rem] w-full items-end justify-start overflow-hidden rounded-3xl">
              <div className="absolute left-[2rem] top-[1rem] flex w-fit items-center justify-center gap-3 rounded-xl bg-primary/10 bg-opacity-10 bg-clip-padding px-4 py-2 text-primary backdrop-blur-xl backdrop-filter">
                NEW
              </div>
              <img
                src={featuredBlog.title_image}
                alt={featuredBlog.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute flex w-full items-center justify-between gap-3 bg-primary/10 bg-opacity-10 bg-clip-padding p-4 px-8 text-primary backdrop-blur-xl backdrop-filter">
                <div className="flex w-3/4 flex-col gap-4">
                  <h2 className="text-left text-subhead">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-left text-paramin">{featuredBlog.brief}</p>
                </div>
                <span
                  onClick={() => router.push(`insights/${featuredBlog._id}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="#f7f7f7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="flex w-full flex-col gap-16 py-12">
        <div className="flex w-full items-center justify-between gap-8">
          <h1 className="w-2/5 text-left text-head capitalize">
            Here are some more blogs from us
          </h1>
          <div className="flex gap-4">
            <div className="relative min-w-48" ref={dropdownRef}>
              <div
                className="flex cursor-pointer items-center justify-between rounded-lg border border-secondary bg-primary px-4 py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-secondary">{selectedCategory}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-secondary bg-primary shadow-lg">
                  <div
                    className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-accent1/50 hover:to-accent2/50 ${
                      selectedCategory === 'All Categories'
                        ? 'bg-gradient-to-l from-accent1/50 to-accent2/50'
                        : ''
                    }`}
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setIsDropdownOpen(false);
                    }}
                  >
                    All Categories
                  </div>
                  {Object.entries(categories).map(([id, name]) => (
                    <div
                      key={id}
                      className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-accent1/50 hover:to-accent2/50 hover:duration-300 ${
                        selectedCategory === name
                          ? 'bg-gradient-to-l from-accent1/50 to-accent2/50'
                          : ''
                      }`}
                      onClick={() => {
                        setSelectedCategory(name);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative min-w-96">
              <input
                type="text"
                placeholder="Search blogs by title, tag, or brief..."
                className="w-full rounded-lg border border-secondary bg-primary px-4 py-2 pl-10 text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-secondary/70"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              {searchQuery && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-secondary/70 hover:text-secondary"
                  onClick={() => setSearchQuery('')}
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="grid h-fit min-h-[50vh] w-full grid-cols-3 gap-12">
          {filteredBlogs.length > 0 &&
            filteredBlogs.map((blog, index: number) => (
              <BlogsCard
                key={index}
                id={blog._id}
                title={blog.title}
                brief={blog.brief}
                tags={blog.tags.map(tagId => tags[tagId])}
                title_image={blog.title_image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
