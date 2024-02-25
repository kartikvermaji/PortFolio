import React, { useState } from 'react'
import {
  faEnvelope,faArrowRight ,faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import skycol from "../assets/SKYCOL.png"
import market from "../assets/Market.png"

const PortFolio = () => {
  const [work,serWork]=useState([{
    picturePath:skycol,
    title:"SKYCOL",
    link:"https://github.com/kartikvermaji/Skycol",
    desc:"Social Media App"
  },{
    picturePath:market,
    title:"Market",
    link:"https://github.com/kartikvermaji/Market",
    desc:"Ecommerce App"
  }])
  return (
    <div className='m-4 flex flex-col container mx-auto items-center'>
      <h1 className='text-2xl md:text-4xl md:m-4 font-semibold my-2 md:mt-16' >Portfolio</h1>
      <p className='text-xl text-slate-600 m-2'>Most recent work</p>
      <div className='flex space-y-3 justify-around w-[70vw] mt-4 flex-col mx-auto md:flex-row'>
        
        {work.map((project)=>(
          <motion.div
          initial={{ opactity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          animate={{}}
          whileInView={{ opactity: 1, y: 0 }}
           className='p-3 md:p-4 w-[80vw] md:w-[30vw] bg-slate-200 rounded-xl shadow-xl hover:shadow-slate-600 flex flex-col justify-center container mx-auto items-center'>
            <img src={project.picturePath} alt="" className=' md:h-[30vh] w-[80vw] md:w-[30vw] rounded-xl object-cover ' />
            <h1 className='text-xl mt-5 font-semibold text-slate-800'>{project.title}</h1>
            <p className='border-b-2 border-slate-700'>{project.desc}</p>
            <a href={project.link} className='md:p-2 md:text-lg hover:space-x-4 space-x-1 flex justify-center '>
                    <p>See Demo</p> <FontAwesomeIcon icon={faArrowRight}  className=' my-1 duration-200' />
                </a>
          </motion.div>
        ))}
        {console.log(work)}
      </div>
      
         </div>
  )
}

export default PortFolio
