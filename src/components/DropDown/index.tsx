// import React, { ReactNode } from 'react'

// interface ItemType {
//   name: string
//   value: string | number
// }

// interface DropDownProps extends React.HTMLProps<HTMLSelectElement> {
//   label?: string
//   items: ItemType[]
//   labelStyle?: any
//   extraStyles?: any
//   errorText?: string
//   rightIcon?: ReactNode
//   themeColor?: 'gray' | 'white'
// }

// const themeMap = {
//   gray: {
//     select: {
//       backgroundColor: '#575757',
//       borderColor: '#A2A2A2',
//       color: 'white',
//     },
//     label: {
//       color: 'white',
//     },
//   },
//   white: {
//     select: {
//       backgroundColor: '#ffffff',
//       borderColor: '#4F5154',
//       color: '#1B1B1B',
//     },
//     label: {
//       color: '#1B1B1B',
//     },
//   },
// }

// const defaultSelectStyle = {
//   outline: 'none',
//   padding: '4px',
//   border: '1px solid',
//   width: '100%',
//   borderRadius: '3px',
//   cursor: 'pointer',
// }

// const defaultLableStyle = {
//   fontSize: '14px',
// }

// const DropDown: React.FC<DropDownProps> = ({
//   label,
//   items,
//   labelStyle,
//   extraStyles = {},
//   themeColor,
//   errorText,
//   rightIcon,
//   ...props
// }) => {
//   return (
//     <label
//       style={{
//         ...defaultLableStyle,
//         //@ts-ignore
//         ...themeMap[themeColor]?.label,
//         ...labelStyle,
//       }}
//     >
//       <span>{label}</span>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: '5px',
//           alignItems: 'center',
//         }}
//       >
//         <select
//           style={{
//             ...defaultSelectStyle,
//             //@ts-ignore
//             ...themeMap[themeColor]?.select,
//             ...extraStyles,
//           }}
//           {...props}
//         >
//           <option disabled value={''} />
//           {items.map((item, index) => (
//             <option key={index} value={item.value}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         {rightIcon ?? <></>}
//       </div>
//       <div
//         style={{
//           color: 'red',
//           fontSize: '12px',
//           paddingLeft: '2px',
//           minHeight: '12px',
//           height: '20px',
//         }}
//       >
//         {errorText}
//       </div>
//     </label>
//   )
// }

// export default DropDown
