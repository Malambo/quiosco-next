import {z} from 'zod'

export const OrderSchema = z.object({
    name:  z.string()
                .min(3, 'El nombre debe tener 3 caracteres o más'),
    total: z.number()
                .min(1, 'Hay errores en la orden'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message: 'Escriba algo para buscar'})
})

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El nombre del producto es obligatorio'}),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'El precio debe ser una cantdidad positiva' })
        .or(z.number().min(1, {message: 'La Categoría es obligatoria' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'La categoría es obligatoria' })
        .or(z.number().min(1, {message: 'La Categoría es obligatoria' })),
    image: z.string()
            .min(1, {message: 'La imagen es obligatoria'})
})
