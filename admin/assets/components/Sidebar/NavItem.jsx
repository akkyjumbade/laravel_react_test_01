import { Link } from "@tanstack/react-location";
import { useState } from "react";
// import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import home from '../../icons/home.svg'


export default function NavItem({ label, url, iconClass }) {
   // let navigate = useNavigate();
   const [ active, ] = useState(false)
   // let resolved = useResolvedPath(url);
   // let match = useMatch({ path: resolved.pathname, end: true });
   let match = false
   function navigateToClick() {
      // navigate(url)
   }
   const activeIconClass = match ? 'text-white': ' text-muted'
   // let

   return (
      <li className={'nav-item'}>
         <Link className={`block mb-1 text-sm font-medium text-gray-300 ${match ? 'active' : ''}`} to={url}>
            <span className="nav-link-text ms-1">{label}</span>
         </Link>
      </li>
   )
}

NavItem.defaultProps = {
   iconClass: 'fa-house-user'
}
