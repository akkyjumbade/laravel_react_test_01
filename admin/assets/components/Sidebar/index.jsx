import styled from "@emotion/styled"
import { Link, useNavigate } from "@tanstack/react-location"
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
      max-height: 600px;
      overflow: auto;
   }
`

export default function Sidebar({ appName }) {
   const navigate = useNavigate()
   function onClick(name) {

   }
   return (
      <StyledSidebar className="bg-gray-200 ">
         <Sidebar_Header />
         <Menu>
            {/* <Menu.Item onClick={() => navigate({ to: '/' })} label={'Dashboard'} /> */}
            <Menu.Item heading={{ title: 'Dashboard', icon: '<sd>' }} >
               <Menu.Item onClick={() => navigate({ to: '/' })} label={'Home'} />
               <Menu.Item onClick={() => navigate({ to: '/' })} label={'Analytics'} />
            </Menu.Item>
            <Menu.Item heading={{ title: 'Resources', icon: '<sd>' }} >
               <Menu.Item onClick={() => navigate({ to: '/users' })} label={'Categories'} />
               <Menu.Item onClick={() => navigate({ to: '/products' })} label={'Products'} />
               <Menu.Item onClick={() => navigate({ to: '/orders' })} label={'Orders'} />
               <Menu.Item onClick={() => navigate({ to: '/products' })} label={'Transactions'} />
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
