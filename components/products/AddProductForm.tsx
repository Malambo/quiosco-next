'use client'

import {createProduct} from "@/actions/create-product-action"
import {ProductSchema} from "@/src/schema"
import { useRouter } from "next/navigation"
import {toast} from "react-toastify"

export default function AddProductForm({children}: {children: React.ReactNode}) {

    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
        name: formData.get('name'),
        price: formData.get('price'),
        categoryId: formData.get('categoryId'),
        image: formData.get('image')
        }

        const result = ProductSchema.safeParse(data)

        if(!result.success) {
            result.error.issues.map(issue => {
                toast.error(issue.message)
            })
            return
        }

        const response = await createProduct(result.data)
        if(response?.errors) {
            response.errors.map(issue => {
                toast.error(issue.message)
            })
            return
        }

        toast.success('Producto creado correctamente')
        router.push('/admin/products')

    }

    return (
        <div className='max-w-3xl mt-10 mx-auto px-5 py-10 bg-white rounded-md shadow-md'>
            <form
            action={handleSubmit}
            className='space-y-5'
            >
                {children}

                <input
                type='submit'
                className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-10 p-3 uppercase font-bold cursor-pointer'
                value={'Registrar el producto'}
                />
            </form>
        </div>
    )
}
