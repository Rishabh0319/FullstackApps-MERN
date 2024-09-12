import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {About, Contact, Doctors, Home, Login, MyAppointments, MyProfile, Appointment} from './pages';
import NavbarComponent from './components/NavbarComponent';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
          <NavbarComponent/> 
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
          <Route path='/my-appointments' element={<MyAppointments/>}/>
          <Route path='/appointment/:docId' element={<Appointment/>}/>
       </Routes>
    </div>
  )
}

export default App