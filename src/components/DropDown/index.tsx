import React from 'react'
import { DropDownPropsInt } from '../../types/Dropdown'
import { themeMap, sizeMap } from '../InputBox/staticData'
import { defaultSelectStyle } from './staticData'

const DropDown: React.FC<DropDownPropsInt> = ({
  label,
  items,
  themeColor = 'gray',
  errorText,
  rightIcon,
  DropDownsize = 'small',
  ...props
}) => {
  return (
    <label className={` ${themeMap[themeColor].label}`}>
      <p className={`${sizeMap[DropDownsize].label}`}>{label}</p>
      <div className={`flex flex-row gap-2 items-center `}>
        <select
          className={`${defaultSelectStyle} ${themeMap[themeColor]?.input} ${sizeMap[DropDownsize].input} ${
            errorText && 'border-red-500'
          }`}
          {...props}
        >
          <option disabled value={''} />
          {items.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        {rightIcon ?? <></>}
      </div>
      <div className='text-red-500 text-xs pl-1 min-h-[12px] h-[20px]'>{errorText}</div>
    </label>
  )
}

export default DropDown
