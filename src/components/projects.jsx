import React from 'react'
import data from "../data/data.json"
function projects() {
  return (
    <div>
      <h1 className='ml-20  text-white text-4xl mb-10 mt-10  pr-text'>🚀 Projects</h1>
    <div class="card w-full bg-black shadow-xl flex flex-row 2xl-flex-col align-center projects">
     
    <div class="card-body border-2 rounded-lg ml-10 hue">
      <h2 class="card-title text-white">{data.projects[1].heading}</h2>
      <p className='text-white'>{data.projects[1].about}</p>
      <div class="card-actions justify-end">
      <a href="https://github.com/ayaanp-dev/tweakedSelfDrive"><button class="btn btn-outline btn-error mr-4">{data.projects[1].button}</button></a>
      </div>
    </div>
    <div class="card-body border-2 rounded-lg ml-10  hue ">
      <h2 class="card-title text-white">{data.projects[2].heading}</h2>
      <p className='text-white'>{data.projects[2].about}</p>
      <div class="card-actions justify-end">
      <a href="https://github.com/ayaanp-dev/voiceAssistant"><button class="btn btn-outline btn-warning mr-4">{data.projects[2].button}</button></a>
      </div>
    </div>
    <div class="card-body border-2 rounded-lg ml-10 mr-10 hue">
      <h2 class="card-title text-white">{data.projects[3].heading}</h2>
      <p className='text-white'>{data.projects[3].about}</p>
      <div class="card-actions justify-end">
        <a href="https://github.com/ayaanp-dev/fy-backend"><button class="btn btn-outline btn-success mr-4">{data.projects[3].button}</button></a>
      </div>
    </div> 
  </div>
  </div>
  )
}
/* <h1 className='text-4xl text-white ml-16 pt-10 '> Projects</h1> */
export default projects