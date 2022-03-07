import styled from "@emotion/styled";

const StyledError = styled.label`
@apply {
   block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
`
export default function ErrorMessage({ children }) {
   return (
      <StyledError className={'block text-xs mb-0 font-medium text-red-600 dark:text-red-500'}>
         {children}
      </StyledError>
   )
}
