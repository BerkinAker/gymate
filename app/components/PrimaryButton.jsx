'use client'

const PrimaryButton = ({ color, bgColor, arrowColor, text, hover, classN}) => {
  return (
    <div className={`${classN} primary-button-animation relative pt-[18px] ${color} ${bgColor} text-center font-bold uppercase text-[15px] w-48 h-14 cursor-pointer ${hover}`}>
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-hoverColor ${arrowColor}`}></i>
    </div>
  )
}

export default PrimaryButton