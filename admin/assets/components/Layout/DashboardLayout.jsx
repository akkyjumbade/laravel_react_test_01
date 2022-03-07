import styled from "@emotion/styled"
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from "react-grid-layout";
import AsyncWidget from "../Widget/AsyncWidget";

const StyledDashboardLayout = styled.div`

`
export default function DashboardLayout({ children }) {
   const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
   return (
      <StyledDashboardLayout>
         <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            >
            <div key="a"><AsyncWidget code={'total_users'}  /></div>
            <div key="b"><AsyncWidget code={'total_users'}  /></div>
            <div key="c"><AsyncWidget code={'total_users'}  /></div>
            </GridLayout>
         {/* {children} */}
      </StyledDashboardLayout>
   )
}
