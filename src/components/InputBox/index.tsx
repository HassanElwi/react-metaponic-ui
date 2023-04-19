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
  isRequired=false,
  ...props
}) => {
  return (
    <label className={`${themeMap[themeColor]?.label}`}>
      {/* Input label */}
      <p className={`${sizeMap[inputSize].label}`}>
        {label} {isRequired && <span className="text-[#F12D2D]">*</span>}
      </p>

      <div className='flex flex-row'>
        {/* Input container */}
        <div
          className={`${defaultInputStyle} ${themeMap[themeColor]?.inputContainer} ${sizeMap[inputSize].input} ${
            errorText ? 'border-red-500' : ''
          }`}
        >
          {/* Input */}
          <input className={`bg-inherit outline-none w-full ${themeMap[themeColor]?.input}`} {...props} />

          {/* Internal right side icon */}
          {innerRightIcon ?? <></>}
        </div>

        {/* External Right side icon */}
        {rightIcon ?? <></>}
      </div>

      {/* Error text */}
      <div className='text-red-500 text-xs pl-1 min-h-[20px]'>{errorText}</div>
    </label>
  )
}
export default InputBox
