import { useMemo } from "react"

export default function Field({ label, children, required = false, error, ...props }) {
   const errorMessage = useMemo(() => {
      if (!error) {
         return null
      }
      if (typeof error == 'string') {
         return error
      } else if (typeof error == 'object') {
         return error.join('')
      }
      return error
   }, [ error ])
   return (
      <div className="mb-3">
         <div>
            <label className="form-label">
               {label}
            </label>
         </div>
         <div>
            {children}
         </div>
         {errorMessage && (
            <p className='text-danger text-sm'>{errorMessage}</p>
         )}
      </div>
   )
}
