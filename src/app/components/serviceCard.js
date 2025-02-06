import Image from "next/image";
import React from "react";

function ServiceCard({ itemData }) {
  return (
    <a href={itemData.link || "#"} className="block">
      <div className=" bg-[#f4e4c9]  border-[#a58255] border rounded-none   !gap-1 p-2">
        <div className="h-[100px] flex justify-center items-center">
          <Image
            src={itemData.img}
            alt={itemData.title}
            width={80} // Adjust width as needed
            height={80} // Adjust height as needed
            className="object-contain"
          />
        </div>
        <h6 className="text-base font-medium text-gray-700 dark:text-gray-400 text-center m-0">
          {itemData.title}
        </h6>
      </div>
    </a>
  );
}

export default ServiceCard;
