import { formatAmount } from '@/utils/stripe'
import Link from 'next/link'
import React from 'react'


const ProductCard = ({ item, index }) => {
    return (
        <Link href={`/products/${item.id}`} className='w-full sm:w-64 h-62 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl'>
            <img fetchPriority={index == 0} src={item.images[0]} className='w-full h-40'></img>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold'>{item.name}</h1>
                    <p className='w-40 truncate'>{item.decription}</p>
                </div>
                <div className='font-bold text-green-500 py-2'>{formatAmount(item.default_price.unit_amount)}</div>
            </div>
        </Link>
    )
}

export default ProductCard
