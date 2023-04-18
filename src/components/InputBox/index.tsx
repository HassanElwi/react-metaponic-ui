import React from 'react'
import { sizeMap, themeMap, defaultInputStyle } from './staticData'
import { InputPropsInt } from '../../types/InputBox'

const InputBox: React.FC<InputPropsInt> = ({
  label,
  themeColor = 'gray',
  errorText,
  rightIcon,
  inputSize = 'small',
  innerRightIcon,
  ...props
}) => {
  return (
    <label className={`${themeMap[themeColor]?.label}`}>
      <p className={`${sizeMap[inputSize].label}`}>{label}</p>
      <div className='flex flex-row'>
        <div
          className={`${defaultInputStyle} ${themeMap[themeColor]?.input} ${sizeMap[inputSize].input} ${
            errorText && 'border-red-500'
          }`}
        >
          <input className={`bg-inherit outline-none w-full`} {...props} />
          {innerRightIcon ?? <></>}
        </div>
        {rightIcon ?? <></>}
      </div>
      <div className='text-red-500 text-xs pl-1 min-h-[20px]'>{errorText}</div>
    </label>
  )
}
export default InputBox
