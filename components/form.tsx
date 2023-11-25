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
    <label htmlFor={lableName} className='flex flex-col flex-1 w-full'>
        {lableName && (
            <span className=' font-medium text-sm font-inter leading-6 dark:text-[#898191] text-[#6366f1] mb-[10px]'>{lableName}</span>
        )}
        {istextArea ? (
            <textarea 
            id={lableName}
            autoComplete="off"
            name={value}  
            required 
            value={value} 
            onChange={handleChange} 
            rows={10}
            placeholder={placeholder}
            className=' py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] focus:border-indigo-600 border-slate-400 dark:border-[#3a3a43] bg-transparent text-[#1e293b] dark:text-white font-raleway text-sm placeholder:text-slate-400 dark:placeholder:text-[#4b5264] placeholder:font-raleway rounded-[10px] sm:min-w-[300px] '
        />
        ):(
            <input 
                id={lableName}
                autoComplete="off"
                name={value}
                required 
                value={value} 
                onChange={handleChange} 
                type={inputType}
                step={0.1}
                placeholder={placeholder}
                className=' py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] focus:border-indigo-600 border-slate-400 dark:border-[#3a3a43] bg-transparent text-[#1e293b] dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-[#4b5264] placeholder:font-raleway rounded-[10px] sm:min-w-[300px] '/>
        )}
    </label>
  )
}

export default FormInput;