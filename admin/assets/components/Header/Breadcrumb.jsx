import styled from "@emotion/styled"

const StyledBreadcrumb = styled.nav`
   > ol, > ul {
      display: flex;
      gap: .5rem;
      margin-bottom: .3rem;
   }
`
export default function Breadcrumb({ children, ...props }) {
   return (
      <StyledBreadcrumb aria-label="breadcrumb" >
         <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5" role={'navigation'}>
            <li className="breadcrumb-item text-sm">
               <a className="opacity-5 text-dark" href="javascript:;">
               Pages
               </a>
            </li>
            <li
               className="breadcrumb-item text-sm text-dark active"
               aria-current="page"
            >
               Dashboard
            </li>
         </ol>
         <h6 className="font-weight-bolder mb-0">Dashboard</h6>
      </StyledBreadcrumb>
   )
}
