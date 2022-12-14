import react from "react";
import { Link } from "react-router-dom";
import './contact_list.css'
const Contact_list = () => {
  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"></i>
                    New
                  </Link>
                </p>
                <p className="fst-itallic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur magnam doloremque possimus officiis explicabo quas
                  facilis laudantium? Error, nam vero?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form action="" className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder="search names"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        placeholder="search"
                        className="btn btn-outline-dark"
                      />
                       
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="contact-list">
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                           <div className="row align-items-center ">
                           <div className="col-md-4 ">
                               <img className="img-fluid contact-img" src=" https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
                            </div>
                                <div className="col-md-7">
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-action">
                                     Name: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Mobile: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Email: <span className="fw-bold">Ram</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                  <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                  <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
                                    <i className="fa fa-pen"></i>
                                  </Link>
                                  <button className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                           </div>
                          
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row ">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                           <div className="row align-items-center ">
                           <div className="col-md-4 ">
                               <img className="img-fluid contact-img" src=" https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
                            </div>
                                <div className="col-md-7">
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-action">
                                     Name: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Mobile: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Email: <span className="fw-bold">Ram</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                  <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                  <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
                                    <i className="fa fa-pen"></i>
                                  </Link>
                                  <button className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                           </div>
                          
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      </section>
      
    </>
  );
};
export default Contact_list;
