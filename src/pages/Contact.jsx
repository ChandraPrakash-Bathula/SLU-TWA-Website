import React from "react";
import slu from "../assets/slu-clock-tower.jpg";
import Checker from "../assets/Checker.svg";

const locations = [
  {
    city: "St. Louis City",
    staff: [
      { name: "Meredith Raj", role: "Program Director", desc: "Leads TWA programs in St. Louis.", img: slu },
      { name: "Nikki Chilton", role: "Coordinator", desc: "Coordinates local initiatives.", img: Checker },
      { name: "RJ Smith", role: "Community Liaison", desc: "Connects with partners & stakeholders.", img: slu },
      { name: "Alex Brown", role: "Case Manager", desc: "Supports participant onboarding.", img: Checker },
    ],
  },
  {
    city: "Kansas City",
    staff: [
      { name: "Jamie Lee", role: "Program Director", desc: "Leads TWA programs in KC.", img: slu },
      { name: "Taylor White", role: "Coordinator", desc: "Coordinates local initiatives.", img: Checker },
      { name: "Morgan Davis", role: "Community Liaison", desc: "Connects with partners & stakeholders.", img: slu },
      { name: "Chris Allen", role: "Case Manager", desc: "Supports participant onboarding.", img: Checker },
    ],
  },
  {
    city: "Columbia",
    staff: [
      { name: "Patricia Green", role: "Program Director", desc: "Leads TWA programs in Columbia.", img: slu },
      { name: "Jordan King", role: "Coordinator", desc: "Coordinates local initiatives.", img: Checker },
      { name: "Sam Taylor", role: "Community Liaison", desc: "Connects with partners & stakeholders.", img: slu },
      { name: "Kelly Adams", role: "Case Manager", desc: "Supports participant onboarding.", img: Checker },
    ],
  },
  {
    city: "Springfield",
    staff: [
      { name: "Dylan Reed", role: "Program Director", desc: "Leads TWA programs in Springfield.", img: slu },
      { name: "Avery Scott", role: "Coordinator", desc: "Coordinates local initiatives.", img: Checker },
      { name: "Casey Morgan", role: "Community Liaison", desc: "Connects with partners & stakeholders.", img: slu },
      { name: "Riley Parker", role: "Case Manager", desc: "Supports participant onboarding.", img: Checker },
    ],
  },
];

const ContactPage = () => {
  return (
    <div className="font-serif" style={{ fontFamily: "'Crimson Pro', serif" }}>
      {/* Header */}
      <header className="text-center py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Team Across Missouri</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Meet the people driving TWA's mission in Missouri. Each location has a dedicated team ready to support justice-involved individuals, employers, and community partners.
        </p>
      </header>

      {/* Locations */}
      {locations.map((location, idx) => (
        <section key={idx} className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12 text-center">{location.city}</h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {location.staff.map((member, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-[30%] md:w-[30%] lg:w-[22%] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-full h-48 sm:h-44 md:h-56 mb-4 overflow-hidden rounded-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Contact Form */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Have questions or want to learn more about our programs? Reach out to us using the form below.
        </p>
        <form className="max-w-2xl mx-auto flex flex-col gap-4">
          <input 
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
