export default function Sidebar_Footer() {
   return (
      <div className="sidenav-footer bg-gray-800 ">
         <div className="full-background" style={{backgroundImage: 'url("../assets/img/curved-images/white-curved.jpeg")'}} />
            <div className="px-3 pt-3">
               <UserMenu />
            </div>
            <div className="card-body text-start p-3 w-100">
            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
               <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon" />
            </div>
            <div className="docs-info text-xs text-gray-400">
               <h6 className="text-white text-sm up mb-0">Need help?</h6>
               <p className="text-xs font-weight-bold">Please check our docs</p>
               <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" className="text-sm btn btn-white btn-sm text-sm w-100 mb-0">Documentation</a>
            </div>
         </div>
         {/* <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a> */}
      </div>
   )
}

const UserMenu = () => {
   return (
      <div className="flex gap-3 items-center">
         <picture className="overflow-hidden rounded-full">
            <img className="bg-white w-10 h-10 rounded-full" src="" alt="@username" />
         </picture>
         <div className="flex-1 text-white text-sm">
            <p>@username</p>
            <p className="text-xs">username</p>
         </div>
         <div className="text-white text-sm">
            <p>{'<'}</p>
         </div>
      </div>
   )
}
