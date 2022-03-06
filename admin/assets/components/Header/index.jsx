import styled from "@emotion/styled";
import { Menu } from "@headlessui/react";
import Container from "../Container";
import Breadcrumb from "./Breadcrumb";


const StyledHeader = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   background: var(--navbar-bg, gray);
   .container {
      display: flex;
   }
   #navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .navbar-nav {
         display: flex;
         align-items: center;
         gap: 1rem;
      }
   }
`

const RightDropdown = () => {
   return (
      <Menu as={'div'} className="relative inline-block text-left">
         <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">More</Menu.Button>
         <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
               {({ active }) => (
                  <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                  >
                  Account settings
                  </a>
               )}
            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                  <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                  >
                  Documentation
                  </a>
               )}
            </Menu.Item>
            <Menu.Item disabled>
               <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
         </Menu.Items>
      </Menu>
   )
}

export default function Header(props) {
   return (
      <>
         {/* Navbar */}
         <StyledHeader
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"
         >
            <Container className="container py-1 px-3">
               {/* <Breadcrumb /> */}
               <div
               className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
               id="navbar"
               >
               <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group">
                     <span className="input-group-text text-body">
                     <i className="fas fa-search" aria-hidden="true" />
                     </span>
                     <input
                     type="text"
                     className="form-control"
                     placeholder="Type here..."
                     />
                  </div>
               </div>
                  <ul className="navbar-nav  justify-content-end">
                     <li className="nav-item d-flex align-items-center">
                       <RightDropdown />
                     </li>
                     <li className="nav-item d-flex align-items-center">
                        <a
                        href="javascript:;"
                        className="nav-link text-body font-weight-bold px-0"
                        >
                        <i className="fa fa-user me-sm-1" />
                        <span className="d-sm-inline d-none">Sign In</span>
                        </a>
                     </li>
                     <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a
                        href="javascript:;"
                        className="nav-link text-body p-0"
                        id="iconNavbarSidenav"
                        >
                        <div className="sidenav-toggler-inner">
                           <i className="sidenav-toggler-line" />
                           <i className="sidenav-toggler-line" />
                           <i className="sidenav-toggler-line" />
                        </div>
                        </a>
                     </li>
                     <li className="nav-item px-3 d-flex align-items-center">
                        <a href="javascript:;" className="nav-link text-body p-0">
                        <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                        </a>
                     </li>
                  </ul>
               </div>
            </Container>
         </StyledHeader>
      </>

   )
}
