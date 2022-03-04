import { useFormik } from "formik"
import useForm from "../../hooks/useForm"
import { useMemo } from "react"
import { http } from "../../utils"

async function onSubmit(url, values, action) {
   action.setSubmitting(true)
   try {
      const { data } = await http.post(`/`)
   } catch (error) {

   } finally {
      action.setSubmitting(false)
   }
}

export default function Form({ initialValues = {}, submitProps, children, action: url, method = 'post' }) {
   const formik = useForm({
      initialValues
   })
   const submitBtnProps = {
      className: 'btn bg-gradient-primary btn-sm mb-0'
   }
   const cancelBtnProps = {
      className: 'btn btn-outline-primary btn-sm mb-0',
      onClick: () => window.history.back()
   }

   return (
      <div className="card p-3">
         {children}
         <footer className="d-flex gap-3 mt-3 mb-3">
            <button {...submitBtnProps}>Submit</button>
            <button {...cancelBtnProps}>Cancel</button>
         </footer>
      </div>
   )
}


Form.Field = ({ label, children, ...props }) => {
   return (
      <div className="mb-3">
         <div>
            <label className="form-label">{label}</label>
         </div>
         <div>
            {children}
         </div>
      </div>
   )
}
