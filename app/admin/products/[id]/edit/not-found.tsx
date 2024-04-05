import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {

    return (
        <div className='text-center'>
            <Heading texto={`Producto no encontrado`}/>
            <Link 
            href={'/admin/products'}
            className='w-full lg:w-auto px-10 py-3 bg-amber-300 text-slate-800 text-xl text-center font-bold hover:bg-amber-400 cursor-pointer'
            >Ir a la lista de productos</Link>
        </div>
    )
}
