"use client";
import './globals.css'
import SidebarComp from '@/components/sidebar'
import NavbarComp from '@/components/navbar'
import Providers from './provider'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { StateContextProvider } from '../context'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
        <ThirdwebProvider activeChain="goerli" clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}>
          <StateContextProvider>
            <Providers>
              <div className='sm:-8 p-4 min-h-screen flex flex-row '>
                <div className='sm:flex hidden mr-10 relative'>
                  <SidebarComp/>
                </div>
                <div className=' flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
                  <NavbarComp/> 
                    {children}
                </div>
              </div>
            </Providers>
          </StateContextProvider>
        </ThirdwebProvider>
        </body>
      </html>
    )
}