import React from 'react'

type Props = {
    btntype: string,
    title: string,
    styles: string,
    handleClicked: ()=> void
}

const CustomButton:React.FC<Props>= ({btntype, title, handleClicked, styles}) => {
  return (
    <button type={btntype}
    className={` font-semibold sm:font-medium text-sm leading-6 text-white px-4 py-3 rounded-xl  ${styles==="bg-[#1dc071]"? "bg-[#1dc071]" : " bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}`}
    onClick={handleClicked}>
        {title}
    </button>
  )
}

export default CustomButton