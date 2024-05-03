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
      <div className='flex basis-1/2'>
       <div class="basis-1/4 bg-slate-600 text-center text-white">01</div>
       <div class="basis-1/4 bg-slate-950 text-center text-white">02</div>
       <div class="basis-1/2 bg-stone-300 text-center text-white">03</div>
      </div>
        <ToastContainer />
    </Layouts>
  )
}

export default About
