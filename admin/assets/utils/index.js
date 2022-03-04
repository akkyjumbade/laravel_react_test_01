import axios from 'axios';
import { QueryCache, QueryClient, } from 'react-query';
import { SERVER_URL } from '../config';

export const API_URL = `${SERVER_URL}/api`;
export const baseURL = SERVER_URL;

export function getClientHeaders() {
   let headersCombined = {
      'Accept': 'application/json',
      'Accept-Language': 'en',
   }
   return headersCombined
}

const headers = getClientHeaders()
export const http = axios.create({
   baseURL,
   headers: {
      ...headers,
   },
})

const defaultQueryFn = async ({ queryKey }) => {
   let path = queryKey[0]
   let searchParams = ''
   if (queryKey[1]) {
      if (queryKey[1] instanceof URLSearchParams) {
         searchParams = queryKey[1]
         searchParams = `?` + searchParams.toString()
      } else {
         searchParams = `/` + queryKey[1]
      }
   }
   const { data } = await http.get(path + searchParams)
   return data
}

const defaultMutationFn = async (payload) => {
   return await http.post()
}

export const queryClient = new QueryClient({
   defaultOptions: {
      // mutations: {
      //    // mutationFn: defaultMutationFn
      // },
      queries: {
         queryFn: defaultQueryFn,
         // select:
      },
   },
});

export const queryCache = new QueryCache({});
