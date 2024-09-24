import React from 'react'
import { Blog } from './Blogs'
import Link from 'next/link'
import Image from 'next/image'

export interface BlogsCardProps {
    blog: Blog
}

const BlogCard: React.FC<BlogsCardProps> = function ({ blog }) {
    return (
        <div
            className='rounded-2xl shdow-md mb-4 border-2 border-gray-700 p-4 cursor-pointer'
        >

            <Link href={`/blog/${blog.$id}`}>
                <div
                    className='flex justify-center items-center'
                >
                    <Image
                        src={blog.imageURL}
                        alt={blog.title}
                        width={200}
                        height={200}
                        className='rounded-lg items-center'
                    />
                </div>
                <div
                    className='text-lg font-semibold my-6 overflow-ellipsis text-center uppercase'
                >
                    {blog.title}
                </div>
                <p
                    className='text-base text-justify text-gray-500 overflow-ellipsis'
                >
                    {blog.description}
                </p>

            </Link>

        </div>
    )
}

export default BlogCard
