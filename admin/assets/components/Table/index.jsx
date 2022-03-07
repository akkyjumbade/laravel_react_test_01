import styled from "@emotion/styled"
import Cell from "./Cell"
import Column from "./Column"
import Row from "./Row"

const StyledTable = styled.div`
   --link-color: var(--primary-color, blue);

   --bg-color: white;
   width: 100%;
   padding: 1rem 0;
   background: var(--bg-color);
   main {
      overflow: auto;
      table {
         width: 100%;
         color: var(--text-color);
         cursor: default;
         thead {
            border-bottom: 1px solid #eee;
         }
         th {
            text-align: left;
            line-height: 2;
            &:first-child {
               width: 20px;
            }
         }
         td, th {
            padding: .5rem .3rem;
            white-space: nowrap;

            a {
               color: var(--link-color);
               text-decoration: underline;
               text-decoration-color: #e4e7eb;
               text-decoration-style: dotted;
               &:hover {
                  text-decoration-color: var(--link-color);
               }
            }
         }
         td:first-child, th:first-child,
         td:last-child, th:last-child, {
            padding-left: .7rem;
         }
         td {
            line-height: 1.8;
         }
         tbody {
            tr {
               &:hover {
                  background: #e4e7eb;
               }
               &:not(:last-child) {
                  border-bottom: 1px solid #eee;
               }
            }
         }
      }
   }
`

export default function Table({ title, description, children, ...props }) {
   return (
      <StyledTable className="card mb-4 rounded-lg border border-gray-200">
         <header className="card-header pb-0">
            {title && (
            <h6>{title}</h6>
            )}
         </header>
         <main>
            <table className="table table-hover align-items-center mb-0" {...props}>
               {children}
            </table>
         </main>
         <footer>

         </footer>
      </StyledTable>
   )
}


Table.Column = Column
Table.Row = Row
Table.Cell = Cell
