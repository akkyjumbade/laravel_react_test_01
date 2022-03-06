import { Fragment, useMemo } from "react"
import { useQuery } from "react-query"
import { useTable } from "react-table"
import { useRowSelect, useSortBy } from "react-table/dist/react-table.development"
import Table from "."
import Column from "./Column"
import useTableActionsFeature from "./hooks/useTableActionsFeature"

const useTableQuery = (url, params = {}) => {
   return useQuery(url, {
      cacheTime: ((1000 * 60) * 60),
      placeholderData: () => ({
         data: [],
      })
   })
}

export default function DataTable({ url, children, ...props }) {
   const { data: { data } = {} } = useTableQuery(url)
   const tableColumns = useMemo(() => {
      const _mapedCols = children?.map(cl => ({
         ...cl.props,
         Header: cl.props.title,
         accessor: cl.props.name,
      }))
      console.log({ children, _mapedCols })
      return _mapedCols
   }, [ children ])

   const table = useTable({ columns: tableColumns, data: data }, useSortBy, useRowSelect, useTableActionsFeature)
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = table
   if (!data) {
      return null;
   }
   return (
      <>
         <Table {...getTableProps()}>
            <thead>
               {// Loop over the header rows
               headerGroups.map(headerGroup => (
                  // Apply the header row props
                  <Table.Row {...headerGroup.getHeaderGroupProps()}>
                  {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                     // Apply the header cell props
                     <Table.Column {...column.getHeaderProps()}>
                        {// Render the header
                        column.render('Header')}
                     </Table.Column>
                  ))}
                  </Table.Row>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {// Loop over the table rows
               rows.map(row => {
                  // Prepare the row for display
                  prepareRow(row)
                  return (
                  // Apply the row props
                  <Table.Row {...row.getRowProps()}>
                     {// Loop over the rows cells
                     row.cells.map(cell => {
                        // Apply the cell props
                        return (
                        <Table.Cell {...cell.getCellProps()}>
                           {// Render the cell contents
                           cell.render('Cell')}
                        </Table.Cell>
                        )
                     })}
                  </Table.Row>
                  )
               })}
            </tbody>
         </Table>
      </>
   )
}

DataTable.Field = ({ name, title }) => {
   return (
      <Fragment />
   )
}
