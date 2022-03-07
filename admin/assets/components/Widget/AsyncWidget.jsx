import { Fragment } from "react"
import { useQuery } from "react-query"

export default function AsyncWidget({ code, title, }) {
   const { data, isLoading } = useQuery([ `/api/widgets/${code}` ])
   return (
      <Fragment>
         {JSON.stringify({data, isLoading})}
      </Fragment>
   )
}
