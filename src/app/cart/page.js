'use client'

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import { useCart } from '../../utils/useCart'

const page = () => {
    const { cartCount, cartItems, cartTotal, incrementItem, decrementItem, deleteAll, deleteById } = useCart()
    return (
        <div className='m-5 px-20'>

            {cartCount > 0 ? (
                <>
                    <h2 className='text-4xl font-semibold'>cart items : {cartCount}</h2>
                    <button className='text-orange-500 font-bold hover:text-red-500 hover:cursor-pointer'>
                        clear all <TrashIcon className='w-4 h-4 inline-block' onClick={deleteAll} />
                    </button>
                </>
            ) : (
                <>
                    <h2 className='text-4xl font-semibold'>Your shopping cart is Empty !</h2>
                    <Link href='/products' className='text-orange-500 text-xl underline'>Shop here </Link>



                </>
            )}

            {

                cartCount > 0 && (
                    <div>
                        {
                            cartItems.map((item) => {
                                return (

                                    <div className='bg-white flex justify-between border rounded hover:shadow-lg my-2 '>
                                        <Link className='flex items-center py-2' href={`/product/${item.id}`}>
                                            <img src='/images/1.png' className='w-20 h-auto' />
                                            <p className='font-semibold text-xl ml-2'>{item.name}</p>
                                        </Link>
                                        <div className=' flex items-center gap-5'>
                                            <div className='flex items-centre gap-3'>
                                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                                    <MinusIcon className='w-6 h-6' onClick={() => decrementItem(item.id)} />
                                                </button>
                                                <p className='font-semibold text-xl'>{item.quantity}</p>
                                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                                    <PlusIcon className='w-6 h-6' onClick={() => incrementItem(item.id)} />
                                                </button>
                                            </div>
                                            <p>x <span className='text-xl font-semibold'>{item.price}</span></p>
                                            <button className='text-orange-500  hover:text-red-700 px-2'>
                                                <XCircleIcon className='w-6 h-6' onClick={() => deleteById(item.id)} />
                                            </button>
                                        </div>




                                    </div >

                                )
                            })
                        }

                        <div className='flex flex-col items-end border-t mt-8 py-4'>
                            <p className='text-xl'> Total      <span className='font-bold text-green-500'>{cartTotal}</span></p>
                            <button className='mt-4 py-2 px-6 rounded-md   bg-orange-500 text-white hover:cursor-pointer hover:bg-red-500 '>Checkout</button>
                        </div>
                    </div>
                )}

        </div>

    )
}

export default page
