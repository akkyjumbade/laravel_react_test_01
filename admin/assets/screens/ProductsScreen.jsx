import { useQuery } from 'react-query'

export default function ProductsScreen(props) {
   const { data, isLoading } = useQuery([ '/api/products' ])
   return (
      <div>
         {JSON.stringify({ data, isLoading })}
      </div>
   )
}
