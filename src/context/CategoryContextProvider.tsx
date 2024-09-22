"use client"

import React, { useState } from 'react'

import {
    CategoryContext,
    CategoryProviderProps
} from './CategoryContext'

export default function CategoryContextProvider({ children }: CategoryProviderProps) {

    //NOTE - Here we store the current category id
    const [categoryId, setCategoryId] = useState<string>("");

    //NOTE- Here we set the category id with a function
    function changeCategory(categoryId: string) {
        setCategoryId(categoryId)
    }


    return (
        <CategoryContext.Provider
            value={{
                categoryId,
                changeCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}