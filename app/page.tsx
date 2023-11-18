import React from 'react'
import Home from './home/page';
import { Metadata } from 'next';
type Props = {}

export const metadata: Metadata = {
  title: 'NovaNest:home',
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