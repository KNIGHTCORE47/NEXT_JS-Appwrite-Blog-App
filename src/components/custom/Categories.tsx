"use client";

import React, { useContext, useEffect } from 'react'
import Button from '@/components/custom/CategoryButton'
import { CategoryContext } from '@/context/CategoryContext';

function Categories({ categories }: any) {

    const { changeCategory } = useContext(CategoryContext)

    useEffect(() => {

        if (categories) {
            changeCategory(categories[0].$id)
        }

    }, [categories])


    return (
        <div
            className='flex w-full items-start gap-4 py-8'
        >
            {categories.map((items: any, index: String) => (
                <div key={items.$id}>

                    <Button data={items} />
                </div>
            ))}

        </div>
    )
}

export default Categories
