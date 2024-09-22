"use server";

import { databases } from '@/lib/appwrite.config'
import env from '@/app/env'
import { revalidatePath } from 'next/cache';

export default async function getCategories() {
    try {
        //NOTE - Here we get all categories data
        const categories = await databases.listDocuments(
            env.appwrite.databaseId,
            env.appwrite.categoriesCollectionId
        );

        console.log("Here we will get all categories data", categories);

        if (!categories) {
            console.log("No categories found");
            return [];
        }

        revalidatePath('/');

        return categories;

    } catch (error) {
        console.log("Failed to fetch categories ", error)
    }

}