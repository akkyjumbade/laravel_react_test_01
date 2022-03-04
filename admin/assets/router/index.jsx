import { HashRouter, Outlet } from "react-router-dom";
import { Routes, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import DashboardScreen from "../screens/DashboardScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductsScreen from "../screens/ProductsScreen";
import UsersScreen from "../screens/UsersScreen";

export default function Router({ children }) {
   return (
      <HashRouter >
         <Layout>
            <Routes>
               <Route path={'/'} element={<DashboardScreen />} />
               <Route path={'/products'} element={<ProductsScreen />} />
               <Route path={'/customers'} element={<UsersScreen />} />
               <Route path={'/orders'} element={<OrdersScreen />} />
               <Route path={'/about'} element={<div>about</div>} />
               <Route path="*" element={<DashboardScreen />} />
            </Routes>
         </Layout>
      </HashRouter>
   )
}
