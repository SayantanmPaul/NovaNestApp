"use client";
import React, {FC, useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dark from '../assets/darkmode.svg'
import light from '../assets/lightmode.svg'
import puzzle from '../assets/puzzle2.png'
import { NavLinks } from '../constants'
import { Tooltip } from '@mui/material';
import { useTheme } from 'next-themes';
import { title } from 'process';

//utilicon component props
interface NovaNestIconProps{
    styles: string,
    name: string,
    imgURl: string,
    isActive: string,
    disabled: boolean,
    handleClicked: ()=>void
}

//utilicon props
const UtilIcon:FC<NovaNestIconProps>=({styles, name, imgURl, isActive, disabled, handleClicked})=>(
    <Tooltip title={name} placement='right'>
        <div className={` w-[48px] h-[48px] rounded-lg ${isActive && isActive==name && `dark:bg-[#4B0150] bg-[#f5e5f5] `} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClicked}>
        {!isActive ?(
            <Image width={40} height={40} src={imgURl} priority alt='NovaNestIcon' className=' w-1/2 h-1/2'/>
        ):(
            <Image width={40} height={40} src={imgURl} priority alt='Icon' className={`w-1/2 h-1/2 ${isActive !== name && `dark:grayscale dark:brightness-100 grayscale(1) brightness-50`}`} />
        )}
        </div>
    </Tooltip>
)

type SideBarProps = {}

//main sidebar compoment
const SidebarComp:FC<SideBarProps>= (props: SideBarProps) => {

    const {resolvedTheme, setTheme}=useTheme();

    const [isActive, setIsActive]=useState(localStorage.getItem('active')||'dashboard' );

    //navigation active state
    useEffect(()=>{
        localStorage.setItem('active', isActive);
    },[isActive])


    const navigate=(link:string)=>{
        window.location.href= link;
    }

  return (
    <div className=' flex flex-col justify-between items-center top-5 h-[90vh] sticky ease-in-out duration-500'>
        <div className=' dark:bg-[#2c1f32] bg-[#eef1f5] hover:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg ease-in-out duration-500'>
            <Link href={{pathname: "/"}}>
                <UtilIcon styles=" w-[56px] h-[56px] bg-[#f5e5f5] dark:bg-gradient-to-tr dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 m-[1px] " imgURl={puzzle} name='NovaNest' disabled={false} key='logo' />
            </Link>
        </div> 
        <div className=' flex flex-col flex-1 justify-between items-center dark:bg-[#230028] bg-[#eef1f5] bg-slate-00 rounded-3xl w-[76px] py-4 mt-12 duration-500 ease-in-out'>
            <div className=' flex flex-col justify-center items-center gap-3'>
                {NavLinks.map((content)=>(
                    <UtilIcon 
                        key={content.name}  
                        {...content} 
                        isActive={isActive} 
                        handleClicked={()=>{
                            if(!content.disabled){
                                setIsActive(content.name);
                                navigate(content.link);
                            }
                        }} />       
                ))} 
            </div>
            <Tooltip title={resolvedTheme==='dark'? 'light': 'dark'} placement='right'>
                <button className='flex items-center justify-center ' onClick={()=> setTheme(resolvedTheme==='dark'? 'light': 'dark')}>
                {resolvedTheme === 'dark' ?(
                    <Image width={40} height={40} src={dark} alt='darkmode' className='w-5 h-5 mb-3 object-contain ease-in-out hover:animate-spin duration-500'/>
                ) : (
                    <Image width={40} height={40} src={light} alt='darkmode' className='w-5 h-5 mb-3 object-contain ease-in-out hover:animate-spin duration-500'/>
                )}
                </button>
            </Tooltip>
        </div>
    </div>
  )
}

export default SidebarComp