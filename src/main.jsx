import { createRoot } from "react-dom/client";
import React from 'react';
import './index.css'; // Add this import for Tailwind

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById("root")).render(
    <div>
      <div className="bg-cyan-800 p-4 flex justify-center align-middle border-solid border-8 border-orange-600 md:px-8 lg:px-12">
      <ul className="flex gap-10 md:gap-20 lg:gap-30">
        <li>
          <a href="#" className="text-white hover:text-orange-600">Home</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-orange-600">Payam.Malvandi</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-orange-600">contact-me</a>
        </li>
      </ul>
      </div>
      <div className="flex justify-center align-middle gap-10 md:gap-20 lg:gap-30 pt-10">
        <div className="w-96 md:w-128 lg:w-160 bg-gray-500 rounded-lg">
            <img className="border-8 border-gray-500 rounded-lg" src="/anime-girl-tattoo-katana-hd-wallpaper-uhdpaper.com-738@3@a.jpg" alt="" />
            <p className="bg-cyan-800 rounded-lg text-orange-500 cursor-pointer">A girl with broaken heart who always wanted to become a hero in her sad life.</p>
        </div>
        <div className="w-96 md:w-128 lg:w-160 bg-gray-500 rounded-lg">
        <img className="border-8 border-gray-500 rounded-lg" src="/demon-anime-girl-cyberpunk-warrior-8k-wallpaper-uhdpaper.com-128@2@a.jpg" alt="" />
        <p className="bg-cyan-800 rounded-lg text-orange-500 cursor-pointer">A fallen ninja who her wishes were burned in fire with her mother home.</p>
        </div>
      </div>
      <div className="flex justify-center align-middle pt-10 cursor-pointer">
        <div className="border-orange-600 border-8">
          <p className="text-center text-orange-600 font-medium bg-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem, ducimus explicabo quia molestias ipsam voluptas voluptatibus aliquam asperiores rem fugiat molestiae vitae atque distinctio temporibus expedita aperiam. Consequatur sed a possimus deserunt dolore fugiat veniam doloribus officia soluta blanditiis ratione laudantium, alias at nulla incidunt asperiores quasi corporis velit quisquam non culpa adipisci doloremque, libero harum! Recusandae praesentium ullam voluptates quos porro accusamus debitis, commodi ipsum tenetur error ipsa repellat odit reiciendis nemo itaque ab aspernatur quae placeat minima. Earum asperiores magnam possimus saepe, aperiam molestiae fugit, vel adipisci illum vero nihil quasi dolore, consectetur tempore placeat cum amet?</p>
        </div>
      </div>
      <div className="flex justify-center align-middle pt-10 pb-10 gap-16 md:gap-24 lg:gap-32">
        <div className="bg-black text-white flex flex-col w-96 md:w-128 lg:w-160 text-center rounded-lg">
          <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
        </div>
        <div className="bg-black text-white flex flex-col w-96 md:w-128 lg:w-160 text-center rounded-lg">
        <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
          <a href="#">#</a>
        </div>
      </div>
    </div>
  );
});