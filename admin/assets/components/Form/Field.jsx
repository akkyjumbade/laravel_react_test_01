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

export default function Field({ label, name, children, Component, caption, required = false, error, ...props }) {
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
   // if (Component) {
   //    return (
   //       <StyledField hasError={Boolean(errorMessage)}>
   //          <Label title={label} required={required} />
   //          <div>
   //             {Component ? (
   //                <Component aria-label={label} value={formik.values[name]} onChange={formik.handleChange(name)} />
   //             ) : (children)}
   //          </div>
   //          {errorMessage && (
   //             <ErrorMessage>{errorMessage}</ErrorMessage>
   //          )}
   //          {/* {JSON.stringify({ required, props })} */}
   //       </StyledField>
   //    )
   // }
   return (
      <StyledField  hasError={Boolean(errorMessage)}>
         <Label title={label} required={required} />
         <div>
            {Component ? (
               <Component aria-label={label} value={formik.values[name]} onChange={formik.handleChange(name)} />
            ) : (children)}
         </div>
         {caption && (
            <div className="mb-2 mt-1">{caption}</div>
         )}
         {errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
         )}
         {/* {JSON.stringify({ required, props })} */}
      </StyledField>
   )
}
