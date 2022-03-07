import Router from "./router";
import {QueryClientProvider} from 'react-query';
import { queryClient } from "./utils";
import { ToastContainer, } from 'react-toastify';
import { css, Global } from "@emotion/react";
import globalStyle from "./styles/globalStyle";


export default function App() {
   return (
      <>
         <Global
            styles={globalStyle}
          />
         <QueryClientProvider client={queryClient}>
            <Router />
            <ToastContainer />
         </QueryClientProvider>
      </>
   )
}
