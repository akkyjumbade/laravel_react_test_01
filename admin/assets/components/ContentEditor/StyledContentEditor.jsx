import styled from "@emotion/styled";

const StyledContentEditor = styled.div`
   margin-bottom: 1.5rem;
   .ProseMirror {
      min-height: 300px;
      background: white;
      border: 1px solid lightgray;
      padding: 0 1.5rem;
      ul, ol  {
         list-style: initial;
         list-style-type: initial;
         margin: initial;
         padding: initial;
      }
      table {
         border-collapse: collapse;
         table-layout: fixed;
         width: 100%;
         margin: 0;
         overflow: hidden;

         td,
         th {
           min-width: 1em;
           border: 1px solid #ced4da;
           padding: 3px 5px;
           vertical-align: top;
           box-sizing: border-box;
           position: relative;

           > * {
             margin-bottom: 0;
           }
         }

         th {
           font-weight: bold;
           text-align: left;
           background-color: #f1f3f5;
         }

         .selectedCell:after {
           z-index: 2;
           position: absolute;
           content: "";
           left: 0; right: 0; top: 0; bottom: 0;
           background: rgba(200, 200, 255, 0.4);
           pointer-events: none;
         }

         .column-resize-handle {
           position: absolute;
           right: -2px;
           top: 0;
           bottom: -2px;
           width: 4px;
           background-color: #adf;
           pointer-events: none;
         }
      }
      .tableWrapper {
         overflow-x: auto;
       }

       .resize-cursor {
         cursor: ew-resize;
         cursor: col-resize;
       }
   }
   .menubar {
      button {
         background: none;
         border: none;
         border-radius: 0.4rem;
         color: #0d0d0d;
         font: inherit;
         font-size: 12px;
         font-weight: 600;
         padding: 0.25rem 0.5rem;

         &:hover {
            background-color: #0d0d0d;
            color: #fff;
         }
      }
      .divider {
         background-color: rgba(#000, 0.1);
         height: 1.25rem;
         margin-left: 0.5rem;
         margin-right: 0.75rem;
         width: 2px;
      }
      .menu-item {
         background-color: transparent;
         border: none;
         border-radius: 0.4rem;
         color: #0d0d0d;
         height: 1.75rem;
         margin-right: 0.25rem;
         padding: 0.25rem;
         width: 1.75rem;

         svg {
           fill: currentColor;
           height: 100%;
           width: 100%;
         }

         &:hover,
         &.is-active {
           background-color: #0d0d0d;
           color: #fff;
         }
      }
   }
`
export default StyledContentEditor
