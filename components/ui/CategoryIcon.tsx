import {Category} from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface CategoryIconProps {
    category: Category
}


export default function CategoryIcon({category}: CategoryIconProps) {

    return (
        <div
        className={`flex items-center gap-4 w-full border-t border-slate-200 p-3 last-of-type:border-b`}
        >
            {/* relativo al div padre */}
            <div className='w-16 h-16 relative'>
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
