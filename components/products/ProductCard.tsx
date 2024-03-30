import {formatCurrency} from "@/src/lib/utils"
import {Product} from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"


interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {

    return (
        <div className='border bg-white shadow-sm'>

            <Image
            src={`/products/${product.image}.jpg`}
            alt={`imagen de ${product.name}`}
            width={400}
            height={500}
            quality={100}
            />

            <div className='p-5'>
                <h3 className='font-bold text-lg lg:text-xl 2xl:text-3xl '>{product.name}</h3>

                <p className='mt-5 font-black text-2xl lg:text-3xl 2xl:text-4xl text-amber-500'>
                    {formatCurrency(product.price)}
                </p>

                <AddProductButton product={product}/>
            </div>
        </div>
    )
}