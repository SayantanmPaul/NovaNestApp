import './globals.css'
import SidebarComp from '@/components/sidebar'
import NavbarComp from '@/components/navbar'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div className='sm:-8 p-4 min-h-screen flex flex-row'>
            <div className='sm:flex hidden mr-10 relative'>
              <SidebarComp/>
            </div>
            <div className=' flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
              <NavbarComp/> 
              {children}
            </div>
          </div>
        </body>
      </html>
    )
}