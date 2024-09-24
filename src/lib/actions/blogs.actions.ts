"use server";

import { databases } from '@/lib/appwrite.config'
import env from '@/app/env'


async function getSingleBlog(id: string) {
    try {
        //NOTE - Here we get all categories data
        const blog = await databases.getDocument(
            env.appwrite.databaseId,
            env.appwrite.blogsCollectionId,
            id
        )

        console.log("Here we will get all blogs data", blog);


        if (!blog) {
            console.log("No blog found");
            return [];
        }

        return blog;


    } catch (error) {
        console.log("Failed to fetch blog ", error)
    }
}



async function getAllBlogs() {
    try {
        //NOTE - Here we get all categories data
        const blogs = await databases.listDocuments(
            env.appwrite.databaseId,
            env.appwrite.blogsCollectionId
        );
        console.log("Here we will get all blogs data", blogs);


        if (!blogs) {
            console.log("No blogs found");
            return [];
        }

        return blogs;


    } catch (error) {
        console.log("Failed to fetch blogs ", error)
    }
}

export {
    getSingleBlog,
    getAllBlogs
}