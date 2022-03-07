import styled from "@emotion/styled"

const StyledButtom = styled('button')`

`
export default function Button({ title, children, className, variant = 'default', ...props }) {
   let cssClass = ' ' + className
   switch (variant) {
      case 'primary':
         cssClass = 'cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ' + className
         break;
      case 'dark':
         cssClass = 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700' + className
         break;
      default:
         cssClass = 'py-2.5 px-5 mr-2 mb-2 text-sm text-blue-700 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' + className
         break;
   }
   return (
      <StyledButtom className={cssClass} {...props}>
         <span>{title ?? children}</span>
      </StyledButtom>
   )
}
