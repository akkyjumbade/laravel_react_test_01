// import { useNavigate } from "react-router-dom";

import { Link } from "@tanstack/react-location"

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
            {/* {JSON.stringify({ createAction })} */}
            <Link {...createAction}>Create</Link>
            {/* <button onClick={() => onCreateClick()}>Create</button> */}
            {/* {createAction && (
            <Link {...createAction} className="btn bg-gradient-primary btn-sm mb-0">
               <span>+&nbsp; New </span>
            </Link>
            )} */}
         </div>
      </div>
   )
}


Toolbar.defaultProps = {
   createAction: null,
}
