import { ReactNode } from 'react'

interface ItemType {
  name: string
  value: string | number
}

export interface DropDownPropsInt extends React.HTMLProps<HTMLSelectElement> {
  label?: string
  items: ItemType[]
  errorText?: string
  DropDownsize?: 'small' | 'medium' | 'large'
  rightIcon?: ReactNode
  themeColor?: 'gray' | 'white'
}
