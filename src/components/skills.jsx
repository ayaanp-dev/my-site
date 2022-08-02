import React from 'react'
import data from "../data/data.json"
function skills() {
  return (
    <div className=''>
       <h1 className='text-info text-4xl ml-20 pb-10  pr-text'>🦄  Skills </h1>
        <div class="flex flex-row w-full projects">
  <div class="grid flex-grow card bg-black rounded-box place-items-center text-white ">
      <h1 className=' text-4xl text-success '>{data.skillsone.heading}</h1>
      <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillsone[1]}</h1>
      <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700 ">
    <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 100%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillsone[2]}</h1>
      <div class="w-80  bg-rose-200 rounded-full dark:bg-gray-700">
    <div class="bg-rose-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 100%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillsone[3]}</h1>
      <div class="w-80 pr-20 bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 100%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillsone[4]}</h1>
      <div class="w-80 pr-36  bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-rose-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 75%</div>
  </div>
  </div>
  <div class="divider divider-horizontal"></div>
  <div class="grid  flex-grow card bg-black rounded-box place-items-center text-white">
      <h1 className='text-error text-4xl '>{data.skillstwo.heading}</h1>
      <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillstwo[1]}</h1>
      <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-rose-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  "> 100%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillstwo[2]}</h1>
      <div class="w-80 pr-20 bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill  text-black"> 75%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillstwo[3]}</h1>
      <div class="w-80 pr-36 bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-rose-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 50%</div>
  </div>
  <h1 className='text-white text-2xl pt-4 pb-2'>{data.skillstwo[4]}</h1>
      <div class="w-80 pr-52 bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full div-skill "> 25%</div>
  </div>
      
      
  </div>
</div>
    </div>

  )
}

export default skills