"use client";
import React, {FC} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sun } from '../assets'
import puzzle from '../assets/puzzle2.png'
import { NavLinks } from '../constants'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
interface NovaNestIconProps{
    styles: string,
    name: string,
    imgURl: string,
    isActive: string,
    disabled: boolean,
    handleClicked: ()=>void
}


const NovaNestIcon:FC<NovaNestIconProps>=({styles, name, imgURl, isActive, disabled, handleClicked})=>(
    <div className={` w-[48px] h-[48px] rounded-lg ${isActive && isActive==name && `bg-[#2c2f32]`} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClicked}>
        {!isActive ?(
            <Image src={imgURl} alt='NovaNestIcon' className=' w-1/2 h-1/2'/>
        ):(
            <Image src={imgURl} alt='NovaNestIcon' className={`w-1/2 h-1/2 ${isActive !== name && `grayscale`}`} />
        )}
    </div>
)

type SideBarProps = {}

const SidebarComp:FC<SideBarProps>= (props: SideBarProps) => {
    const[isActive, setIsActive]=useState<string>('dashboard');
    const pathname=usePathname();
    const navigate=(link:string)=>{
        window.location.href= link;
    }

        
  return (
    <div className=' flex flex-col justify-between items-center top-5 h-[90vh] sticky'>
        <div className=' bg-[#2c1f32] hover:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg ease-in-out duration-200'>
        <Link href={{pathname: "/"}}>
            <NovaNestIcon styles=" w-[56px] h-[56px] bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 m-[1px] " imgURl={puzzle} name='logo' disabled={false} key='logo' />
        </Link>

        </div> 
        <div className=' flex flex-col flex-1 justify-between items-center bg-[#230028] rounded-3xl w-[76px] py-4 mt-12'>
            <div className=' flex flex-col justify-center items-center gap-3'>
                {NavLinks.map((link)=>(
                    <NovaNestIcon key={link.name} {...link} isActive={isActive} handleClicked={()=>{
                        if(!link.disabled){
                            setIsActive(link.name);
                            window.location.href=link.link;
                        }
                    }} />   
                ))} 
            </div>
            <NovaNestIcon styles='hover:bg-[#1c1c24] duration-500 shadow-secondary' imgURl={sun}/>
            
        </div>
    </div>
  )
}

export default SidebarComp