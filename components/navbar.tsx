"use client";
import React,{FC, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { menu, search, thirdweb} from '../assets';
import CustomButton from './button';
import { NavLinks } from '../constants';

type Props = {}

const NavbarComp:FC<Props> = (props: Props) => {
  const [isActive, setIsActive]=useState(typeof window!=='undefined'? localStorage.getItem('active')||'dashboard':'dashboard');
  const [toggledrawer,setToggledrawer]=useState(false);

  const address='0xabc'

  const navigate=(link: string)=>{
    window.location.href= link;
  }

  return (
    <div className=' flex flex-col-reverse md:flex-row justify-between mb-[35px] gap-6 '>
      <div className=' lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-14 bg-[#230028] rounded-[20px]'>
      <input type="text" placeholder='search for campaigns' className=' flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none' />
        <div className=' w-[72px] h-full rounded-2xl bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex justify-center items-center cursor-pointer '>
          <Image src={search} alt='search' className=' w-[15px] h-[15px] object-contain'/>
        </div>
      </div>
      <div className='sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton 
          btntype="button" 
          title={address ? "create campaign": "connect"}
          styles={address? "bg-[#1dc071]:": "bg-[#8c6dfd]"}
          handleClicked={()=>{
            if(address) navigate('create-campaign')
            else navigate('connect')
          }}
        />

        <Link href='/profile'>
          <div className=' w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
            <Image src={thirdweb} alt='user' className=' w-[60%] h-[60%] object-contain  '/>
          </div>
        </Link>

        {/* mobile view */}
          

      </div>
    </div>
  )
}

export default NavbarComp 