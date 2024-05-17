'use client'

import {useParams} from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {Category} from "@prisma/client"

interface CategoryIconProps {
    category: Category
}


export default function CategoryIcon({category}: CategoryIconProps) {

    const params = useParams<{category: string}>()

    return (
        <div
        className={`
        flex gap-4 items-center
        w-full p-3
        border-slate-200 border-t
        last-of-type:border-b
        ${category.slug === params.category ? 'bg-amber-500 hover:bg-amber-500' : 'hover:bg-amber-200'}`}
        >
            {/* Image -> fill => relativa al div padre */}
            <div className='relative w-16 h-16'>
                <Image
                alt={`icono de ${category.name}`}
                src={`/icon_${category.slug}.svg`}
                fill
                />
            </div>
            <Link
            href={`/order/${category.slug}`}
            className='text-xl font-bold'
            >
                {category.name}
            </Link>
        </div>
    )
}