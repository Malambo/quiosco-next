'use client'

import Link from "next/link"
import {usePathname} from "next/navigation"

interface AdminNavigationProps {
    link: {
        url: string
        text: string
        blank: boolean
    }
}
export default function AdminRoute({link}: AdminNavigationProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url)

    return (
            <div
            className={`
            flex gap-4 items-center
            w-full p-3
            text-xl font-bold
            border-slate-200 border-t
            last-of-type:border-b
            ${(isActive && !link.blank) ? 'bg-amber-500 hover:bg-amber-500' : 'hover:bg-amber-200'}`}
            >
                <Link
                href={link.url}
                target={link.blank ? '_blank' : ''}
                >
                    {link.text}
                </Link>
            </div>
    )
}
