import Navicon from "../Navicon"
import NavItem from "./NavItem"
import Sidebar_Footer from "./Sidebar_Footer"

export default function Sidebar({ appName }) {
   return (
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
         <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
            <Navicon />
         </div>
         <hr className="horizontal dark mt-0" />
         <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
            <ul className="navbar-nav">
               <NavItem label={'Dashboard'} url={'/'} />
               <NavItem label={'Products'} url={'/products'} iconClass={'fa-cube'} />
               <NavItem label={'Orders'} url={'/orders'} iconClass={'fa-list'} />
               <NavItem label={'Customers'} url={'/customers'} iconClass={'fa-users'} />
            </ul>
         </div>
         <Sidebar_Footer />
      </aside>

   )
}

Sidebar.defaultProps = {
   appName: 'Laravel',
}
