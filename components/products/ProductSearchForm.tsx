'use client'

import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import {SearchSchema} from "@/src/schema"


export default function ProductSearchForm() {
    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)

        if (!result.success) {
            result.error.issues.map(issue => {
                toast.error(issue.message)
            })
            return
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form
        action={handleSearchForm}
        className='flex items-center'
        >
            <input
            type="text"
            placeholder='Buscar producto'
            className='p-2 placeholder-slate-400 w-full'
            name='search'
            />

            <input
            type="submit"
            value={'Buscar'}
            className='bg-indigo-600 p-2 uppercase text-white cursor-pointer'
            />
        </form>
    )
}
