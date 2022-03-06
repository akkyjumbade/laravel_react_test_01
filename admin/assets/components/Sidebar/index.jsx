import styled from "@emotion/styled"
import Navicon from "../Navicon"
import NavItem from "./NavItem"
import Sidebar_Footer from "./Sidebar_Footer"
import Sidebar_Header from "./Sidebar_Header"

const StyledSidebar = styled.aside`
   position: fixed;
   left: -100%;
   top: 0;
   width: var(--sidebar-width, 200px);
   height: 100vh;
   background-color: var(--sidebar-bg, white);
   @media screen and (min-width: 800px)
   {
      left: 0;
   }
   .navbar-nav {
      padding: 1rem;
   }
   .navbar-brand {
      max-width: 100px
   }
`

export default function Sidebar({ appName }) {
   return (
      <StyledSidebar className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
         <Sidebar_Header />
         <hr className="horizontal dark mt-0" />
         <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
            <ul className="navbar-nav">
               <NavItem label={'Dashboard'} url={'/'} />
               <NavItem label={'Products'} url={'/products'} iconClass={'fa-cube'} />
               <NavItem label={'Orders'} url={'/orders'} iconClass={'fa-list'} />
               <NavItem label={'Customers'} url={'/users'} iconClass={'fa-users'} />
            </ul>
         </div>
         <Sidebar_Footer />
      </StyledSidebar>

   )
}

Sidebar.defaultProps = {
   appName: 'Laravel',
}
