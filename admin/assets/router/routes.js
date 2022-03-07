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
                  meta: {
                     breadcrumb: () => 'Users',
                  },
               },
               {
                  path: 'create',
                  element: <UsersScreen.Create initialValues={{ name: 'sdf' }} />,
                  meta: {
                     breadcrumb: () => 'New user',
                  },
               },
               {
                  path: 'edit/:id',
                  element: <UsersScreen.Create initialValues={{ name: 'sdf' }} />,
                  meta: {
                     breadcrumb: () => 'Edit user',
                  },
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
                  meta: {
                     breadcrumb: () => 'User',
                  },
               },
            ]
         },
         {
            path: 'products',
            children: [
               {
                  path: '/',
                  // id: 'productIndex',
                  index: true,
                  element: <ProductsScreen />,
                  meta: {
                     breadcrumb: () => 'Products',
                  },
               },
               {
                  path: 'create',
                  element: <ProductsScreen.Create />,
                  meta: {
                     breadcrumb: () => 'New product',
                  },
               },
               {
                  path: 'edit/:id',
                  element: <ProductsScreen.Create />,
                  meta: {
                     breadcrumb: () => 'Edit product',
                  },
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
            children: [
               {
                  path: '/',
                  element: <OrdersScreen />,
               },
               {
                  path: 'create',
                  element: <OrdersScreen.Create />,
               },
               {
                  path: 'edit/:id',
                  element: <OrdersScreen.Create />,
                  loader: async ({ params }) => {
                     try {
                        const { data } = await axios.get(`/api/orders/${params?.id}`)
                        return data
                     } catch (error) {
                        return {}
                     }
                  }
               },
               {
                  path: 'info/:id',
                  element: <OrdersScreen.Create />,
               },
            ]
         },
      ]
   },

]
