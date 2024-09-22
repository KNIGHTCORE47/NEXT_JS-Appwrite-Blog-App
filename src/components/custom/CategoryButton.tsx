"use client"

import { CategoryContext } from '@/context/CategoryContext'
import React, { useContext } from 'react'

function Button({ data }: { data: any }) {

    const { categoryId, changeCategory } = useContext(CategoryContext)

    return (
        <div
            onClick={() => changeCategory(data.$id)}
            className={`${data.$id === categoryId ? 'bg-indigo-500 border-2 border-gray-50' : 'border-2 border-gray-700'} shrink-0 rounded-lg px-5 py-1.5 text-base font-medium text-white hover:cursor-pointer`}
        >
            {data.title.toUpperCase()}
        </div>
    )
}

export default Button
