import { Outlet } from "react-router-dom";
import Container from "../Container";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
   return (
      <>
         <Sidebar />
         <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
            <Header />
            <Container>
               {children}
            </Container>
         </main>
      </>

   )
}
