import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'
import { http } from '../../utils'
import { motion } from 'framer-motion'

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

Form.Footer = ({ submitProps }) => {
   const form = useFormContext()
   return (
      <fieldset>
         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={form.handleSubmit}
         >
            Submit
         </motion.button>
      </fieldset>
   )
}
Form.Consumer = formContext.Consumer

export function useFormContext() {
   return useContext(formContext)
}
