import React from 'react'
import { useQuery } from 'react-query'
import DataTable from '../../components/Table/DataTable'
import TitleCell from '../../components/Table/TitleCell'
import Toolbar from '../../components/Toolbar'

export default function Users() {
   const { data: users, } = useQuery(['/api/users'])

   return (
      <>
         <Toolbar title={'Users'} createAction={{ to: 'create' }} />

         <DataTable url={'/api/users'}>
            <DataTable.Field name={'id'} title={'ID'} />
            <DataTable.Field name={'name'} title={'Name'} Cell={TitleCell} />
            <DataTable.Field name={'email'} title={'Email'} />
            <DataTable.Field name={'phone_number'} title={'Phone number'} />
            <DataTable.Field name={'address'} title={'Address'} />
            <DataTable.Field name={'created_at'} title={'Regd. at'} />
         </DataTable>
      </>
   )
}
