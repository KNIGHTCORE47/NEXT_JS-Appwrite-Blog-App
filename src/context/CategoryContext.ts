"use client"
import React, { createContext, ReactNode } from 'react'
interface CategoryContextType {
    categoryId: string;
    changeCategory: (categoryId: string) => void;
}
export interface CategoryProviderProps {
    children: ReactNode
}
export const CategoryContext = createContext<CategoryContextType>({
    categoryId: "",
    changeCategory: () => { },
});
