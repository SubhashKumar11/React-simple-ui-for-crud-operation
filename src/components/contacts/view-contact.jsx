import React from 'react'
import { Link } from "react-router-dom";
const View_contact = () => {
  return (
    <>
<section className="view-contact p-3">
  <div className="container">
    <div className="row">
      <div className="col">
        <p className="h3 text-warning fw-bold">view contact</p>
        <p className="fst-itallic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem earum sint ex? Praesentium, corporis voluptates. Porro nihil iure perspiciatis.</p>

      </div>
    </div>
  </div>
</section>
<section className="view-contact mt-3">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-4">
<img className='contact-img' src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
    </div>
    <div className="col-md-8 mx-6 my-10">
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
                                    <li className="list-group-item list-group-action">
                                     Company: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Tittle: <span className="fw-bold">Ram</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                     Group: <span className="fw-bold">Ram</span>
                                    </li>
                                  </ul>
      </div>
      <div className="row">
        <div className="col">
          <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>
        </div>
      </div>
  </div>
</div>
</section>
    </>
  )
}

export default View_contact
