import Navicon from "../Navicon";

export default function Sidebar_Header({ }) {
   return (
      <div className="sidenav-header">
         <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
         <Navicon />
      </div>
   )
}
