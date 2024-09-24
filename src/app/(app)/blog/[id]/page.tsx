import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getSingleBlog } from '@/lib/actions/blogs.actions'


async function BlogPage({ params }: any) {
    const id = params.id
    let blog: any
    try {
        blog = await getSingleBlog(id)
    } catch (error) {
        console.log(error)
    }

    return (
        <div className='min-h-screen pt-4'>
            <Link href={"/"}>{"< Back"}</Link>


            <div className='flex flex-col gap-y-2 items-end'>
                <div
                    className='flex justify-center items-center gap-x-1 mt-6 rounded-lg shdow-md border-2 border-gray-700 p-4 cursor-pointer'
                >
                    <Image
                        src={blog?.imageURL}
                        alt={blog?.title}

                        width={id === '66f2a2d2002f4468aa6b' ? 250 : 300}
                        height={id === '66f2a2d2002f4468aa6b' ? 250 : 300}

                        className='items-center'
                    />


                    <div className='text-lg font-semibold my-6 overflow-ellipsis'>
                        <h1
                            className='text-lg font-semibold my-6 overflow-ellipsis uppercase'
                        >
                            {blog?.title}
                        </h1>
                        <p
                            className='text-base text-justify text-gray-500 overflow-ellipsis'
                        >
                            {blog?.description}
                        </p>
                    </div>
                </div>

                <div className='text-gray-500'>
                    <span className='text-sm'>
                        Published on: {new Date(blog?.$createdAt).toDateString()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
