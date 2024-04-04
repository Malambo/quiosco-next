'use client'

import {useMemo}        from "react"
import {toast}          from "react-toastify"
import {useStore}       from "@/src/store"
import ProductDetails   from "./ProductDetails"
import {formatCurrency} from "@/src/utils"
import {createOrder}    from "@/actions/create-order-action"
import {OrderSchema}    from "@/src/schema"

export default function OrderSummary() {

    const {order, clearOrder} = useStore()
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const handleCreateOrder = async (formData: FormData) => {
        const data = {
            name: formData.get('nombre'),
            total,
            order
        }

        // Validación en el cliente
        const result = OrderSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.map(issue => {
                toast.warn(issue.message)
            })
            /**Si no pasa la validación del cliente
             * no llega al servidor.*/
            return
        }
        
        // Vínculo a la validación en el servidor
        const response = await createOrder(data)
        if(response?.errors) {
            response.errors.map(issue => {
                toast.error(issue.message)
            })
        }

        /**Acá ya no hay errores de validación
         * ni en el cliente ni en el servidor.*/
        toast.success('Pedido realizado correctamente')
        clearOrder()
    }

    return (
        <aside className='lg:h-screen lg:overflow-y-scroll lg:w-96 md:w-64 p-5'>
            <h1 className='m-10 text-4xl text-center font-black'>Mi pedido</h1>

            {order.length === 0
            ? <p className='text-center my-10'>
                Todavía no elegiste nada
              </p>
            : (
                <div className="mt-5">
                    {order.map(item => (
                        <ProductDetails
                        key={item.id}
                        item={item}
                        />
                    ))}
                    <p className='text-2xl mt-14 text-center'>
                        Total a pagar: {''}
                        <span className='font-bold'>{formatCurrency(total)}</span>
                    </p>

                    <form
                    className='w-full mt-10 space-y-5'
                    action={handleCreateOrder}
                    >
                        <input
                        type="text"
                        placeholder='Tu nombre'
                        className='w-full p-2 bg-white border border-slate-100'
                        name='nombre'
                        />

                        <input
                        type='submit'
                        className='py-2 rounded uppercase text-white bg-black w-full text-center font-bold cursor-pointer'
                        value='Confirmar pedido'
                        />
                    </form>
                </div>
            )}
        </aside>
    )
}
