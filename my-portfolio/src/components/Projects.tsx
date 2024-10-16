import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
{
  id:0,
  title: "Todo List",
  desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
  img: "/Project_1.png",
  tags: ["React", "Node", "CSS", "Typescript"],
},
{
    id:1,
    title: "Simple Calculator Project",
    desc: "A basic HTML and Typescrip calcultor for performing essential arithmetic operations",
    img: "/Project_2.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],

},
{
  id:2,
  title: "Currency Converter Project",
  desc:  "A simple HTML & Typescript powered tool for converting currencies with real-time rates",
  img:   "/Project_3.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
},
{
  id:3,
  title: "Weather Widget",
  desc: "A Next.js and Typescript powered tool for fetching and displaying real-time weather data",
  img: "/Project_4.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
 },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
