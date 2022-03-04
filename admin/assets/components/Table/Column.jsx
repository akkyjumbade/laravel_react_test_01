export default function Column({ children, ...props }) {
   return (
      <th
         className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${props.className}`}
         {...props}
         >
         {children}
      </th>
   )
}
