import styled from "@emotion/styled"
import Cell from "./Cell"
import Column from "./Column"
import Row from "./Row"

const StyledTable = styled.div`
   --link-color: var(--primary-color, blue);
   --text-color: #565656;
   --bg-color: white;
   width: 100%;
   padding: 1rem 0;
   background: var(--bg-color);
   main {
      overflow: auto;
      table {
         width: 100%;
         color: var(--text-color);
         thead {
            border-bottom: 1px solid #eee;
         }
         th {
            text-align: left;
            line-height: 1.8;
         }
         td, th {
            padding: .2rem;
            white-space: nowrap;

            a {
               color: var(--link-color);
               text-decoration: underline;
               text-decoration-color: var(--text-color);
               &:hover {
                  text-decoration-color: var(--link-color);
               }
            }
         }
         td {
            line-height: 1.8;
         }
         tbody {
            tr:not(:last-child) {
               border-bottom: 1px solid #eee;
            }
         }
      }
   }
`

export default function Table({ title, description, children, ...props }) {
   return (
      <StyledTable className="card mb-4">
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
