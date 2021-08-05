import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
function Header() {
  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent text-sm outline-none placeholder-gray-400 text-gray-600"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 text-white h-8 rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export { Header };
