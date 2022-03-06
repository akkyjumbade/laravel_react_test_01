import styled from "@emotion/styled"
import React from "react"
import { CheckControl, DeleteControl, EditControl, PendingControl } from "../RowActions"
import { IndeterminateCheckbox } from "./IndeterminateCheckbox"

const StyledActionCol = styled.div`
   display: flex;
   align-items: end;
   justify-content: center;
   opacity: 1;
   &:hover {
      opacity: 1;
   }
   button + button {
      margin-left: .5rem;
   }
   [type="checkbox"], [type="radio"] {
      border-radius: 1000px;
      cursor: pointer;
   }
`

const useTableActionsFeature = hooks => {
   hooks.visibleColumns.push(columns => [
      {
         id: '_massControl',
         // The header can use the table's getToggleAllRowsSelectedProps method
         // to render a checkbox
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
            <div className={'text-center'}>
               <button>
                  <EditControl />
               </button>
               <button>
                  {/* <CheckControl /> */}
                  <PendingControl />
               </button>
               <button>
                  <DeleteControl />
               </button>
            </div>
         ),
      },

   ])
}


export default useTableActionsFeature
