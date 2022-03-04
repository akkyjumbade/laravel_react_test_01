import { useMemo } from "react"
import Column from "./Column"

export default function DataTable({ children, ...props }) {
   // const { children } =
   const Columns = useMemo(() => {
      console.log({ children })
      return children
   }, [ children ])
   return (
      <>
         {Columns}
      </>
   )
}

DataTable.Field = ({ value, label }) => {
   return (
      <Column>{label}</Column>
   )
}
