
import React from "react";
import { Calendar, Users, TrendingUp, Award, MapPin, Building } from "lucide-react";

const teamMembers = [
  {
    name: "Meredith RJ",
    role: "Program Director",
    email: "meredith.rj@slu.edu",
    phone: "314-555-1234",
  },
  {
    name: "Nikki Chilton",
    role: "Coordinator",
    email: "nikki.chilton@slu.edu",
    phone: "314-555-5678",
  },
  {
    name: "John Doe",
    role: "Employment Specialist",
    email: "john.doe@slu.edu",
    phone: "314-555-9101",
  },
  {
    name: "Jane Smith",
    role: "Community Outreach",
    email: "jane.smith@slu.edu",
    phone: "314-555-1122",
  },
];

const timelineEvents = [
  {
    year: "2018",
    title: "Foundation",
    description: "TWA began its efforts in St. Louis in April 2018 by partnering with the U.S. Attorney's Office and federal and state probation and parole offices to sponsor the inaugural Second Chance Job Fair at Chaifetz Arena."
  },
  {
    year: "2019",
    title: "Growth",
    description: "The St. Louis Second Chance Job Fair drew 1,000 attendees, including 77 employers committed to looking at candidates holistically. TWA expanded to provide year-round job search assistance."
  },
  {
    year: "2020",
    title: "Innovation",
    description: "TWA quickly pivoted to an innovative virtual format when the April job fair was impacted by pandemic restrictions, incorporating video resumes and volunteer job coaches."
  },
  {
    year: "2021",
    title: "Expansion",
    description: "In addition to two job fairs and year-round services, TWA began a pilot program serving individuals inside the St. Louis County Justice Center pre-release and developed employer training programs."
  },
  {
    year: "2022",
    title: "Funding",
    description: "TWA received generous funding from the Lutheran Foundation, the Pershing Charitable Trust, and other foundations to increase capacity and hire additional staff."
  },
  {
    year: "2023",
    title: "Institutional Partnerships",
    description: "TWA began working with five Missouri Department of Corrections institutions, preparing participants through pre-release services and connecting them with employment opportunities."
  },
  {
    year: "2024",
    title: "Statewide Impact",
    description: "TWA was awarded funding for statewide expansion by MO DOC, with employment specialists working in St. Louis, Kansas City, Columbia, and Springfield."
  }
];

const institutions = [
  "Farmington Correctional Center (FCC)",
  "Missouri Eastern Correctional Center in Pacific (MECC)",
  "Northeast Correctional Center in Bowling Green (NECC)",
  "Transition Center of St. Louis (TCSTL)",
  "Women's Eastern Reception, Diagnostic and Correctional Center in Vandalia (WERDCC)"
];

const impactStats = [
  { number: "1,000+", label: "Job Fair Attendees", description: "Connected with employment opportunities" },
  { number: "77+", label: "Fair Chance Employers", description: "Committed to holistic hiring practices" },
  { number: "5", label: "MO DOC Institutions", description: "Providing pre-release services" },
  { number: "4", label: "Cities Served", description: "St. Louis, Kansas City, Columbia, Springfield" }
];

const testimonials = [
  {
    quote: "TWA gave me hope when I thought I had none. They didn't just help me find a job - they helped me rebuild my life.",
    name: "Former Participant",
    role: "Now Employed in Construction"
  },
  {
    quote: "The support I received from TWA made all the difference. They saw my potential, not just my past.",
    name: "Program Graduate",
    role: "Currently in Manufacturing"
  },
  {
    quote: "Working with TWA opened doors I never thought would be available to me. I'm grateful for their belief in second chances.",
    name: "TWA Alumni",
    role: "Retail Management"
  }
];

const WhoWeAre = () => {
  return (
    <div className="font-serif min-h-screen" style={{ fontFamily: "'Crimson Pro', serif" }}>
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold mb-8 tracking-wide">WHO WE ARE</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed px-6">
            SLU TWA serves as a practical extension of Saint Louis University's Jesuit mission, embodying a faith that does justice by directly addressing systemic inequalities and empowering individuals through education and employment. The SLU Transformative Workforce Academy (TWA) promotes human dignity, social equity, and inclusion.
          </p>
        </div>
      </header>

      {/* Navigation Cards */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-600">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">MISSION</h3>
              <p className="text-gray-600">Empowering justice-involved individuals through comprehensive support and meaningful employment opportunities.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-600">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">IMPACT</h3>
              <p className="text-gray-600">Measurable results in employment placement, retention, and community transformation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-600">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">TEAM</h3>
              <p className="text-gray-600">Dedicated professionals passionate about creating pathways to success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">MISSION</h2>
          <div className="bg-blue-50 rounded-2xl p-12 mb-16">
            <p className="text-xl leading-relaxed text-center text-gray-700 mb-8">
              The Transformative Workforce Academy is part of a Saint Louis University interdepartmental collaboration designed to support and integrate those in Missouri most at risk of and impacted by incarceration so we can all live fruitful, prison-free lives.
            </p>
            <p className="text-lg leading-relaxed text-center text-gray-600">
              TWA's focus is helping those who are justice-involved, especially those recently coming out of prison, find and retain meaningful employment.
            </p>
          </div>

          {/* History Timeline */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">HISTORY</h3>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl font-bold flex-shrink-0">
                    {event.year}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MO DOC Institutions */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-16">
            <h4 className="text-3xl font-bold mb-8 text-center">Missouri Department of Corrections Institutions</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((institution, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    <span className="text-sm font-medium">{institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">VISION</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
              <p className="text-xl leading-relaxed text-center text-gray-700">
                SLU's initiatives engage the whole lifespan, including prevention, in-prison, and reentry services. Through research, information-sharing, and direct services in areas such as education, legal defense, life skills training, and employment placement, SLU seeks to address the root causes of crime by providing support and resources to those who all too often see no alternative.
              </p>
              <p className="text-lg leading-relaxed text-center text-gray-600 mt-6">
                As part of that effort, TWA's focus is preparing and connecting justice-involved jobseekers with vetted fair chance employers to find and retain meaningful employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-8 text-center text-gray-800">IMPACT</h2>
          
          {/* Statistics */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">STATISTICS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-3">{stat.number}</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</h4>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">TESTIMONIALS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">TEAM</h2>
          <p className="mb-16 text-center text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
            Our team is composed of dedicated professionals passionate about empowering justice-involved
            individuals and fostering equitable employment opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Email:</strong> {member.email}</p>
                  <p><strong>Phone:</strong> {member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">CONTACT US</h2>
          <p className="mb-16 text-xl leading-relaxed">
            Get in touch with our team for questions, collaborations, or ways to support our mission.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                <div className="space-y-2 text-left">
                  <p><strong>Role:</strong> {member.role}</p>
                  <p><strong>Email:</strong> {member.email}</p>
                  <p><strong>Phone:</strong> {member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;