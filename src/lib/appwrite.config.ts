import env from '@/app/env'

import { Client, Databases } from 'appwrite'

const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID

const databases = new Databases(client)

export {
    client,
    databases
}