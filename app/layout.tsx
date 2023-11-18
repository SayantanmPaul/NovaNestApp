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
          <div className='sm:-8 p-4 bg-[#100720] min-h-screen flex flex-row'>
            <div className='sm:flex hidden mr-10 relative'>
              <SidebarComp/>
              {children}
            </div>
            <div className=' flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
              <NavbarComp/> 
            </div>
          </div>
        </body>
      </html>
    )
}