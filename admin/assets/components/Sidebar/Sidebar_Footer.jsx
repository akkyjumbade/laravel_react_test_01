export default function Sidebar_Footer() {
   return (
      <div className="sidenav-footer bg-gray-800 ">
         <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
            <div className="full-background" style={{backgroundImage: 'url("../assets/img/curved-images/white-curved.jpeg")'}} />
            <div className="card-body text-start p-3 w-100">
            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
               <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon" />
            </div>
            <div className="docs-info">
               <h6 className="text-white up mb-0">Need help?</h6>
               <p className="text-xs font-weight-bold">Please check our docs</p>
               <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" className="btn btn-white btn-sm w-100 mb-0">Documentation</a>
            </div>
            </div>
         </div>
         {/* <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a> */}
      </div>
   )
}
