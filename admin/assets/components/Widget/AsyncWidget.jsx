import styled from "@emotion/styled"
import { Fragment } from "react"
import { useQuery } from "react-query"

const StyledWidget = styled.div`
   background: white;
   padding: 1rem;
   min-height: 50px;
   border-radius: 10px;
   height: 100%;
`

export default function AsyncWidget({ code, title, ...props }) {
   const { data, isLoading } = useQuery([ `/api/widgets/${code}` ])
   return (
      <StyledWidget {...props}>
         {JSON.stringify({data, isLoading})}
      </StyledWidget>
   )
}
