// import { Router } from "@tanstack/react-location";
import axios from "axios";
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
                  element: <UsersScreen.Create initialValues={{ name: 'sdf' }} />,
               },
               {
                  path: 'edit/:id',
                  element: <UsersScreen.Create initialValues={{ name: 'sdf' }} />,
                  loader: async ({ params }) => {
                     try {
                        const { data } = await axios.get(`/api/users/${params?.id}`)
                        return data
                     } catch (error) {
                        return {}
                     }
                  }
               },
               {
                  path: 'info/:id',
                  element: <UsersScreen.Create />,
               },
            ]
         },
         {
            path: 'products',
            children: [
               {
                  path: '/',
                  element: <ProductsScreen />,
               },
               {
                  path: 'create',
                  element: <ProductsScreen.Create />,
               },
               {
                  path: 'edit/:id',
                  element: <ProductsScreen.Create />,
                  loader: async ({ params }) => {
                     try {
                        const { data } = await axios.get(`/api/products/${params?.id}`)
                        return data
                     } catch (error) {
                        return {}
                     }
                  }
               },
               {
                  path: 'info/:id',
                  element: <ProductsScreen.Create />,
               },
            ]
         },
         {
            path: 'orders',
            element: <OrdersScreen />,
         },
      ]
   },

]
