import { css } from "@emotion/react";

export default css`
   body.dialog_opened {
      #root {
         filter: blur(15px);
         overflow: hidden;
      }
   }
   h1 {
      font-size: 40px;
      font-weight: 800;
      letter-spacing: -1px;
   }
   .card {
      background: white;
      padding: 1.2rem;
      border-radius: 10px;
   }
   fieldset {
      margin-bottom: 2rem;
   }
   [type="checkbox"], [type="radio"] {
      border-radius: 1000px;
      cursor: pointer;
   }
   textarea {
      width: 100%;
   }

   button[disabled] {
      cursor: not-allowed;
      opacity: .5;
      background: lightgray;
   }
`
