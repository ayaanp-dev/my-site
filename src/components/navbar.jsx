import React from "react";

function navbar() {
  return (
    <div class="navbar bg-black  ">
      <div class="navbar-start ">
      <a href="https://twitter.com/Ayaan_Panda"><img src="https://i.ibb.co/FY3H3XP/ayaan-modified.png" className="w-14 pt-2 pl-2" alt="ayaan-modified" border="0"/></a>
     
      </div>
      <div class="navbar-center hidden lg:flex">
         
      <ul class="menu menu-horizontal p-0">
          <li>
            <a href className="text-error text-2xl">About</a>
          </li>
          <li tabindex="0">
            <a href className="text-warning text-2xl">
             Skills
            </a>
          </li>
          <li>
            <a href className="text-success text-2xl">Projects</a>
          </li>
          <li>
            <a href className="text-info text-2xl">Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
      <a href="https://github.com/ayaanp-dev"><img src="https://i.ibb.co/3rNzZgt/Git-Hub-Mark-Light-32px.png" alt="Git-Hub-Mark-Light-32px" border="0"/></a>
      </div>
    </div>
  );
}

export default navbar;
/*<a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */