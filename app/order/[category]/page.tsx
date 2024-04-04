import {prisma} from '@/src/lib/prisma'
import ProductCard from '@/components/products/ProductCard'
import Heading from '@/components/ui/Heading'

async function getProducts(category: string) {
    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: category
            }
        }
    })

    return products
}

export default async function OrderPage({params}: {params: {category: string}}) {

    const products = await getProducts(params.category)

    return (
        <>
        <Heading texto='Elige y personaliza tu pedido a continuación'/>
        <div className='
        grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-5 mt-5
        '>
            {products.map(product => (
                <ProductCard
                key={product.id}
                product={product}
                />
            ))}
        </div>
        </>
    )
}
