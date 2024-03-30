import {OrderWithProducts} from "@/src/types"
import {formatCurrency} from '@/src/lib/utils'
import {completeOrder} from "@/actions/complete-order-action"

interface OrderCardProps {
    order: OrderWithProducts
}
export default function OrderCard({order}: OrderCardProps) {

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
        >
            <p className='text-2xl font-bold text-slate-900'>Pedido de {order.name}</p>
            
            <dl className="space-y-4">
                {order.orderProducts.map(product => (
                    <div
                    key={product.productId}
                    className='flex items-center gap-2 pt-4 pl-4 border-t border-slate-200'
                    >
                        <dt>
                            <span className='font-black'>
                                {product.quantity}
                            </span>
                        </dt>
                        
                        <dd
                        className='text-base font-medium text-slate-800'>
                            {product.product.name}
                        </dd>
                    </div>
                ))}

                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <dt className="text-base font-black text-slate-500">Total a pagar: </dt>
                    <dd className="text-amber-500 text-xl font-black">{formatCurrency(order.total)}</dd>
                </div>
            </dl>

            <form action={completeOrder}>
                <input
                type='hidden'
                value={order.id}
                name='order_id'
                />

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Marcar Orden Completada'
                />
            </form>
        </section>
    )
}