import styled from "@emotion/styled"
import Menu from "../Menu"
import MenuItem from "../Menu/MenuItem"
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
   display: flex;
   flex-direction: column;
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
      <StyledSidebar className="bg-gray-900 ">
         <Sidebar_Header />
         <div className="flex-1">
            <Menu>
               <MenuItem label={'Dashboard'} url={'/'}>
                  <Menu>
                     <MenuItem label={'Home'} url={'/'} />
                     <MenuItem label={'Sales'} url={'/'} />
                  </Menu>
               </MenuItem>
            </Menu>
            {/* <ul className="navbar-nav">
               <NavItem label={'Dashboard'} url={'/'} />
               <NavItem label={'Products'} url={'/products'} iconClass={'fa-cube'} />
               <NavItem label={'Orders'} url={'/orders'} iconClass={'fa-list'} />
               <NavItem label={'Customers'} url={'/users'} iconClass={'fa-users'} />
            </ul> */}
         </div>
         <Sidebar_Footer />
      </StyledSidebar>

   )
}

Sidebar.defaultProps = {
   appName: 'Laravel',
}
