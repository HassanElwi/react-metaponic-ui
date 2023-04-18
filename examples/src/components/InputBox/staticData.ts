export const sizeMap = {
  small: { input: 'py-1 px-2', label: 'text-sm mb-2' },
  medium: { input: 'py-2 px-3', label: 'text-lg mb-2' },
  large: { input: 'py-4 px-4', label: 'text-xl mb-2' },
}

export const themeMap = {
  gray: {
    inputContainer: 'bg-[#575757] border-1-[#A2A2A2] text-white',
    input: 'placeholder:text-xs placeholder:text-[#8E8E8E]',
    label: 'text-white',
  },
  white: {
    inputContainer: 'bg-[#FFFFFF] border border-[#C1C1C1] text-[#1B1B1B]',
    input: 'placeholder:text-xs placeholder:text-[#8E8E8E]',
    label: 'text-[#1B1B1B]',
  },
  'dark-2': {
    inputContainer: 'bg-[#3A3A3A] border border-[#707070] text-[#FFFFFF]',
    input: 'placeholder:text-xs placeholder:text-[#AFAFAF]',
    label: 'text-[#FFFFFF]',
  },
}

export const defaultInputStyle = 'rounded-sm outline-none w-full flex items-center justify-center'
