import React from "react";

function contact() {
  return (
    <div>
      <h1 className="text-white text-4xl ml-20 mt-10 mb-10  pr-text ">🐱‍💻 Contact</h1>
      <div className="flex flex-row  align-center justify-center projects  ">
        {/* <button class="btn btn-outline btn-info ml-4 ">Email</button> */}
        <a href="mailto: ayaan.panda1@gmail.com"><label for="my-modal" class="btn btn-outline btn-info mr-4 ml-4 ">
          Email
        </label></a>
        <a href="https://github.com/ayaanp-dev/"><button class="btn btn-outline btn-success mr-4 ml-4 contacte">Github</button></a>
        <a href="https://twitter.com/Ayaan_Panda"><button class="btn btn-outline btn-warning ml-4 mr-4 contacte">Twitter</button></a>
        <a href="https://dev.to/ayaanp"><button class="btn btn-outline btn-error ml-4 mr-4 contacte">dev.to </button></a>
        <p onClick={()=>{
          // used to redirect user to ricroll
          window.location = "https://discord.com/users/953722111631970334";
        }} className="btn btn-outline btn-success ml-4 mr-4 contacte">Discord</p>
      </div>
    </div>
  );
}

export default contact;
