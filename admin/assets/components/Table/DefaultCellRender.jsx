import { useMemo } from "react"

export default function DefaultCellRender(props) {
   const displayText = useMemo(() => {
      try {
         // return new Date(props.value).toLocaleString('en-IN', { })
         return props.value
      } catch (error) {
         return props.value
      }
   }, [ props.value ])
   return (
      <div>
         {displayText}
      </div>
   )
}
