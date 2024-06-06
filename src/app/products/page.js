import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/services/productServices'
import React from 'react'


const page = async () => {

    const products = await getProducts()
    // console.log('All products page returned')


    return (
        <div className='my-4 mx-12 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2'>
            {products.data.map((item, index) => <ProductCard key={item.id} item={item} index={index} />
            )}
        </div>
    )
}

export default page