/**Este archivo está preparado para ser usado
 * con SWR. Yo opté por no usar ese procedimiento
 * y preferí utilizar el botón manual.
 * 
 * Este mismo código se reproduce en /app/orders/page.tsx
 */

import {prisma} from "@/src/lib/prisma";


export async function GET() {

  const orders = await prisma.order.findMany({
    take: 5,                // Traemos 5 órdenes
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
  return Response.json(orders)  // Respuesta a la función GET

}