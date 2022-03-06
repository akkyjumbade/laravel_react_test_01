import React, { useMemo } from "react";
import { useMutation } from "react-query";
import { http } from "../../../utils";

export const IndeterminateCheckbox = React.forwardRef(
   ({ indeterminate, ...rest }, ref) => {
      const { row } = rest;
      return (
         <React.Fragment>
            <input type={'checkbox'} className="cursor-pointer" />
            {/* {JSON.stringify({ row })} */}
         </React.Fragment>
      );
   }
);
