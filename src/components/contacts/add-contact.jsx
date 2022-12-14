import React from 'react'
import { Link } from 'react-router-dom'
const AddContact = () => {
  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-itallic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt neque dicta ipsa harum vel quos commodi praesentium tempora officia?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action="">
                <input type="text" className="form-control" placeholder='Name' />
                <input type="text" className="form-control" placeholder='Photo url' />
                <input type="number" className="form-control" placeholder='Mobile number' />
                <input type="email" className="form-control" placeholder='Email' />
                <input type="text" className="form-control" placeholder='Company name' />
                <input type="text" className="form-control" placeholder='Tittle' />
                <select name="" id="" className="form-control">
                  <option value="">select group</option>
                  <option value="">select group</option>
                  <option value="">select group</option>
                  <option value="">select group</option>
                </select>
               <div className="mb-2 my-3">
                <input type="submit" value="create" className="btn btn-success"/>
                      <Link to={'/contacts/list'} className="btn btn-dark mx-2">Cancel</Link>
               </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddContact
