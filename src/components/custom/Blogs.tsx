"use client"

import { CategoryContext } from '@/context/CategoryContext'
import React, { useContext } from 'react'
import BlogCard from './BlogCard'


export interface Blog {
    $id: string
    title: string
    description: string
    imageURL: string
    categoryId: { $id: string }
}

interface BlogsProps {
    blogs: Blog[];
}


const Blogs: React.FC<BlogsProps> = function ({ blogs }) {
    const { categoryId } = useContext(CategoryContext)

    const filterBlogs = blogs?.filter((blog) => blog.categoryId.$id === categoryId)


    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
        >
            {filterBlogs?.map((blog) => (
                <div key={blog.$id}>
                    <BlogCard blog={blog} />
                </div>
            ))}
        </div>
    )
}

export default Blogs
