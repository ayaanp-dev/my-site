import React from "react";

function contact() {
  return (
    <div>
      <h1 className="text-white text-4xl ml-20 mt-10 mb-10  pr-text ">🐱‍💻 Contact</h1>
      <div className="flex flex-row  align-center justify-center projects  ">
        {/* <button class="btn btn-outline btn-info ml-4 ">Email</button> */}
        <label for="my-modal" class="btn btn-outline btn-info mr-4 ml-4 ">
          Email
        </label>
        <button class="btn btn-outline btn-success mr-4 ml-4 contacte">Github</button>
        <button class="btn btn-outline btn-warning ml-4 mr-4 contacte">Twitter</button>
        <button class="btn btn-outline btn-error ml-4 mr-4 contacte">dev.to </button>
        <p onClick={()=>{
          //redirect user to ricroll
          window.location = "https://discord.com/users/953722111631970334";
        }} className="btn btn-outline btn-success ml-4 mr-4 contacte">Discord</p>
      </div>
    </div>
  );
}

export default contact;
