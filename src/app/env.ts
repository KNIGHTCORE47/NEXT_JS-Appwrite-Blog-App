export default {
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL!),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!),
        databaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!),
        categoriesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_CATEGORIES_COLLECTION_ID!),
        blogsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!),
        storageId: String(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID!),
    }
}