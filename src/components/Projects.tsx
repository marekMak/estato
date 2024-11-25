import React, { useState } from 'react';
import Title from './Title';

import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import firstProject from '../assets/project_img_1.jpg';
import secondProject from '../assets/project_img_2.jpg';
import thirdProject from '../assets/project_img_3.jpg';
import fourthProject from '../assets/project_img_4.jpg';
import fifthProject from '../assets/project_img_5.jpg';
import sixthProject from '../assets/project_img_6.jpg';

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    { img: firstProject, name: "Skyline Haven", price: "$2,50,000", location: "California" },
    { img: secondProject, name: "Vista Verde", price: "$2,50,000", location: "San Francisco" },
    { img: thirdProject, name: "Serenity Suites", price: "$2,50,000", location: "Chicago" },
    { img: fourthProject, name: "Central Square", price: "$2,50,000", location: "Los Angeles" },
    { img: fifthProject, name: "Vista Verde", price: "$2,50,000", location: "San Francisco" },
    { img: sixthProject, name: "Serenity Suites", price: "$2,50,000", location: "Chicago" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 3;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - visibleProjects) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className='w-full h-full py-10 px-20 overflow-hidden'>
      <Title mainHeader="Projects" subHeader="Completed" secondHeader="Crafting Spaces, Building Legacies—Explore" lastHeader="Our Portfolio" />

      <div className="w-full flex justify-end pr-10 gap-3 mb-10">
        <img src={leftArrow} onClick={handlePrev} className="bg-slate-200 rounded p-2 cursor-pointer transition-all delay-150 hover:bg-slate-400"/>
        <img src={rightArrow} onClick={handleNext} className="bg-slate-300 rounded p-2 cursor-pointer transition-all delay-150 hover:bg-slate-400"/>
      </div>

      <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`, width: `${((projects.length / visibleProjects) * 100)/2}%` }}>
        {projects.map((project, index) => (
          <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
            <img src={project.img} className="w-full h-auto mb-14" alt={project.name} />
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className='text-gray-500 text-sm'>{project.price} | {project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
