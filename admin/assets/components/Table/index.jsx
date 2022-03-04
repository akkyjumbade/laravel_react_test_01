import Cell from "./Cell"
import Column from "./Column"
import Row from "./Row"

export default function Table({ title, description }) {
   return (
      <div className="card mb-4">
         <div className="card-header pb-0">
            {title && (
            <h6>{title}</h6>
            )}
         </div>
         <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
               <table className="table align-items-center mb-0">
                  <thead>
                     <Row>
                        <Column>
                           Author
                        </Column>
                        <Column className="ps-2">
                           Function
                        </Column>
                        <Column className="text-center">
                           Status
                        </Column>
                        <Column className="text-center">
                           Employed
                        </Column>
                        <Column className="text-secondary opacity-7">

                        </Column>
                     </Row>
                  </thead>
                  <tbody>
                     <Row>

                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-2.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user1"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">John Michael</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="e983868187a98a9b8c889d809f8cc49d8084c78a8684"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Manager</p>
                           <p className="text-xs text-secondary mb-0">Organization</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-success">Online</span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              23/04/18
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                     <Row>
                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user2"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="1d7c7178657c5d7e6f787c69746b7830697470337e7270"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Programator</p>
                           <p className="text-xs text-secondary mb-0">Developer</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                           </span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              11/01/19
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                     <Row>
                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user3"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="600c011512050e142003120501140916054d14090d4e030f0d"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Executive</p>
                           <p className="text-xs text-secondary mb-0">Projects</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-success">Online</span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              19/09/17
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                     <Row>
                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user4"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Michael Levi</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="3855515b50595d54785b4a5d594c514e5d154c5155165b5755"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Programator</p>
                           <p className="text-xs text-secondary mb-0">Developer</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-success">Online</span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              24/12/08
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                     <Row>
                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-2.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user5"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Richard Gran</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="c9bba0aaa1a8bbad89aabbaca8bda0bface4bda0a4e7aaa6a4"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Manager</p>
                           <p className="text-xs text-secondary mb-0">Executive</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                           </span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              04/10/21
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                     <Row>
                        <Cell>
                           <div className="d-flex px-2 py-1">
                              <div>
                                 <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3"
                                    alt="user6"
                                 />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                 <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                 <p className="text-xs text-secondary mb-0">
                                    <a
                                       href="/cdn-cgi/l/email-protection"
                                       className="__cf_email__"
                                       data-cfemail="04696d766d65694467766165706d726129706d692a676b69"
                                    >
                                       [email&nbsp;protected]
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </Cell>
                        <Cell>
                           <p className="text-xs font-weight-bold mb-0">Programtor</p>
                           <p className="text-xs text-secondary mb-0">Developer</p>
                        </Cell>
                        <Cell className="align-middle text-center text-sm">
                           <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                           </span>
                        </Cell>
                        <Cell className="align-middle text-center">
                           <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                           </span>
                        </Cell>
                        <Cell className="align-middle">
                           <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                           >
                              Edit
                           </a>
                        </Cell>
                     </Row>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}


Table.Column = Column
Table.Row = Row
Table.Cell = Cell
