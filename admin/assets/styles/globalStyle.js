import { css } from "@emotion/react";

export default css`
   body.dialog_opened {
      #root {
         filter: blur(15px);
         overflow: hidden;
      }
   }
   fieldset {
      margin-bottom: 2rem;
   }
`
