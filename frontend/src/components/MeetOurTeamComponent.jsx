import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mb-2 mx-auto transition duration-300 transform hover:scale-110"
      />
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center w-full h-full">
        <div className="flex items-center">
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-2 transition-colors duration-300 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-600">{member.position}</p>
      </div>
    </div>
  );
};

const MeetOurTeamComponent = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: one,
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: two,
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: four,
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: five,
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
      },
    },
  ];

  return (
    <div className="bg-gray-50 shadow-md">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4 mt-10 text-blue-500">
          Meet Our Team
        </h2>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeamComponent;
