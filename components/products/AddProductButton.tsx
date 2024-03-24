'use client'

import {Product} from "@prisma/client"
import {useStore} from "@/src/store"

interface AddProductButtonProps {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {

    const addToOrder = useStore(state => state.addToOrder)

    return (
        <button
        type='button'
        className='w-full mt-5 p-3 bg-indigo-600 hover:bg-indigo-800 text-white rounded-sm'
        onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    )
}
