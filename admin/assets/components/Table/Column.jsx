import { css, jsx } from "@emotion/react"
// jsx
const StyledColum = css`
   background-color: red;
`
export default function Column({ children, ...props }) {
   return (
      <th
         className={`text-sm text-left ${props.className}`}
         {...props}
         >
         <span>{children}</span>
      </th>
   )
}
