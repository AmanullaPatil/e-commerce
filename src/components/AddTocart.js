'use client'
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../utils/useCart';


const AddTocart = ({ product }) => {

    const { addItem } = useCart()
    const handleAdd = () => {
        addItem(product)
        toast.success(`${product.name} added to cart`)

    }
    return (
        <div>
            <button onClick={handleAdd} className=' mt-4 py-2 px-6 rounded-md   bg-orange-500 text-white hover:cursor-pointer hover:bg-red-500 w-full'>
                Add To Cart
            </button>
            <Toaster />
        </div>
    )
}

export default AddTocart
