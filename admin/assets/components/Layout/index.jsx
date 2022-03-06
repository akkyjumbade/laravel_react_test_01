import styled from "@emotion/styled";
import { Outlet } from "@tanstack/react-location";
import Container from "../Container";
import Header from "../Header";
import Sidebar from "../Sidebar";

const StyledLayout = styled.div`
   background: #e5e7eb;
   --sidebar-width: 250px;
   --container-width: 1200px;
   main[role="main"] {
      @media screen and (min-width: 800px)
      {
         margin-left: var(--sidebar-width);
      }
      padding: 1rem;
      min-height: 100vh;
   }
`

export default function Layout({ children }) {
   return (
      <StyledLayout>
         <Sidebar />
         <main role={'main'} className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
            <Header />
            <Container>
               <Outlet />
            </Container>
         </main>
      </StyledLayout>

   )
}
