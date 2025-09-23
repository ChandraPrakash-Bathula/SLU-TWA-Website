import React, { useState, useEffect } from "react";
import Checker from "../assets/Checker.svg"; // placeholder image for testimonial

const testimonials = [
  {
    name: "Jane Smith",
    text: "TWA completely transformed my career and gave me confidence to re-enter the workforce.",
    img: Checker,
  },
  {
    name: "John Doe",
    text: "The mentorship and support were invaluable. I now have a stable job and a future.",
    img: Checker,
  },
  {
    name: "Maria Lopez",
    text: "I never thought I could get back on my feet. TWA made it possible!",
    img: Checker,
  },
  {
    name: "Alex Johnson",
    text: "Professional, compassionate, and life-changing guidance from the team.",
    img: Checker,
  },
  {
    name: "Sarah Williams",
    text: "The program gave me skills, connections, and hope. Forever grateful!",
    img: Checker,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Clickable sides
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      prevTestimonial();
    } else {
      nextTestimonial();
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-12 animate-slideInUp">TESTIMONIALS</h2>

        <div
          className="relative bg-white shadow-xl rounded-2xl p-12 cursor-pointer select-none"
          onClick={handleClick}
        >
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="w-28 h-28 rounded-full mb-6 mx-auto object-cover"
          />
          <p className="text-lg italic mb-6">"{testimonials[current].text}"</p>
          <h3 className="text-2xl font-semibold">{testimonials[current].name}</h3>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === current ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
