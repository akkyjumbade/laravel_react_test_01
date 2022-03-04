import { useState } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import home from '../../icons/home.svg'

export default function NavItem({ label, url, iconClass }) {
   let navigate = useNavigate();
   const [ active, ] = useState(false)
   let resolved = useResolvedPath(url);
   let match = useMatch({ path: resolved.pathname, end: true });
   function navigateToClick() {
      navigate(url)
   }
   const activeIconClass = match ? 'text-white': ' text-muted'
   // let

   return (
      <li className={'nav-item'}>
         <a className={`nav-link cursor-pointer ${match ? 'active' : ''}`} onClick={navigateToClick} >
            <div className="icon p-3 icon-shape shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
               <span className={`fas  ${iconClass}  ${activeIconClass}`} aria-hidden="true" />
            </div>
            <span className="nav-link-text ms-1">{label}</span>
         </a>
      </li>
   )
}

NavItem.defaultProps = {
   iconClass: 'fa-house-user'
}
