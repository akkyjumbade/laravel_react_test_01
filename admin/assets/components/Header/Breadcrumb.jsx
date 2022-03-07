import styled from "@emotion/styled"
import { Link, useMatches } from "@tanstack/react-location"
import { useMemo } from "react"

const StyledBreadcrumb = styled.nav`
   > ol, > ul {
      display: flex;
      gap: .5rem;
      margin-bottom: .3rem;
   }
`
export default function Breadcrumb({ children, ...props }) {
   const matches = useMatches()
   const breadcrumbs = useMemo(() => {
      return matches?.filter(match => match.route.meta?.breadcrumb)
   }, [matches])
   console.log({ breadcrumbs })
   return (
      <StyledBreadcrumb aria-label="breadcrumb" >
         <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5" role={'navigation'}>
            <li className="breadcrumb-item text-sm">
               <Link>Home</Link>
            </li>
            {breadcrumbs?.map(match => (
            <li key={match.pathname} className="breadcrumb-item text-sm">
               <Link>{match.route.meta?.breadcrumb(match.params)}</Link>
            </li>
            ))}
         </ol>
         <h6 className="font-weight-bolder mb-0">Dashboard</h6>
      </StyledBreadcrumb>
   )
}
