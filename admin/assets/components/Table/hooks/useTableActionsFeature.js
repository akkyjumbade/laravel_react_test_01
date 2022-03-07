import styled from "@emotion/styled"
import React, { useMemo} from "react"
import { CheckControl, DeleteControl, EditControl, PendingControl } from "../RowActions"
import { IndeterminateCheckbox } from "./IndeterminateCheckbox"
import { DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import TitleCell from "../TitleCell"
import { Link } from "@tanstack/react-location"

const PrimaryCell = ({ row, value, ...props }) => {
   const imageUrl = useMemo(() => {
      if (row.values.thumbnail_url) {
         return row.values.thumbnail_url
      } else if (row.values.thumbnail ) {
         return row.values.thumbnail
      }
      return null
   }, [ row.values])
   console.log({ props, row, value })
   return (
      <div className="flex gap-2 items-center">
         {imageUrl && (
         <picture className="flex">
            <img src={imageUrl} className="w-8 h-8 bg-gray-100" />
         </picture>
         )}
         <Link>
            {row.values.title ?? row.values.name}
         </Link>
      </div>
   )
}

const useTableActionsFeature = hooks => {
   // hooks.setHiddenColumns([ 'id', 'title' ])
   hooks.visibleColumns.push(columns => [
      {
         id: '_massControl',
         // The header can use the table's getToggleAllRowsSelectedProps method
         // to render a checkbox
         width: 25,
         Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="text-center">
               <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
         ),
         // The cell can use the individual row's getToggleRowSelectedProps method
         // to the render a checkbox
         Cell: ({ row }) => (
            <div className={'text-center'}>
               <IndeterminateCheckbox row={row.original} {...row.getToggleRowSelectedProps()} />
            </div>
         ),
      },
      {
         id: '_title',
         // The header can use the table's getToggleAllRowsSelectedProps method
         // to render a checkbox
         Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="text-left ">
               Title
            </div>
         ),
         // The cell can use the individual row's getToggleRowSelectedProps method
         // to the render a checkbox
         Cell: PrimaryCell,
      },
      ...columns,
      // Let's make a column for selection
      {
         id: '_actions',
         // The header can use the table's getToggleAllRowsSelectedProps method
         // to render a checkbox
         Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="text-center">

            </div>
         ),
         // The cell can use the individual row's getToggleRowSelectedProps method
         // to the render a checkbox
         Cell: ({ row }) => (
            <div className={'flex items-center justify-center flex-1 h-full'}>
               <button>
                  <DotsCircleHorizontalIcon className="h-6 w-6 text-blue-500" />
               </button>
            </div>
         ),
      },

   ])
}


export default useTableActionsFeature
