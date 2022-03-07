import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useMemo } from "react"
import ErrorMessage from "./ErrorMessage"
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
