import React from "react";
import Image from "next/image";
export function SmallCard({ image, location, distance }) {
  return (
    <div className="flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-16 w-16 rounded-lg">
        <Image src={image} layout="fill" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
