import React from "react";
import award1 from "../assets/award.jpg";
import award2 from "../assets/award2.jpg";
import { FaMedal } from "react-icons/fa";

const AwardsComponent = () => {
  const awards = [
    {
      id: 1,
      title: "Best Employee of the Year",
      reason: "Outstanding performance and dedication",
      imageUrl: award1,
    },
    {
      id: 2,
      title: "Innovation Award",
      reason: "Innovative contributions to the company",
      imageUrl: award2,
    },
    {
      id: 3,
      title: "Team Player Award",
      reason: "Exceptional teamwork and collaboration",
      imageUrl: award1,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start items-start space-x-4 w-full py-3 px-4 shadow-gray-400 shadow-sm lg:mt-5">
        <span className="flex items-center justify-center space-x-2 lg:px-8">
          <FaMedal className="text-2xl md:text-3xl text-yellow-500" />
          <h2 className="text-3xl font-bold">Awards</h2>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {awards.map((award) => (
          <div key={award.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={award.imageUrl}
              alt={award.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {award.title}
            </h3>
            <p className="text-gray-600">{award.reason}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AwardsComponent;
