'use client'

import { createContext, useState } from 'react'

export const productsCtx = createContext(null)

const Provider = ({ children }) => {
    const [cartItems, setCartItmes] = useState([])

    return (
        <productsCtx.Provider value={{ cartItems, setCartItmes }}>
            {children}
        </productsCtx.Provider>
    )
}
export default Provider