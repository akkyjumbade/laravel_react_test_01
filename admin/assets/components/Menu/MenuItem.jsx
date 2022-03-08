import Menu from ".";

export default function MenuItem({ heading, children, label, ...props }) {
   return (
      <div role={'menuitem'} className={'text-gray-300'} {...props}>
         {heading ? (
         <Menu.Group {...heading} />
         ): (
            <div className="menuitem-label cursor-pointer text-sm text-gray-800 nav-item">{label}</div>
         )}

         {children}
      </div>
   )
}
