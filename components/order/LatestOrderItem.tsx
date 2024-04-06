import {OrderWithProducts} from "@/src/types"

interface LatestOrderItemProps {
    order: OrderWithProducts
}

export default function LatestOrderItem({order}: LatestOrderItemProps) {

    return (
        <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
            <p className='text-xl font-bold text-slate-600'>{order.name}</p>

            <ul
            className='divide-y divide-slate-200 border-t-2 text-sm font-medium text-slate-600 last-of-type:border-b-2'
            role='list'
            >
                {order.orderProducts.map(product => (
                    <li
                    key={product.id}
                    className='flex gap-3 py-6 text-lg'
                    >
                        <p className="font-black">{product.quantity}</p> {''}
                        <p>{product.product.name}</p>
                    </li>
                ))}                
            </ul>
        </div>


    )
}
