import {revalidatePath} from "next/cache"
import {prisma} from "@/src/lib/prisma"
import Logo from "@/components/ui/Logo"
import LatestOrderItem from "@/components/order/LatestOrderItem"


async function getFihisedOrders() {

    const orders = await prisma.order.findMany({
      take: 6,                // Traemos 5 órdenes
      where: {
          orderReadyAt: {
              not: null       // Las órdenes que tengan un orderReadyAt
          }
      },
      orderBy: {
          orderReadyAt: 'desc' // La que se completó al final, primera
      },
      include: {
          orderProducts: {
              include: {
                  product: true   // Trae los productos de la orden
              }
          }
      }
    })
    return orders
}

export default async function OrdersPage() {
    const orders = await getFihisedOrders()
    const refreshOrders = async () => {
        'use server'
        revalidatePath('/orders/api')
    }

    return (
        <>
        <h1 className='mt-20 text-center text-6xl font-black'>Órdenes listas</h1>
        
        <Logo />

        <form action={refreshOrders}>
            <input
            type='submit'
            value={'Actualizar órdenes'}
            className='bg-amber-300 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer hover:bg-amber-500'
            />
        </form>

        {orders.length ? (
            <div className='grid grid-cols-3 gap-5 max-w-5xl mx-auto mt-10'>
                {orders.map(order => (
                    <LatestOrderItem
                    key={order.id}
                    order={order}
                    />
                ))}

            </div>) :
            <p>No hay órdenes listas</p>
        }
        </>
        
    )
}
