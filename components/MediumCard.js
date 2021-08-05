import React from "react";
import Image from "next/image";
export function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 duration-300 ease-out">
      <div className="relative h-80 w-80 rounded-xl">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
