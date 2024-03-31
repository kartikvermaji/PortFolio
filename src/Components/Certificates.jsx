import React, { useState } from 'react'
import {
  faEnvelope,faArrowRight ,faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


import Krayonnz from "../assets/KrayonnzCert.png"
import Lensroom from "../assets/LensroomCert.png"

const PortFolio = () => {

  const [work2,serWork2]=useState([,{
    picturePath:Lensroom,
    title:"Web Development Internship",
    link:"https://www.linkedin.com/posts/kartik-verma-037238259_internshipcertificate-webdevelopment-lensroomtechnologies-activity-7179363610261958656-wqct?utm_source=share&utm_medium=member_desktop",
    desc:"Lensroom",
  },{
    picturePath:Krayonnz,
    title:"Campus Ambassdor Internship",
    link:"https://www.linkedin.com/posts/kartik-verma-037238259_hi-connections-im-glad-to-share-you-that-activity-7065728572895756289-Fgz0?utm_source=share&utm_medium=member_desktop",
    desc:"Krayonnz",
    
  }])

  

  return (
    <div className='m-4 flex flex-col container mx-auto items-center h-auto lg:h-[100vh]'>
      <h1 className='text-2xl md:text-4xl md:m-4 font-semibold my-2 md:mt-16' >Certificates</h1>
      <p className='text-xl text-slate-600 m-2'>My Proffesional Certificates</p>

      <div className='flex md:space-y-3 space-y-5 justify-around w-[70vw] ml-8 md:ml-auto mt-4 flex-col mx-auto md:flex-row pb-10'>
        {work2.map((project)=>(
          <motion.div
          initial={{ opactity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          animate={{}}
          whileInView={{ opactity: 1, y: 0 }}
          viewport={{ once:true, amount: 0.5 }}
           className='p-3 md:p-4 w-[80vw] md:w-[30vw] bg-slate-200 rounded-xl shadow-xl hover:shadow-slate-600 flex flex-col justify-center container mx-auto items-center'>
            <img src={project.picturePath} alt="" className=' md:h-[30vh] w-[80vw] md:w-[30vw] rounded-xl object-cover ' />
            <h1 className='text-xl mt-5 font-semibold text-slate-800'>{project.title}</h1>
            <p className='border-b-2 border-slate-700'>{project.desc}</p>
            <a href={project.link} className='md:p-2 md:text-lg hover:space-x-4 space-x-1 flex justify-center '>
                    <p>See Certificate</p> <FontAwesomeIcon icon={faArrowRight}  className=' my-1 duration-200' />
                </a>
          </motion.div>
        ))}

        {/* {console.log(work)} */}
      </div>
         </div>
  )
}

export default PortFolio
