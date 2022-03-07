
export default function MenuItem({ children, label, ...props }) {
   return (
      <div role={'menuitem'} className={'text-gray-300'} {...props}>
         <div className="menuitem-label cursor-pointer">{label}</div>
         {children}
      </div>
   )
}
