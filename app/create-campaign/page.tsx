"use client";
import React, {useState, useEffect, ChangeEvent} from 'react'
import { ethers } from 'ethers'
import CustomButton from '@/components/button'
import FormInput from '@/components/form';
import { checkImageexist } from '../../utils/utility'
import { useStateContext } from '../../context';
type Props = {}

const CreateCampaignPage = (props: Props) => {
  const [isLoading, setIsLoading]= useState(false);
  const { createCampaign }=useStateContext();
  const[ form, setForm]=useState({
    name:'',
    title: '',
    description: '',
    targetAmount: '',
    deadline: '',
    image: ''
  })

  const navigate=(link: string)=>{
    window.location.href= link;
  }

  const handleFormInputChange=(fieldName:string, e:ChangeEvent<HTMLInputElement>)=>{
    setForm({...form, [fieldName]: e.target.value})
  }
  //load the submitted data
  const handleSubmit= async(e)=>{
    e.preventDefault();

    checkImageexist(form.image, async(exists)=>{
      if(exists){
        setIsLoading(true);
        await createCampaign({...form, target: ethers.utils.parseUnits(form.targetAmount, 18)})
        setIsLoading(false);
      }else{
        alert("provide valid image url")
        setForm({...form, image: ''})
      }
    })
  }

  // frontend section
  return (
    <div className=' dark:bg-black-bg bg-light-bg border-[1px] border-solid dark:border-[#4B0150] border-indigo-300 backdrop-blur-lg backdrop-saturate-200 duration-500 ease-in-out create-campaign flex flex-col items-center justify-center rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <h1 className=' dark:font-light lg:text-4xl text-3xl leading-9 font-medium text-[#37bcf8] dark:text-white duration-300 font-raleway self-start sm:min-w-[380px] pt-4'> Let&apos;s discuss on your campaign ✨</h1>
      <form onSubmit={ handleSubmit} className=' w-full mt-10 flex flex-col gap-8'>
        <div className=' flex flex-wrap gap-10'>
            <FormInput 
              lableName="Your Name *"
              placeholder= "Kane William"
              inputType= "text"
              istextArea={false}
              value={form.name}
              handleChange={(e)=>handleFormInputChange('name',e)}
            />
          <FormInput 
            lableName="Campaign Title *"
            placeholder= "write a title for your campaign"
            inputType= "text"
            istextArea={false}
            value={form.title}
            handleChange={(e)=>handleFormInputChange('title',e)}
          />
        </div>
        <FormInput 
            lableName="Story *"
            placeholder= "write your story to run this campaign"
            istextArea
            value={form.description}
            handleChange={(e)=>handleFormInputChange('description',e)}
        />
        <div className='flex flex-wrap gap-10'>
          <FormInput 
            lableName="Goal amount *"
            placeholder= "ETH 0.50"
            inputType= "number"
            istextArea={false}
            value={form.targetAmount}
            handleChange={(e)=>handleFormInputChange('targetAmount',e)}
          />
          <FormInput 
            lableName="End date *"
            placeholder= "End Date"
            inputType= "date"
            istextArea={false}
            value={form.deadline}
            handleChange={(e)=>handleFormInputChange('deadline',e)}
          />
        </div>
        <FormInput 
            lableName="Title Image *"
            placeholder= "place image url of your campaign"
            inputType= "url"
            istextArea={false}
            value={form.image}
            handleChange={(e)=>handleFormInputChange('image',e)}
          />
        <div className=' flex justify-end items-center mt-4'>
            <CustomButton
              btntype='submit'
              title=' submit your application'
              styles=' bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800'
            />
          </div>
      </form>
    </div>
  )
}

export default CreateCampaignPage