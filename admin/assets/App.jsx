import Router from "./router";
import {QueryClientProvider} from 'react-query';
import { queryClient } from "./utils";

export default function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Router />
         </QueryClientProvider>
      </>
   )
}
