import { Fragment, useState, useMemo, useEffect } from "react"
import { useQuery } from "react-query"
import { useTable } from "react-table"
import { useRowSelect, useSortBy } from "react-table/dist/react-table.development"
import Table from "."
import { http } from "../../utils"
import Button from "../atoms/Button"
import Column from "./Column"
import DefaultCellRender from "./DefaultCellRender"
import useTableActionsFeature from "./hooks/useTableActionsFeature"

const useTableQuery = (url, params = {}) => {
   const { page } = url[1]
   return useQuery(url[0], async () => {
      const { data } = await http.get(url[0] + '?page=' + page)
      return data
   }, {
      // cacheTime: ((1000 * 60) * 60),
      keepPreviousData: true,
      // enabled: false,
      // staleTime: 0,
      // cacheTime: 0,
      select: (data) => {
         console.log('data', data)
         return data?.data
      },
      ...params,
      placeholderData: () => ({
         data: []
      })
   })
}

const initialState = {
   hiddenColumns: [ 'id', 'title', 'thumbnail', 'thumbnail_url' ]
}

export default function DataTable({ url, children, ...props }) {
   const [cursorIndex, setCursorIndex] = useState(1)
   const { data, isLoading, isFetching, refetch } = useTableQuery([url, { page: cursorIndex },])
   function loadMoreQueryFn() {
      setCursorIndex(prev => prev + 1)
      refetch()
   }
   function loadPrevQueryFn() {
      if (cursorIndex <= 1) {
         setCursorIndex(1)
         refetch()
         return
      }
      setCursorIndex(prev => prev - 1)
      refetch()
   }
   // useEffect(() => {
   // }, [ cursorIndex ])
   const tableColumns = useMemo(() => {
      const _mapedCols = children?.map(cl => ({
         Cell: DefaultCellRender,
         ...cl.props,
         Header: cl.props.title,
         accessor: cl.props.name,
      }))
      console.log({ children, _mapedCols })
      return _mapedCols
   }, [ children ])
   const table = useTable({ columns: tableColumns, data: data, initialState }, useSortBy, useRowSelect, useTableActionsFeature)
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

         <div className="flex items-center gap-3 mb-3">
            <Button disabled={isLoading || isFetching} title={'Prev'} small onClick={loadPrevQueryFn} />
            <Button disabled={isLoading || isFetching} title={'Next'} small onClick={loadMoreQueryFn} />
         </div>
         <div>
            Total: {data?.length ?? 0}
            {/* Total: {cursorIndex ?? 0} */}
         </div>
      </>
   )
}

DataTable.Field = ({ name, title, Cell }) => {
   return (
      <Fragment />
      )
   }
DataTable.Field.defaultProps = {
   Cell: props => (
      <Fragment>
         <span>
            {props.value}
         </span>
      </Fragment>
   )
}

