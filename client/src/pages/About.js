import React, { useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { json } from 'react-router-dom';
const About = () => {
  const notify = () => toast.success("Wow so easy!",{
    position:"bottom-right"
  });
  
  return (
    <Layouts>
      <div>
        <button onClick={notify}>Notify!</button>
      </div>
        <ToastContainer />
    </Layouts>
  )
}

export default About
