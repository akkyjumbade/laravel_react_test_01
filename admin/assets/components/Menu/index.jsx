import styled from "@emotion/styled"
import MenuItem from "./MenuItem"

const StyledMenu = styled.menu`
   [role="menuitem"] {

   }
   .menuitem-label {
      padding: .4rem 1rem;
   }
`
export default function Menu({ children }) {
   return (
      <StyledMenu className={'menu'}>
         {children}
      </StyledMenu>
   )
}




Menu.Group = ({ title }) => {
   return (
      <div>
         <div className="mt-1 px-3 mb-2 cursor-pointer">
            <div className="text-sm text-gray-500 uppercase font-bold tracking-tight flex items-center gap-2 flex items-center ">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
               </span>
               <span className="flex-1">{title}</span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="transform transition transition-all rotate-180" x-bind-className="{ 'rotate-180': isExpanded }" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
               </span>
            </div>
         </div>
      </div>
   )
}

Menu.Item = MenuItem
