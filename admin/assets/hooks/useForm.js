import { useFormik } from "formik"
import { http } from "../utils"

export default function useForm({
   initialValues = {},
   url = '/api/form'
}) {
   const formik = useFormik({
      initialValues,
      async onSubmit(values, action) {
         action.setSubmitting(false)
         try {
            const { data } = await http.post(url, {
               ...values
            })

         } catch (error) {

         } finally {
            action.setSubmitting(true)
         }
      }
   })
   return formik
}
