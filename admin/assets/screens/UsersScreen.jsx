import { useQuery } from 'react-query'
import Table from '../components/Table'

export default function UsersScreen(props) {
   const { data, isLoading } = useQuery([ '/api/users' ])
   return (
      <div>
         {JSON.stringify({ data, isLoading })}
         <Table>
            <Table.Column value={'id'} title={'ID'} />
         </Table>
      </div>
   )
}
