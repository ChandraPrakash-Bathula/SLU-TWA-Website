import React from "react";
import slu from "../assets/slu-clock-tower.jpg";
import partnerImg from "../assets/partner.png";
import job_fair from "../assets/job_fair.png";
import { useNavigate } from "react-router-dom";

const PartnerCardData = [
  {
    id: "001",
    image: slu,
    title: "Who We Are",
    content: "Connect with our services throughout USA",
    route: "/who-we-are",
  },
  {
    id: "002",
    image: partnerImg,
    title: "Who We Serve",
    content: "Find out how to connect, partner or volunteer with TWA.",
    route: "/who-we-serve",
  },
  {
    id: "003",
    image: job_fair,
    title: "How to Support",
    content: "Job Seekers can find programs that can help them.",
    route: "/how-to-support",
  },
];

export default function PartnerCard() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-[32px] font-bold text-center my-5 relative inline-block">
        Get connected with the TWA
        <span className="absolute bottom-0 translate-y-3 left-1/2 w-1/3 border-b-[4px] border-[#003DA5] transform -translate-x-1/2"></span>
      </h2>

      <section className="flex flex-wrap justify-center items-center gap-4 my-10">
        {PartnerCardData.map((partner) => (
          <div
            key={partner.id}
            onClick={() => navigate(partner.route)}
            className="hover:bg-[#002563] hover:text-white relative group h-[400px] w-[350px] bg-white flex flex-col rounded-sm shadow-xl border-b-3 border-[#9A7951] cursor-pointer"
          >
            <div className="relative mb-4 overflow-hidden">
              <img
                src={partner.image}
                alt={partner.title}
                className="h-[239px] w-full object-cover mb-4 group-hover:opacity-70"
              />
              {/* Overlay with arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <span className="text-white text-lg">
                  Read More &rarr;
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-[24px] mb-2">{partner.title}</h3>
              <p className="text-[#2b2b2b] text-[12px] group-hover:text-white">
                {partner.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
