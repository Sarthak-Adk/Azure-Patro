import React from "react";

export default function MantraCard({ image, heading, subheading, title, views, duration }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
      <div className="relative">
        <img src={image}
        alt={heading}
        className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/60 to-transparent"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h2 className="text-lg font-semibold">{subheading}</h2>
          <h1 className="text-3xl font-bold tracking-wide">{heading}</h1>
        </div>
      </div>

      <div className="px-4 py-3 text-gray-800">
        <p className="font-medium text-[15px]">{title}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
          <span>{views} views</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
