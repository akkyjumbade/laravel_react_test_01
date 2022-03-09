import { createHashHistory, Link, Outlet, ReactLocation, Router as BaseRouter } from "@tanstack/react-location";
import Layout from "../components/Layout";
import DashboardScreen from "../screens/DashboardScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductsScreen from "../screens/ProductsScreen";
import UsersScreen from "../screens/UsersScreen";
import routes from "./routes";
import { motion } from "framer-motion"

const location = new ReactLocation({
   history: createHashHistory({

   })
})

export default function Router() {
   return (
      <BaseRouter basepath="/" routes={routes} location={location} />
   )
}

// export default function Router({ children }) {
//    return (
//       <HashRouter >
//          <Layout>
//             <Routes>
//                <Route path={'/'} element={<DashboardScreen />} />
//                <Route path={'products'} element={<ProductsScreen />} />
//                <Route path={'customers'} element={<UsersScreen />} >
//                   <Route index element={<UsersScreen />} />
//                   <Route path="create" exact element={<UsersScreen.Create />} />
//                   <Route path="edit" exact element={<UsersScreen.Create />} />
//                   <Route path="show" exact element={<UsersScreen.Create />} />
//                </Route>
//                <Route path={'/orders'} element={<OrdersScreen />} />
//                <Route path={'/about'} element={<div>about</div>} />
//                <Route path="*" element={<DashboardScreen />} />
//             </Routes>
//          </Layout>
//       </HashRouter>
//    )
// }
