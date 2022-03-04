import Cell from "./Cell"
import Column from "./Column"
import Row from "./Row"

export default function Table({ title, description, children, ...props }) {
   return (
      <div className="card mb-4">
         <div className="card-header pb-0">
            {title && (
            <h6>{title}</h6>
            )}
         </div>
         <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
               <table className="table align-items-center mb-0" {...props}>
                  {children}
               </table>
            </div>
         </div>
      </div>
   )
}


Table.Column = Column
Table.Row = Row
Table.Cell = Cell
