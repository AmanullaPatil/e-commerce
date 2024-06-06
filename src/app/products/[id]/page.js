import React from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'
import ShareBtn from '../../../components/shareBtn'
import AddToCart from '../../../components/AddTocart'
import { getProductById, getProducts } from '../../../services/productServices'
import { formatAmount } from '../../../utils/stripe'


export const generateStaticparams = async () => {
    const product = await getProducts()
    const ids = product.data.map(item => ({ id: item.id }))
    return ids


}

export const generateMetadata = async ({ params: { id } }) => {
    const product = await getProductById(id)
    // console.log(product)
    return {
        title: `Mega Store | ${product.name}`
    }
}

const Product1 = async ({ params: { id } }) => {
    const product = await getProductById(id)
    // console.log('product page returned')

    const clientProduct = {
        // name: product.name,
        description: product.description,
        id: product.id,
        price: product.default_price.unit_amount,
        price_id: product.default_price.id,
        currency: 'INR',
        image: product.images[0]
    }


    return (
        <div className='m-2 px-20'>
            <div className='flex justify-around items-center flex-wrap'>
                <div className='w-80 h-80 rounded'>
                    <img src={product.images[0]} className='w-full h-auto' />
                </div>
                <div className='max-w-md border shadow-lg p-6 bg-white'>
                    <h2 className='text-3xl font-semibold'> {product.name}</h2>
                    <div className='flex pt-2 gap-2'>
                        <CheckIcon className='text-lime-500 w-5 h-5 ' />
                        <span className='font-semibold'>In Stock</span> |
                        < ShareBtn />
                    </div>
                    <div className='mt-4 pt-4 border-t'>
                        <p className='text-gray-500'>price:</p>
                        <p className='font-semibold text-xl'>{formatAmount(product.default_price.unit_amount)}</p>
                    </div>
                    <AddToCart product={clientProduct} />
                </div>
            </div>
            <p className='mt-8 text-2xl'>
                {product.description}
            </p>
        </div>
    )
}

export default Product1
