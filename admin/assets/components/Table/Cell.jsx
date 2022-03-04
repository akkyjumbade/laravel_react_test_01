export default function Cell({ children, ...props }) {
   return (
      <td className={` ${props.className}`}>
         {children}
      </td>
   )
}
