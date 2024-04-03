'use server'

import {prisma} from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"

export default async function ProductForm() {

    const categories = await prisma.category.findMany()

    return (
        <div className="space-y-6">
            <div>
                <label
                className="text-slate-800 text-sm"
                htmlFor="name"
                >
                    Nombre:
                </label>

                <input
                id="name"
                type="text"
                name="name"
                className="block w-full p-3 bg-slate-100"
                placeholder="Nombre Producto"
                />
            </div>

            <div>
                <label
                className="text-slate-800 text-sm"
                htmlFor="price"
                >
                    Precio:
                </label>

                <input
                id="price"
                name="price"
                className="block w-full p-3 bg-slate-100"
                placeholder="Precio Producto"
                />
            </div>

            <div>
                <label
                className="text-slate-800 text-sm"
                htmlFor="categoryId"
                >
                    Categoría:
                </label>

                <select
                className="block w-full p-3 bg-slate-100"
                id="categoryId"
                name="categoryId"
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option
                        key={category.id}
                        value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <ImageUpload />
        </div>
    )
}