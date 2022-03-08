import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'

const formContext = createContext({})

export default function Form({ initialValues = {}, children, url }) {
   const firmik = useFormik({ initialValues: initialValues })
   return (
      <formContext.Provider value={firmik}>
         {children}
      </formContext.Provider>
   )
}
Form.Consumer = formContext.Consumer

export function useFormContext() {
   return useContext(formContext)
}
