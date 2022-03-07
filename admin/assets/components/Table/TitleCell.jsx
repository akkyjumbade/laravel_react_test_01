import { Link } from "@tanstack/react-location"

export default function TitleCell(props) {
   return (
      <div>
         <p>
            <Link className='link-primary' to={`/users/edit/${props.row.values?.id}`}>{props.value}</Link>
         </p>
      </div>
   )
}
