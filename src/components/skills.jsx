import React from 'react'
import data from "../data/data.json"
function skills() {
  return (
    <div className=''>
       <h1 className='text-info text-4xl ml-20 pb-10  pr-text'>🦄  Skills </h1>
        <div class="flex flex-row w-full projects">
  <div class="grid flex-grow card bg-black rounded-box place-items-center text-white ">
      <h1 className=' text-3xl text-success '>{data.skillsone.heading}</h1>
      <h1 className='text-white text-xl pt-4 pb-2'>{data.skillsone[1]}</h1>
      <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700 ">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillsone[2]}</h1>
      <div class="w-80  bg-rose-200 rounded-full dark:bg-gray-700">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillsone[3]}</h1>
      <div class="w-80 pr-20 bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillsone[4]}</h1>
      <div class="w-80 pr-36  bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
  </div>
  <div class="divider divider-horizontal"></div>
  <div class="grid  flex-grow card bg-black rounded-box place-items-center text-white">
      <h1 className='text-error text-3xl '>{data.skillstwo.heading}</h1>
      <h1 className='text-white text-xl pt-4 pb-2'>{data.skillstwo[1]}</h1>
      <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillstwo[2]}</h1>
      <div class="w-80 pr-20 bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillstwo[3]}</h1>
      <div class="w-80 pr-36 bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
  <h1 className='text-white text-xl pt-4 pb-2'>{data.skillstwo[4]}</h1>
      <div class="w-80 pr-52 bg-gray-200 rounded-full dark:bg-gray-700">
  </div>
      
      
  </div>
</div>
    </div>

  )
}

export default skills