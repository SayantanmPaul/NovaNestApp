"use client";
import React,{FC, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import navIcon from '../assets/align-right.png';
import { search, thirdweb} from '../assets';
import Novanest from '../assets/novanest.svg';
import CustomButton from './button';
import { NavLinks } from '../constants';
import { Tooltip } from '@mui/material';

type Props = {}

const NavbarComp:FC<Props> = (props: Props) => {
  const [isActive, setIsActive]=useState(typeof window!=='undefined'? localStorage.getItem('active')||'dashboard':'dashboard');
  const [toggledrawer,setToggledrawer]=useState(false);

  useEffect(()=>{
    localStorage.setItem('active', isActive)
  }, [isActive]);

  const address='0xabc'

  const navigate=(link: string)=>{
    window.location.href= link;
  }

  return (
    <div className=' flex flex-col-reverse md:flex-row justify-between mb-[35px] gap-6 '>
      <div className=' lg:flex-1 flex flex-row max-w-[458px] py-1 pl-4 pr-1 h-14 dark:bg-black-bg bg-light-bg border-[1px] border-solid dark:border-black-bg border-light-bg backdrop-blur-lg backdrop-saturate-200 rounded-full duration-500 ease-in-out'>
      <input id='search' autoComplete='off' name='search' type="text" placeholder='search for campaigns' className=' flex w-full font-normal tracking-wide text-[14px] dark:placeholder:text-[#4b5264] placeholder:text-slate-400 placeholder:font-inter font-inter dark:text-slate-200 text-[#1e293b] bg-transparent outline-none' />
        <div className=' w-[72px] h-full rounded-full bg-gradient-to-br from-[#0093E9] to-[#80D0C7] dark:bg-gradient-to-tr dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 flex justify-center items-center cursor-pointer duration-500 ease-in-out '>
          <Image width={40} height={40} src={search} alt='search' className=' w-[15px] h-[15px] object-contain'/>
        </div>
      </div>
      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton 
          btntype="button" 
          title={address ? "create campaign": "onnect"}
          styles={address? "bg-[#1dc071]:": "bg-[#8c6dfd]"}
          handleClicked={()=>{
            if(address) navigate('create-campaign')
            else navigate('connect')
          }}
        />

        <Link href='/profile'>
          <Tooltip title='profile' placement='bottom'>
            <div className=' w-14 h-14 rounded-xl dark:bg-[#2c2f32] bg-[#c2e9ed] flex justify-center items-center cursor-pointer duration-500 ease-in-out '>
              <Image width={40} height={40} src={thirdweb} alt='user' className=' w-[60%] h-[60%] object-contain  '/>
            </div>
          </Tooltip>
        </Link>          
      </div>

      {/* mobile view */}
      <div className=' sm:hidden flex justify-between items-center relative'>
        <div className=' w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
          <Image priority src={thirdweb} alt='user' className=' w-[60%] h-[60%] object-contain  '/>
        </div>
        <div className=' text-white cursor-pointer '>
          <Image src={Novanest} alt='novanest' className=' w-24 object-contain cursor-pointer' />
        </div>
        <Image src={navIcon} alt='menu' className=' w-[28px] h-28px] object-contain cursor-pointer mr-2' onClick={()=> setToggledrawer((prev)=>!prev)}/>
        <div className={`absolute top-16 right-0 left-0 rounded-xl dark:bg-black-bg bg-light-bg border-[1px] border-solid dark:border-black-bg border-light-bg backdrop-blur-lg backdrop-saturate-200 z-10 shadow-xl py-4 ${!toggledrawer?'-translate-y-[100vh]':'translate-y-0'} transition-all duration-700`}>
          <ul className=' mb-4'>
            {NavLinks.map((content)=>(
              <li key={content.name} className={`flex p-4 mx-2 ${isActive===content.name && 'bg-[#3a3a43] rounded-lg'}`} onClick={()=>{
                setIsActive(content.name)
                setToggledrawer(false)
                navigate(content.link)
              }}>
                <Image src={content.imgURl} alt={content.name} className={`w-6 h-6 object-contain ${isActive===content.name? ' grayscale-0': ' grayscale'}`}/>
                <p className={`ml-5 font-semibold text-sm ${isActive=== content.name? 'text-[#1dc071] ': 'text-[#808191]'}`}>{content.name}</p>
              </li>
            ))}
          </ul>
          <div className=' flex mx-4'>
            <CustomButton 
              btntype="button" 
              title={address ? "create campaign": "onnect"}
              styles={address? "bg-[#1dc071]:": "bg-[#8c6dfd]"}
              handleClicked={()=>{
                if(address) navigate('create-campaign')
                else navigate('connect')
              }}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default NavbarComp 