export default function Cell({ children, ...props }) {
   return (
      <td className={`text-sm ${props.className}`}>
         {children}
      </td>
   )
}
