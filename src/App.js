import React from 'react'
import Navbar from './components/Navbar/navbar'
import {Routes,Route,Navigate} from 'react-router-dom'
import AddContact from './components/contacts/add-contact'
import Contact_list from './components/contacts/contact-list'
import View_contact from './components/contacts/view-contact'
import Edit_contact from './components/contacts/edit-contact'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path={'/'} element={<Navigate to={'/contacts/list'}/>}></Route>
      <Route path='/contacts/list' element={<Contact_list/>}></Route>
      <Route path='/contacts/add' element={<AddContact/>}></Route>
      <Route path='/contacts/view/:contactId' element={<View_contact/>}></Route>
      <Route path='/contacts/edit/:contactId' element={<Edit_contact/>}></Route>
    </Routes>
    </>
  )
}

export default App
