import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'

const formContext = createContext({})

export default function FormContext({ initialValues = {}, children, url }) {
   const firmik = useFormik({ initialValues: initialValues })
   return (
      <formContext.Provider value={firmik}>
         {children}
      </formContext.Provider>
   )
}
FormContext.Consumer = formContext.Consumer

export function useFormField() {
   return useContext(formContext)
}
