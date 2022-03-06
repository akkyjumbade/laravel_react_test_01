import styled from "@emotion/styled"

const StyledContainer = styled.div`
   margin: 0 auto;
   width: var(--container-width, 1200px);
   max-width: 100%;
`
export default function Container({ children }) {
   return (
      <StyledContainer>
         {children}
      </StyledContainer>
   )
}
