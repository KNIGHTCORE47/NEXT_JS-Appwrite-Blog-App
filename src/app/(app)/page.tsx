"use client"

import Render from '@/utils/Render'
import CategoryContextProvider from '@/context/CategoryContextProvider'
import React from 'react'

export default function Home() {
    return (
        <CategoryContextProvider>
            <Render />
        </CategoryContextProvider>
    )
}
