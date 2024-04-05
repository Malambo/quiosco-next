import {notFound}       from "next/navigation"
import {prisma}         from "@/src/lib/prisma"
import Heading          from "@/components/ui/Heading"
import EditProductForm  from "@/components/products/EditProductForm"
import ProductForm      from "@/components/products/ProductForm"
import GoBackButton     from "@/components/ui/GoBackButton"

export default async function EditPage({params}: {params: {id: string}}) {

    const product = await prisma.product.findUnique({
        where: {
            id: +params.id
        }
    })

    if (!product) {
        notFound()
    }

    return(
        <>
        <Heading texto={`Editar el producto: ${product?.name}`}/>

        <GoBackButton />

        <EditProductForm>
            <ProductForm
            product = {product}
            />
        </EditProductForm>
        </>
    )
}
