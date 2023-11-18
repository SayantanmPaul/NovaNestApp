import React from 'react'
import Home from './home/page';
import { Metadata } from 'next';
type Props = {}

export const metadata: Metadata = {
  title: 'NovaNest Home',
}

const page = (props: Props) => {
  return (
    <div className=''>
        <div className=''>
            <Home/>
        </div>
    </div>
  )
}

export default page