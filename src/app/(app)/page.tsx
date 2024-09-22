
import React from 'react'
import Render from '@/utils/Render'

import CategoryContextProvider from '@/context/CategoryContextProvider'


export default function Home() {

    return (
        <CategoryContextProvider>
            <Render />
        </CategoryContextProvider>
    )
}
