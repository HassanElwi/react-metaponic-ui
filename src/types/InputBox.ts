import { ReactNode } from 'react'

export interface InputPropsInt extends React.HTMLProps<HTMLInputElement> {
  label?: string
  themeColor?: 'gray' | 'white' | 'dark-2'
  errorText?: string
  rightIcon?: ReactNode
  innerRightIcon?: ReactNode
  inputSize?: 'large' | 'small' | 'medium'
  isRequired?: boolean
}
