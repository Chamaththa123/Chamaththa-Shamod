import React from 'react'

export const ContactButton = ({ title, subject, selectSubject, selectedSubject }) => {
   
    return (
        <button onClick={() => selectSubject(subject)} className={` hover:bg-theme-color g border-2 border-fuchsia-950 border-opacity-30  text-[#2e02494d] hover:text-white ${selectedSubject === subject ? (' bg-theme-color text-[#fff] border-theme-color') : ('')}  md:min-w-[28%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px]  text-[14px] leading-[22px] text-center  `} >
            {title}
        </button>
    )
}
