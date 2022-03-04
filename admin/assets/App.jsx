import Router from "./router";
import {QueryClientProvider} from 'react-query';
import { queryClient } from "./utils";
import { ToastContainer, } from 'react-toastify';


export default function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Router />
            <ToastContainer />
         </QueryClientProvider>
      </>
   )
}
