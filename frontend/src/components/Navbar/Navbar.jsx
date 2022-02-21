import React from 'react';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Navbar() {
  const[showmodal,setshowmodal]=useState(false)
  const {carttotalquantity}=useSelector(state=>state.cart)



  return (
      <>
      <div className="navbar">
          <div className="navbar-container">
              <div className="navbar-left">
                  <span>EN</span>
                  <div className="searchbox">
                      <input type="text" />
                      <SearchIcon style={{cursor:'pointer' , fontSize:'20px' , color:'#555'}} />
                  </div>
              </div>
              <div className="navbar-center">
                <Link className='linklogo' to='/'>GUCCI</Link>
              </div>
              <div className="navbar-right">
                <Link className='register' to='/product/men' >PRODUCT</Link>
                <Link className='register' to='./register'>REGISTER</Link>
               
             <button onClick={()=>setshowmodal(true)} >SIGN IN</button>
             <Link to='/cart' >

               <Badge badgeContent={carttotalquantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                </Badge>
             </Link>
                
              </div>
          </div>
      </div>

      {showmodal && <Modal closemodal={setshowmodal}/>}
      
      </>
  );
}
