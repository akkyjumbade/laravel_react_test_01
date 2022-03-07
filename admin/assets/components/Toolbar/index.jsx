// import { useNavigate } from "react-router-dom";

import { Link } from "@tanstack/react-location"
import Button from "../atoms/Button"

export default function Toolbar({ title, description, createAction =  null }) {
   // const navigate = useNavigate()
   function onCreateClick() {
      // navigate('customers/create')
   }
   return (
      <div className="d-flex align-items-center justify-content-between mb-3">
         <div className="flex-1">
            {title && (
            <h3>{title}</h3>
            )}
         </div>
         <div className="align-self-end">
            <Link {...createAction}>
               <Button title={'Create'}  variant={'dark'} />
            </Link>
         </div>
      </div>
   )
}


Toolbar.defaultProps = {
   createAction: null,
}
