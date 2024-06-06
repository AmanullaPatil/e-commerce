import { LinkIcon } from '@heroicons/react/24/solid'
import React from 'react'

const ShareBtn = () => {
    return (
        <button className='text-orange-500 font-bold hover:cursor-pointer hover:text-red-600'>
            <LinkIcon className='w-4 h-5 inline-block mr-2' />
            Share Link
        </button>
    )
}

export default ShareBtn
