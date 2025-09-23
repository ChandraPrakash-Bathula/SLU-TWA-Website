import React from "react";
import twa from "../assets/TWA.png";
import Checker from "../assets/Checker.svg";
import PartnerCard from "../pages/PartnerCard";   // ✅ use component

export default function Home() {
  return (
    <main className="font-['Crimson_Pro']">
      <img src={twa} alt="background-image" />

      <section className="grid py-8 px-0 place-items-center">
        <h1 className="text-[2rem] font-bold text-[#003DA5] my-4 text-center">
          Connecting Justice-Involved Jobseekers and Second Chance Employers
        </h1>

        <p className="text-md text-left my-4 font-bold text-center w-[90%]">
         TWA connects justice-involved individuals with fair-chance employers.
          Also referred to as second-chance employers, these are businesses and
          organizations that are willing to look past the person’s record to the
          talent the jobseeker has to offer. Some fair chance employers can hire
          people with any criminal background while others must be more
          selective based on a variety of factors. While TWA is housed at Saint
          Louis University, the program’s footprint now expands beyond the St.
          Louis Area to also incorporate collocated services offered pre-release
          at five institutions as well as to individuals going home to the
          metropolitan areas of Kansas City, Springfield, and Columbia.
        </p>

        <h3 className="text-[1.5rem] py-4 font-bold text-center w-[90%]">
          “Expanding fair chance employment is one of the most effective ways
          to boost economic mobility for justice-involved individuals and build
          safer, more prosperous communities.”
        </h3>
      </section>

      <section>
        <div
          className="flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Checker})` }}
        >
          <PartnerCard />  {/* ✅ Component */}
        </div>
      </section>
    </main>
  );
}
