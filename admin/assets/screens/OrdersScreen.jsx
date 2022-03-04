import { useQuery } from 'react-query'

export default function OrdersScreen(props) {
   const { data, isLoading } = useQuery([ '/api/orders' ])
   return (
      <div>
         {JSON.stringify({ data, isLoading })}
      </div>
   )
}
