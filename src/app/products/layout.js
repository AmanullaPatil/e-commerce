import Link from 'next/link'
import React from 'react'

function layout({ children }) {
    return (
        <div>
            <Link href='/products' className="font-bold text-orange-500 hover:underline inline-block p-4">All products</Link>
            {children}

        </div>
    )
}
export default layout
