import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useMemo } from "react"
import { useFormContext } from "."
import ErrorMessage from "./ErrorMessage"
import { useFormField } from "./FormContext"
import Label from "./Label"

const StyledField = styled.div`
   margin-bottom: 1rem;
   ${props => {
      if (props.hasError) {
         return css`
            input {
               border-color: red;
            }
         `
      }
   }}
`

export default function Field({ label, name, children, Component, required = false, error, ...props }) {
   const formik = useFormContext()
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
   if (Component) {
      return (
         <StyledField hasError={Boolean(errorMessage)}>
            <Label title={label} />
            <div>
               <Component aria-label={label} value={formik.values[name]} onChange={formik.handleChange(name)} />
            </div>
            {errorMessage && (
               <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
            {JSON.stringify(formik.values)}
         </StyledField>
      )
   }
   return (
      <StyledField hasError={Boolean(errorMessage)}>
         <Label title={label} />
         <div>
            {children}
         </div>
         {errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
         )}
      </StyledField>
   )
}
