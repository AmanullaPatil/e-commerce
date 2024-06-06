'use client'
import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { useCart } from '@/utils/useCart'

const NavBar = () => {
    const { cartCount } = useCart
    return (
        <div>
            <nav className='bg-white flex px-2 py-2 justify-between'>
                <Link href='/' className='text-orange-500 text-3xl font-bold'>Mega Store </Link>
                <Link href='/cart' className='text-orange-500 px-4 py-2 font-bold hover:text-red-500 hover:cursor-pointer'>
                    <ShoppingCartIcon className='w-7 h-7 inline-block' />Cart
                    <span>{cartCount}</span>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
