import styled from "@emotion/styled";

const StyledLabel = styled.div`
   .required {
      color: red;
      font-weight: bold;
   }
`
export default function Label({ title, required = false, ...props }) {
   return (
      <StyledLabel className={'block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300'}>
         <label {...props}>
            <span>{title}</span>
            {required && <span className="text-red-600 text-sm">{'*'}</span>}
         </label>
      </StyledLabel>
   )
}
