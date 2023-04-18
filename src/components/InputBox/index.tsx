import React, { ReactNode } from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  themeColor?: 'gray' | 'white' | 'dark-2'
  errorText?: string
  rightIcon?: ReactNode
  innerRightIcon?: ReactNode
  inputSize?: 'large' | 'small' | 'medium'
}

const sizeMap = {
  small: { input: 'py-1 px-2', label: 'text-sm' },
  medium: { input: 'py-2 px-3', label: 'text-lg mb-2' },
  large: { input: 'py-4 px-4', label: 'text-xl mb-4' },
}

const themeMap = {
  gray: {
    input: 'bg-[#575757] border-1-[#A2A2A2] text-white',
    label: 'text-white',
  },
  white: {
    input: 'bg-[#FFFFFF] border border-[#4F5154] text-[#1B1B1B]',
    label: 'text-[#1B1B1B]',
  },
  'dark-2': {
    input: 'bg-[#3A3A3A] border border-[#707070] text-[#FFFFFF]',
    label: 'text-[#FFFFFF]',
  },
}

const defaultInputStyle = 'rounded-sm outline-none w-full flex items-center justify-center'

const InputBox: React.FC<InputProps> = ({
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
