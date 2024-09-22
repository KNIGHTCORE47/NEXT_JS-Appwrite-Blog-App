import React from 'react'
import Categories from '@/components/custom/Categories'
import Blogs from '@/components/custom/Blogs'
import getCategories from '@/lib/actions/categories.actions'


async function fetchCategories() {
    return await getCategories()
}




export default async function Render() {

    const categories = await fetchCategories()

    console.log(categories);

    if (categories && 'documents' in categories) {
        return (
            <div>
                <Categories categories={categories.documents} />
                <Blogs />
            </div>
        )
    } else {
        return (
            <div>
                <p>No categories found</p>
                <Blogs />
            </div>
        )
    }
}
