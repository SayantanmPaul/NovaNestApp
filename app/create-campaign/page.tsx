"use client";
import React, {useState, useEffect, ChangeEvent} from 'react'
import { ethers } from 'ethers'
import { money } from '../../assets'
import CustomButton from '@/components/button'
import FormInput from '@/components/form';
import { checkImageexist } from '../../utils/utility'
type Props = {}

const CreateCampaignPage = (props: Props) => {
  
  const [isLoading, setIsLoading]= useState(false);
  const[ form, setForm]=useState({
    name:'',
    title: '',
    description: '',
    targetAmount: '',
    deadline: '',
    image: ''
  })
  const handleFormInputChange=(fieldName:string, e:ChangeEvent<HTMLInputElement>)=>{
    setForm({...form, [fieldName]: e.target.value})
  }
  //load the submitted data
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form);  
  }

  // frontend section
  return (
    <div className=' bg-[#1c1c24] create-campaign flex flex-col items-center justify-center rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <h1 className=' font-light lg:text-4xl text-3xl leading-9 text-white font-raleway self-start sm:min-w-[380px] pt-4'> Let&apos;s discuss on your campaign ✨</h1>
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