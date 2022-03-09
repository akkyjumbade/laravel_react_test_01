import styled from "@emotion/styled";

const StyledInput = styled.input`
   --input-size: 35px;
   height: var(--input-size);
   line-height: var(--input-size);
`
export default function PasswordInput(props) {
   let inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
   return <StyledInput {...props} type={'password'} className={inputClass} />
}
