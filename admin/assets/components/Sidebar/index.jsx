import styled from "@emotion/styled"
import { Link } from "@tanstack/react-location"
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
   .menu {
      margin: 1rem 0;
   }
`

export default function Sidebar({ appName }) {
   return (
      <StyledSidebar className="bg-gray-900 ">
         <Sidebar_Header />
         <Menu>
            <Menu.Item label={'Dashboard'} />
            <Menu.Item heading={{ title: 'Resources', icon: '<sd>' }} >
               <Menu.Item label={'Categories'} />
               <Menu.Item label={'Products'} />
               <Menu.Item label={'Orders'} />
               <Menu.Item label={'Transactions'} />
            </Menu.Item>
            <Menu.Item label={'Users'} />
            <Menu.Item label={'System'} />
         </Menu>
         <Sidebar_Footer />
      </StyledSidebar>

   )
}

Sidebar.defaultProps = {
   appName: 'Laravel',
}
