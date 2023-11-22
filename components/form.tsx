import React from 'react'

type Props = {
    lableName?: string,
    placeholder: string,
    inputType?: string,
    istextArea: boolean,
    value: string,
    handleChange: (fieldName:string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void   
}

const FormInput:React.FC<Props> =( {lableName, placeholder, inputType, istextArea, value, handleChange}) => {
  return (
    <label className='flex flex-col flex-1 w-full'>
        {lableName && (
            <span className=' font-medium text-sm font-raleway leading-6 text-[#898191] mb-[10px]'>{lableName}</span>
        )}
        {istextArea ? (
            <textarea   
            required 
            value={value} 
            onChange={handleChange} 
            rows={10}
            placeholder={placeholder}
            className=' py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent text-white font-raleway text-sm placeholder:text-[#4b5264] placeholder:font-raleway rounded-[10px] sm:min-w-[300px]'
        />
        ):(
            <input 
                required 
                value={value} 
                onChange={handleChange} 
                type={inputType}
                step={0.1}
                placeholder={placeholder}
                className=' py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent text-white text-sm font-raleway placeholder:text-[#4b5264] placeholder:font-raleway rounded-[10px] sm:min-w-[300px]'/>
        )}
    </label>
  )
}

export default FormInput;