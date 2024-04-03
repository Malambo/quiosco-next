'use client'

import {useState} from 'react'
import Image from 'next/image'
import {CldUploadWidget} from 'next-cloudinary'
import {TbPhotoPlus} from 'react-icons/tb'


export default function ImageUpload() {

    const [imageUrl, setImageUrl] = useState('')

    return (
        <CldUploadWidget
        onSuccess={(result, {widget}) => {
            if(result.event === 'success') {
                widget.close()
                // @ts-ignore
                setImageUrl(result.info?.secure_url)
            }
        }}
        uploadPreset='beanxrwl'
        options={{
            maxFiles: 1
        }}
        >
            {({open}) => (
                <>
                <div className='space-y-2'>
                    <label >Imagen del producto</label>

                    <div
                    className='relative flex flex-col justify-center items-center gap-4 p-10 hover:opacity-70 transition border-neutral-300 text-neutral-600 bg-slate-100 cursor-pointer'
                    onClick={() => open()}
                    >
                        <TbPhotoPlus
                        size={50}
                        />
                        <p className='text-lg font-semibold'>Agregar imagen</p>

                        {imageUrl && (
                            <div
                            className='absolute inset-0 w-full h-full'
                            >
                                <Image
                                    fill
                                    style={{objectFit: 'contain'}}
                                    src={imageUrl}
                                    alt='Imagen de producto'
                                />
                            </div>
                        )}
                    </div>
                </div>

                <input
                type='hidden'
                name='image'
                value={imageUrl}
                />
                </>
            )}
        </CldUploadWidget>
    )
}
