import { sumBy } from "lodash"
import { useMemo } from "react"
import { useQuery } from "react-query"

export default function DashboardScreen(props) {
   const { data: orders, isLoading } = useQuery([ 'api/orders' ])
   const { data: users, isLoadingUsers } = useQuery([ 'api/users' ])
   const { data: products, isLoadingProducts } = useQuery([ 'api/products' ])
   const salesTotal = useMemo(() => {
      return sumBy(orders?.data, 'total')
   }, [ orders ])

   return (
      <div>
         <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
               <div className="card">
               <div className="card-body p-3">
                  <div className="row">
                     <div className="col-8">
                     <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                           Total orders
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                           {orders?.total ?? 0}
                        </h5>
                     </div>
                     </div>
                     <div className="col-4 text-end">
                     <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                           className="ni ni-money-coins text-lg opacity-10"
                           aria-hidden="true"
                        />
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
               <div className="card">
               <div className="card-body p-3">
                  <div className="row">
                     <div className="col-8">
                     <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                           Total Users
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                           {users?.total ?? 0}
                        </h5>
                     </div>
                     </div>
                     <div className="col-4 text-end">
                     <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                           className="ni ni-world text-lg opacity-10"
                           aria-hidden="true"
                        />
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
               <div className="card">
               <div className="card-body p-3">
                  <div className="row">
                     <div className="col-8">
                     <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                           Products
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                           {products?.total ?? 0}
                        </h5>
                     </div>
                     </div>
                     <div className="col-4 text-end">
                     <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                           className="ni ni-paper-diploma text-lg opacity-10"
                           aria-hidden="true"
                        />
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
            <div className="col-xl-3 col-sm-6">
               <div className="card">
               <div className="card-body p-3">
                  <div className="row">
                     <div className="col-8">
                     <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                           Sales
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                           Rs.{salesTotal ?? 0}
                        </h5>
                     </div>
                     </div>
                     <div className="col-4 text-end">
                     <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                           className="ni ni-cart text-lg opacity-10"
                           aria-hidden="true"
                        />
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
         <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
               <div className="card">
               <div className="card-body p-3">
                  <div className="row">
                     <div className="col-lg-6">
                     <div className="d-flex flex-column h-100">
                        <p className="mb-1 pt-2 text-bold">Built by developers</p>
                        <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                        <p className="mb-5">
                           From colors, cards, typography to complex elements, you will
                           find the full documentation.
                        </p>
                        <a
                           className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                           href="javascript:;"
                        >
                           Read More
                           <i
                           className="fas fa-arrow-right text-sm ms-1"
                           aria-hidden="true"
                           />
                        </a>
                     </div>
                     </div>
                     <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                     <div className="bg-gradient-primary border-radius-lg h-100">
                        <img
                           src="../assets/img/shapes/waves-white.svg"
                           className="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                           alt="waves"
                        />
                        <div className="position-relative d-flex align-items-center justify-content-center h-100">
                           <img
                           className="w-100 position-relative z-index-2 pt-4"
                           src="../assets/img/illustrations/rocket-white.png"
                           alt="rocket"
                           />
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="card h-100 p-3">
               <div
                  className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                  style={{ backgroundImage: 'url("../assets/img/ivancik.jpg")' }}
               >
                  <span className="mask bg-gradient-dark" />
                  <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                     <h5 className="text-white font-weight-bolder mb-4 pt-2">
                     Work with the rockets
                     </h5>
                     <p className="text-white">
                     Wealth creation is an evolutionarily recent positive-sum game. It
                     is all about who take the opportunity first.
                     </p>
                     <a
                     className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                     href="javascript:;"
                     >
                     Read More
                     <i
                        className="fas fa-arrow-right text-sm ms-1"
                        aria-hidden="true"
                     />
                     </a>
                  </div>
               </div>
               </div>
            </div>
         </div>
         <div className="row my-4">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
               <div className="card">
               <div className="card-header pb-0">
                  <div className="row">
                     <div className="col-lg-6 col-7">
                     <h6>Recent Orders</h6>
                     </div>
                     <div className="col-lg-6 col-5 my-auto text-end">
                     <div className="dropdown float-lg-end pe-4">
                        <a
                           className="cursor-pointer"
                           id="dropdownTable"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           <i className="fa fa-ellipsis-v text-secondary" />
                        </a>
                        <ul
                           className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                           aria-labelledby="dropdownTable"
                        >
                           <li>
                           <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                           >
                              Action
                           </a>
                           </li>
                           <li>
                           <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                           >
                              Another action
                           </a>
                           </li>
                           <li>
                           <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                           >
                              Something else here
                           </a>
                           </li>
                        </ul>
                     </div>
                     </div>
                  </div>
               </div>
               <div className="card-body px-0 pb-2">
                  <div className="table-responsive">
                     <table className="table align-items-center mb-0">
                     <thead>
                        <tr>
                           <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                           Companies
                           </th>
                           <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                           Members
                           </th>
                           <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                           Budget
                           </th>
                           <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                           Completion
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-xd.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="xd"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Soft UI XD Version</h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Ryan Tompson"
                              >
                                 <img src="../assets/img/team-1.jpg" alt="team1" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Romina Hadid"
                              >
                                 <img src="../assets/img/team-2.jpg" alt="team2" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Alexander Smith"
                              >
                                 <img src="../assets/img/team-3.jpg" alt="team3" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Jessica Doe"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="team4" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> $14,000 </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">60%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-info w-60"
                                 role="progressbar"
                                 aria-valuenow={60}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-atlassian.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="atlassian"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Add Progress Track</h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Romina Hadid"
                              >
                                 <img src="../assets/img/team-2.jpg" alt="team5" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Jessica Doe"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="team6" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> $3,000 </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">10%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-info w-10"
                                 role="progressbar"
                                 aria-valuenow={10}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-slack.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="team7"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Fix Platform Errors</h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Romina Hadid"
                              >
                                 <img src="../assets/img/team-3.jpg" alt="team8" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Jessica Doe"
                              >
                                 <img src="../assets/img/team-1.jpg" alt="team9" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> Not set </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">100%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-success w-100"
                                 role="progressbar"
                                 aria-valuenow={100}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-spotify.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="spotify"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Launch our Mobile App</h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Ryan Tompson"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="user1" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Romina Hadid"
                              >
                                 <img src="../assets/img/team-3.jpg" alt="user2" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Alexander Smith"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="user3" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Jessica Doe"
                              >
                                 <img src="../assets/img/team-1.jpg" alt="user4" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> $20,500 </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">100%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-success w-100"
                                 role="progressbar"
                                 aria-valuenow={100}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-jira.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="jira"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">
                                 Add the New Pricing Page
                                 </h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Ryan Tompson"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="user5" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> $500 </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">25%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-info w-25"
                                 role="progressbar"
                                 aria-valuenow={25}
                                 aria-valuemin={0}
                                 aria-valuemax={25}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                 src="../assets/img/small-logos/logo-invision.svg"
                                 className="avatar avatar-sm me-3"
                                 alt="invision"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">
                                 Redesign New Online Shop
                                 </h6>
                              </div>
                           </div>
                           </td>
                           <td>
                           <div className="avatar-group mt-2">
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Ryan Tompson"
                              >
                                 <img src="../assets/img/team-1.jpg" alt="user6" />
                              </a>
                              <a
                                 href="javascript:;"
                                 className="avatar avatar-xs rounded-circle"
                                 data-bs-toggle="tooltip"
                                 data-bs-placement="bottom"
                                 title="Jessica Doe"
                              >
                                 <img src="../assets/img/team-4.jpg" alt="user7" />
                              </a>
                           </div>
                           </td>
                           <td className="align-middle text-center text-sm">
                           <span className="text-xs font-weight-bold"> $2,000 </span>
                           </td>
                           <td className="align-middle">
                           <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                 <div className="progress-percentage">
                                 <span className="text-xs font-weight-bold">40%</span>
                                 </div>
                              </div>
                              <div className="progress">
                                 <div
                                 className="progress-bar bg-gradient-info w-40"
                                 role="progressbar"
                                 aria-valuenow={40}
                                 aria-valuemin={0}
                                 aria-valuemax={40}
                                 />
                              </div>
                           </div>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                  </div>
               </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="card h-100">
               <div className="card-header pb-0">
                  <h6>Orders overview</h6>
                  <p className="text-sm">
                     <i className="fa fa-arrow-up text-success" aria-hidden="true" />
                     <span className="font-weight-bold">24%</span> this month
                  </p>
               </div>
               <div className="card-body p-3">
                  <div className="timeline timeline-one-side">
                     <div className="timeline-block mb-3">
                     <span className="timeline-step">
                        <i className="ni ni-bell-55 text-success text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           $2400, Design changes
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           22 DEC 7:20 PM
                        </p>
                     </div>
                     </div>
                     <div className="timeline-block mb-3">
                     <span className="timeline-step">
                        <i className="ni ni-html5 text-danger text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           New order #1832412
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           21 DEC 11 PM
                        </p>
                     </div>
                     </div>
                     <div className="timeline-block mb-3">
                     <span className="timeline-step">
                        <i className="ni ni-cart text-info text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           Server payments for April
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           21 DEC 9:34 PM
                        </p>
                     </div>
                     </div>
                     <div className="timeline-block mb-3">
                     <span className="timeline-step">
                        <i className="ni ni-credit-card text-warning text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           New card added for order #4395133
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           20 DEC 2:20 AM
                        </p>
                     </div>
                     </div>
                     <div className="timeline-block mb-3">
                     <span className="timeline-step">
                        <i className="ni ni-key-25 text-primary text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           Unlock packages for development
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           18 DEC 4:54 AM
                        </p>
                     </div>
                     </div>
                     <div className="timeline-block">
                     <span className="timeline-step">
                        <i className="ni ni-money-coins text-dark text-gradient" />
                     </span>
                     <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                           New order #9583120
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                           17 DEC
                        </p>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
         <footer className="footer pt-3  ">
            <div className="container-fluid">
               <div className="row align-items-center justify-content-lg-between">
               <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                     ?? , made with <i className="fa fa-heart" /> by
                     <a
                     href="https://www.creative-tim.com"
                     className="font-weight-bold"
                     target="_blank"
                     >
                     Creative Tim
                     </a>
                     for a better web.
                  </div>
               </div>
               <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                     <li className="nav-item">
                     <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                        target="_blank"
                     >
                        Creative Tim
                     </a>
                     </li>
                     <li className="nav-item">
                     <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                        target="_blank"
                     >
                        About Us
                     </a>
                     </li>
                     <li className="nav-item">
                     <a
                        href="https://creative-tim.com/blog"
                        className="nav-link text-muted"
                        target="_blank"
                     >
                        Blog
                     </a>
                     </li>
                     <li className="nav-item">
                     <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                     >
                        License
                     </a>
                     </li>
                  </ul>
               </div>
               </div>
            </div>
         </footer>
      </div>
   )
}
