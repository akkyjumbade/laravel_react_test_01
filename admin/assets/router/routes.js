// import { Router } from "@tanstack/react-location";
import Layout from "../components/Layout";
import DashboardScreen from "../screens/DashboardScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductsScreen from "../screens/ProductsScreen";
import UsersScreen from "../screens/UsersScreen";

// Router

export default [
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: "/",
            id: 'home',
            element: <DashboardScreen />,
         },
         {
            path: '/users',
            children: [
               {
                  path: '/',
                  element: <UsersScreen />,
               },
               {
                  path: 'create',
                  element: <UsersScreen.Create />,
               },
               {
                  path: 'edit/:id',
                  element: <UsersScreen.Create />,
               },
               {
                  path: 'info/:id',
                  element: <UsersScreen.Create />,
               },
            ]
         },
         {
            path: 'products',
            element: <ProductsScreen />,
         },
         {
            path: 'orders',
            element: <OrdersScreen />,
         },
      ]
   },

]
