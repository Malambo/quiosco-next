import {prisma} from "@/src/lib/prisma"
import Link from "next/link"
import Heading from "@/components/ui/Heading"
import ProductTable from "@/components/products/ProductsTable"
import ProductsPagination from "@/components/products/ProductsPagination"
import ProductSearchForm from "@/components/products/ProductSearchForm"


const PAGE_SIZE = 10


async function getProducts({take, skip}: {take: number, skip: number}) {
    const products = await prisma.product.findMany({
        skip: skip,
        take: take,
        include: {
            category: true
        }
    })
    return products
}


async function productCount() {
    return await prisma.product.count()
}


export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>


export default async function ProductsPage({searchParams}: {searchParams: {page: string}}) {

    // Si no hay nada en la URL, entoces actualPage = 1
    let actualPage = +searchParams.page || 1

    if (actualPage < 0) actualPage = 1

    const productsData = getProducts({take: PAGE_SIZE, skip: (actualPage - 1) * PAGE_SIZE})
    const totalProductsData = productCount()
    const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
    const totalPages = Math.ceil(totalProducts / PAGE_SIZE)

    if (actualPage > totalPages) actualPage = totalPages

    return (
        <>
        <Heading texto='Administrar productos'/>
        <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
            <Link
            href={'/admin/products/new'}
            className='bg-amber-300 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer hover:bg-amber-500'
            >
                Crear producto
            </Link>
            <ProductSearchForm />
        </div>
        <ProductTable products={products}/>
        <ProductsPagination page={actualPage} totalPages={totalPages} />
        </>
    )
}
