import {prisma} from '@/src/lib/prisma'
import Heading from "@/components/ui/Heading"
import OrderCard from '@/components/order/OrderCard'
import {revalidatePath} from 'next/cache'

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where: {
            status: false       // Sólo las órdenes pendientes
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return orders
}


export default async function OrdersPage() {

    const orders = await getPendingOrders()

    const refreshOrders = async () => {
        'use server'
        revalidatePath('admin/orders')
    }

    return (
        <>
        <Heading texto='Administrar órdenes'/>

        <form
        action={refreshOrders}
        >
            <input
            type='submit'
            value={'Actualizar órdenes'}
            className='bg-amber-300 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer hover:bg-amber-500'
            />
        </form>

        {orders.length ? (
            <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 mt-5'>
                {orders.map(order => (
                    <OrderCard
                    key={order.id}
                    order={order}
                    />
                ))}
            </div>
        ) : <p className = 'text-center'>No hay órdenes pendientes</p>}
        </>
    )
}
