import { useContext, useEffect, useState } from 'react';
import { productsCtx } from '../components/Provider'






export const useCart = () => {
    const { cartItems, setCartItems } = useContext(productsCtx)
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setCartCount(cartItems.length)
        totalAmount()
        populateCartItems()
    }, [cartItems])

    const populateCartItems = () => {
        if (cartItems.length == 0) {
            const products = localStorage.getItem('products')
            if (products) {
                const temp = JSON.parse(products)
                // setCartItems(temp)
            }

        }
    }

    const totalAmount = () => {
        let amount = 0
        cartItems.forEach(item => {
            amount += (item.price / 100) * item.quantity
        });
        setCartTotal(amount)
    }


    const addItem = (product) => {

        const existingProductIndex = cartItems.findIndex((item) => item.id == product.id)
        const updatedCart = [...cartItems]
        if (existingProductIndex != -1) {
            updatedCart[existingProductIndex].quantity += 1
        } else {
            updatedCart.push({ ...product, quantity: 1 })

        }

        localStorage.setItem('products', JSON.stringify(updatedCart))

        setCartItems(updatedCart)


    }

    const deleteById = (productId) => {
        const newProducts = (productId) => cartItems.filter(product => productId != product.id)
        setCartItems(newProducts)
        if (newProducts.length == 0) {
            localStorage.removeItem('products')
        } else {

            localStorage.setItem('products', JSON.stringify(newProducts))

        }
    }

    const deleteAll = () => {
        localStorage.removeItem('products')
        setCartItems([]);
    }

    const incrementItem = (productId) => {
        const newProducts = cartItems.map(item => {
            if (item.id == productId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })
    }
    const decrementItem = (productId) => {
        const newProducts = cartItems.map(item => {
            if (item.id == productId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item
            }
        })
    }



    return {
        cartCount, cartTotal, cartItems, addItem, deleteById, deleteAll, incrementItem, decrementItem//

    }
}