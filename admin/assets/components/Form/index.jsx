import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'
import { http } from '../../utils'

const formContext = createContext({})

const handleSubmit = async (url, values, action) => {
   action.setSubmitting(true)
   try {
      const { data } = await http.post(url, values)
      return data
   } catch (error) {
      action.setErrors(error.response?.data?.erros)
   } finally {
      action.setSubmitting(false)
   }
}

export default function Form({ initialValues = {}, children, url }) {
   const form = useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => await handleSubmit(url, values, action),
      validateOnChange: true,
   })
   return (
      <formContext.Provider value={form}>
         {children}
      </formContext.Provider>
   )
}
Form.Consumer = formContext.Consumer

export function useFormContext() {
   return useContext(formContext)
}
