import Link from "next/link";

export default function ProductsPagination({page, totalPages}: {page: number, totalPages:number}) {

    const pages = Array.from({length: totalPages}, (_, i) => i + 1)

    return (
        <nav className='flex justify-center py-10'>

            {page > 1 && (
            <Link
            href={`/admin/products?page=${page - 1}`}
            className='bg-white px-4 py-2 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:z-20 focus:outline-offset-0'
            >
                &laquo;
            </Link>
            )}

            {pages.map(pg => (
                <Link
                key={pg}
                href={`/admin/products?page=${pg}`}
                className={`
                    bg-white px-4 py-2
                    text-sm text-slate-900
                    ring-1 ring-inset ring-slate-300
                    focus:z-20 focus:outline-offset-0
                    ${pg === page ? 'font-black' : ''}
                `}
                >
                    {pg}
                </Link>
            ))}

            {page < totalPages && (
            <Link
            href={`/admin/products?page=${page + 1}`}
            className='bg-white px-4 py-2 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 focus:z-20 focus:outline-offset-0'
            >
                &raquo;
            </Link>
            )}
        </nav>
    )
}
