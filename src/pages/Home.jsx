import React from 'react';
import { Outlet } from 'react-router-dom';
import "../App.css";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <div className='dashboard__container'>
      <Sidebar/>

      <div className='dashboard__navbar'>
        <Navbar/>

        <div className='dashboard__routes'>
         <Outlet/>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Home