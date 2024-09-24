import React from 'react'
import Categories from '@/components/custom/Categories'
import Blogs from '@/components/custom/Blogs'
import getCategories from '@/lib/actions/categories.actions'
import { getAllBlogs } from '@/lib/actions/blogs.actions'


async function fetchCategories() {
    return await getCategories()
}


async function fetchBlogs() {
    return await getAllBlogs()
}



export default async function Render() {
    const categories = await fetchCategories()
    const blogs = await fetchBlogs()

    console.log(categories);
    console.log(blogs);


    if (categories && 'documents' in categories) {
        return (
            <div>
                <Categories categories={categories.documents} />
                <Blogs blogs={blogs?.documents} />
            </div>
        )
    } else {
        return (
            <div>
                <p>No categories found</p>
                <p>No blogs found</p>
            </div>
        )
    }
}