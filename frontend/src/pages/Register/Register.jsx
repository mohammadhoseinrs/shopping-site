import React from 'react';
import {Link} from 'react-router-dom'
import sliderdata from '../../Sliderdata';
import './Register.css'
import AnimatedPage from '../../animated';

import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

export default function Register() {
    const[showmodal,setshowmodal]=useState(false)
  return (
      <AnimatedPage>
      
      <div className="register1 container-register">
        <div className="register-link">
        <Link className='home1' to='/' >Home</Link>
        <p className='slash'>/</p>
        <p>Create An Account</p>
      </div>  
      <div className="create-an-account">
          <h3>Create An Account</h3>
      </div>
      <div className="line2"></div>
      <form action="" className="register-form">
          <p>Sign up for a free account at Ella Boutique.</p>
          <label htmlFor="">First Name</label>
          <input type="text" />
          <label htmlFor="">Last Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input className='last-input' type="text" />
          <button type='submit'>CREATE AN ACCOUNT</button>
          <div className="form-login">
            <p style={{minWidth:'100px'}}>I Have An Account.</p>
          <a className='form-btn'  onClick={()=>setshowmodal(true)}> sign in</a>
          
          </div>
          

      </form>
      </div>

      {showmodal && <Modal closemodal={setshowmodal}/>}
      </AnimatedPage>
  );
}
