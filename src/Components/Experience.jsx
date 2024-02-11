import React, { useState } from "react";
import {
  faUserGraduate,
  faUserTie,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Experience = () => {
  const [aim, setAim] = useState(true);

  const Education = [
    {
      title: "Btech CSE",
      location: "Delhi Technolgical Univeristy",
      tenure: "2022-2026",
    },
    {
      title: "XII",
      location: "APS Delhi Cantt,Delhi",
      tenure: "2020-2022",
      remark: "93.2%",
    },
    {
      title: "X",
      location: "APS 2 Jabalpur, M.P.",
      tenure: "2020-2022",
      remark: "94.8%",
    },
  ];

  const experience = [
    {
      title: "Campus Ambassdor",
      location: "Krayoonz",
      tenure: "2022",
    },
    {
      title: "Web Head",
      location: "Innova DTU",
      tenure: "2022-Present",
    },
  ];
  const [info, setInfo] = useState(Education);

  return (
    <div className="flex flex-col items-center pt-5 md:pt-20 p-4 bg-slate-300 h-[100vh]">
      <h1 className="text-2xl md:text-4xl font-semibold p-4 md:p-6">
        Qualifications
      </h1>
      <p className="text-lg text-slate-500">My Personal Journey</p>

      <div className="flex md:mt-10 mt-5 md:space-x-10 space-x-5 md:text-2xl  ">
        <motion.h1
          initial={{ opactity: 0.25, x: 200 }}
          transition={{ duration: 0.5 }}
          animate={{}}
          whileInView={{ opactity: 1, x: 0 }}
          onClick={() => {
            setAim(true);
            setInfo(Education);
          }}
          className="bg-slate-700 text-slate-50 px-5 py-2 rounded-lg shadow-xl shadow-slate-600 hover:bg-slate-400 hover:text-slate-800"
        >
          <FontAwesomeIcon icon={faUserGraduate} className="" /> Education
        </motion.h1>
        <motion.h1
         initial={{ opactity: 0.25, x: -200 }}
         transition={{ duration: 0.5 }}
         animate={{}}
         whileInView={{ opactity: 1, x: 0 }}
          onClick={() => {
            setAim(false);
            setInfo(experience);
          }}
          className="bg-slate-700 text-slate-50 px-5 py-2 rounded-lg shadow-xl shadow-slate-600 hover:bg-slate-400 hover:text-slate-800"
        >
          <FontAwesomeIcon icon={faUserTie} /> Experience
        </motion.h1>
      </div>

      <motion.div
       initial={{ opactity: 0.25, y: 200 }}
       transition={{ duration: 0.5 }}
       animate={{}}
       whileInView={{ opactity: 1, y: 0 }}
       className=" flex flex-col md:flex-row justify-around md:w-[70vw] w-[100vw] space-x-2 space-y-2 my-12 flex-wrap">
        {info.map((item, i) => (
          <div className="flex flex-col bg-slate-200 text-center shadow-2xl rounded-xl p-3 md:p-8 hover:shadow-xl hover:shadow-slate-700  ">
            <h1 className="md:text-3xl md:p-4 font-semibold">{item.title}</h1>
            <h1 className="md:text-lg md:p-2 text-slate-500">
              {item.location}
            </h1>
            <h1 className="md:text-lg md:p-2">
              <FontAwesomeIcon icon={faCalendarDays} /> {item.tenure}
            </h1>
            <h1 className="md:p-2 md:text-xl">{item.remark}</h1>
          </div>
        ))}
      </motion.div>

      <div></div>
    </div>
  );
};

export default Experience;
