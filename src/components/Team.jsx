import React, { useEffect } from "react";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import t4 from "../assets/images/t4.png";

const teamMembers = [
  {
    name: "Magizh V",
    role: "Founder & CEO",
    image: t1,
    bio: "Visionary leader driving innovation and excellence at SupplyHive.",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    image: t2,
    bio: "Expert in full-stack development and AI-driven solutions.",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Karan Patel",
    role: "Head of Marketing",
    image: t3,
    bio: "Building SupplyHive’s brand and customer connections globally.",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Ananya Rao",
    role: "Customer Success Manager",
    image: t4,
    bio: "Dedicated to ensuring the best customer experience.",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },
];

const Teams = () => {
  useEffect(() => {
    document.title = "Our Team | SupplyHive";
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h1>
      <p className="text-lg text-center mb-12">
        At SupplyHive, our team of passionate professionals is dedicated to
        delivering innovation, quality, and customer satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mb-4 object-cover shadow-md"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            <div className="flex gap-4 mt-4">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
