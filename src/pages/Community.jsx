import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import {regions} from "../data/whoWeServeData";

const Community = () => {
  // function truncateDescription(text) {
  //   if (text.length <= 100) return text;
  //   return text.slice(0, 100).trim() + "...";
  // }

  return (
   <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8 text-gray-800">
            COMMUNITIES WE SERVE
          </h2>
          <p className="text-xl leading-relaxed mb-12 text-gray-600">
            TWA serves multiple communities across Missouri. Click on a location
            to reach out to the local contact.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <Link
                key={index}
                to={region.contact}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:text-blue-800" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {region.name}
                </h3>
                <p className="text-gray-600">{region.description}</p>
                <ChevronRight className="w-6 h-6 text-blue-600 mx-auto mt-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section> 
  );
};

export default Community;