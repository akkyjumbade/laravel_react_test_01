import styled from "@emotion/styled";

const StyledLabel = styled.div`
@apply {
   block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
`
export default function Label({ title, ...props }) {
   return (
      <StyledLabel className={'block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'}>
         <label {...props}>{title}</label>
      </StyledLabel>
   )
}
