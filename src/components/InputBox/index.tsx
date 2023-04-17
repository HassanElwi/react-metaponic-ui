import React, { ReactElement } from 'react'

interface InputBoxInt extends ReactElement<HTMLInputElement> {
  label?: string
  placeholder?: string
}

const InputBox: React.FC<InputBoxInt> = ({ label = '', placeholder = '' }) => {
  return (
    <div className='flex flex-col'>
      <label>{label} </label>

      <input
        type='text'
        placeholder={placeholder}
        className='outline-0 border-0.5 border-new-grey-300 rounded-sm
                py-2.5 px-3 text-xs h-9 border-opacity-60'
      />
    </div>
  )
}

export default InputBox
