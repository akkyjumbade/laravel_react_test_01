import styled from "@emotion/styled";
import { Outlet, useMatch, useMatchRoute } from "@tanstack/react-location";
import { useEffect } from "react";
import Container from "../Container";
import Header from "../Header";
import Sidebar from "../Sidebar";

const StyledLayout = styled.div`
   --sidebar-width: 250px;
   --container-width: 1200px;
   --text-color: #1a2e44;
   main[role="main"] {
      @media screen and (min-width: 800px)
      {
         margin-left: var(--sidebar-width);
         // margin-top: 50px;
      }
      padding: 1rem;
      min-height: 100vh;
   }
`

export default function Layout({ children }) {
   const match = useMatchRoute()
   useEffect(() => {
      // console.log({ match: match() })
      // if (match.route.meta) {
      //    console.log('meta: ', match.route.meta)
      //    document.title = match.route?.meta.breadcrumb()
      // }
   }, [ match ])
   return (
      <StyledLayout className={'dark__bg-gray-900'}>
         <Sidebar />
         <main role={'main'}>
            {/* <Header /> */}
            <Container>
               <Outlet />
            </Container>
         </main>
      </StyledLayout>

   )
}
