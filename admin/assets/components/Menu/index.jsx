import styled from "@emotion/styled"

const StyledMenu = styled.menu`
   [role="menuitem"] {

   }
   .menuitem-label {
      padding: .4rem 1rem;
   }
`
export default function Menu({ children }) {
   return (
      <StyledMenu>
         {children}
      </StyledMenu>
   )
}
