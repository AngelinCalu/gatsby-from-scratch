import React from 'react';
import { Link } from 'gatsby';
import { SectionHeader } from '../../ui';

const BlogPosts = ({ posts }) => {
    return (
        <section className="pt-6">
            <SectionHeader>Latest Posts</SectionHeader>
            {posts.map(({ id, frontmatter, fields, timeToRead }) => (
                <Link key={id} to={fields.slug}>
                    <article className="w-full p-4 flex flex-col md:flex-row justify-between rounded-md group bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 mb-4">
                        <div>
                            <h4 className="text-lg text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-200">
                                {frontmatter.title}
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{frontmatter.description}</p>
                        </div>
                        <div className="flex justify-between md:flex-col md:items-end">
                            <p className="py-2 md:py-0 text-gray-500 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-white">
                                {frontmatter.date}
                            </p>
                            <p className="text-sm whitespace-nowrap inline-flex items-center text-gray-500 dark:text-gray-200 p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                {`${timeToRead} minute(s) read.`}
                            </p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
};

export default BlogPosts;
