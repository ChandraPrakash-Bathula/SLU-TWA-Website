import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Building2, HandHeart, MapPin, Phone, Mail, Video, Award, DollarSign, Shield, Clock, Target, ChevronRight } from "lucide-react";

const WhoWeServe = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Toggle off if clicking the same section
    } else {
      setActiveSection(section); // Switch to new section
    }
  };

  const regions = [
    { name: "Saint Louis", description: "Focused programs with partnerships and mentorship opportunities", contact: "/contact#stlouis" },
    { name: "Kansas City", description: "Programs tailored for participants and local employers", contact: "/contact#kansascity" },
    { name: "Springfield", description: "Partnerships to assist justice-involved individuals", contact: "/contact#springfield" },
    { name: "Columbia", description: "Collaborations to expand reach and support", contact: "/contact#columbia" }
  ];

  const jobseekerServices = [
    "Discussing values and career path",
    "Creating a traditional and virtual resume", 
    "Reviewing interview skills",
    "Navigating technology in applications and onboarding",
    "Connecting with supportive services"
  ];

  const fairChancebenefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access to a Broader Talent Pool",
      description: "Many fair chance hires are eager to prove themselves and demonstrate strong commitment, loyalty, and work ethic."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Tax Incentives",
      description: "Employers may qualify for the Work Opportunity Tax Credit (WOTC) — up to $2,400 (or more) per qualified employee."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Federal Bonding Program",
      description: "Free fidelity bonds protect against potential losses and offer peace of mind during onboarding."
    }
  ];

  return (
    <div className="font-serif min-h-screen" style={{ fontFamily: "'Crimson Pro', serif" }}>
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold mb-8 tracking-wide">WHO WE SERVE</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed px-6">
            We serve the community through building relationships and supporting justice-involved jobseekers — both STL community jobseekers and MO DOC Pre-Release participants, new or aspiring fair chance employers, existing fair chance employers and community referral partners.
          </p>
        </div>
      </header>

      {/* Main Navigation Cards */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <button 
              onClick={() => handleSectionClick('jobseekers')}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${
                activeSection === 'jobseekers' 
                  ? 'border-green-600 bg-green-50 transform -translate-y-2' 
                  : 'border-green-600'
              } text-left group`}
            >
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                activeSection === 'jobseekers' ? 'text-green-600' : 'group-hover:text-green-600'
              }`}>JOBSEEKERS</h3>
              <p className="text-gray-600 mb-4">Are you a justice-involved individual currently job seeking?</p>
              <ChevronRight className={`w-6 h-6 text-green-600 transition-transform ${
                activeSection === 'jobseekers' 
                  ? 'rotate-90 translate-x-2' 
                  : 'group-hover:translate-x-2'
              }`} />
            </button>
            
            <button 
              onClick={() => handleSectionClick('employers')}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${
                activeSection === 'employers' 
                  ? 'border-blue-600 bg-blue-50 transform -translate-y-2' 
                  : 'border-blue-600'
              } text-left group`}
            >
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                activeSection === 'employers' ? 'text-blue-600' : 'group-hover:text-blue-600'
              }`}>EMPLOYERS</h3>
              <p className="text-gray-600 mb-4">Are you a new/aspiring or existing Fair Chance Employer?</p>
              <ChevronRight className={`w-6 h-6 text-blue-600 transition-transform ${
                activeSection === 'employers' 
                  ? 'rotate-90 translate-x-2' 
                  : 'group-hover:translate-x-2'
              }`} />
            </button>
            
            <button 
              onClick={() => handleSectionClick('partners')}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${
                activeSection === 'partners' 
                  ? 'border-purple-600 bg-purple-50 transform -translate-y-2' 
                  : 'border-purple-600'
              } text-left group`}
            >
              <HandHeart className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                activeSection === 'partners' ? 'text-purple-600' : 'group-hover:text-purple-600'
              }`}>PARTNERS</h3>
              <p className="text-gray-600 mb-4">Are you a Fair Chance Community Partner?</p>
              <ChevronRight className={`w-6 h-6 text-purple-600 transition-transform ${
                activeSection === 'partners' 
                  ? 'rotate-90 translate-x-2' 
                  : 'group-hover:translate-x-2'
              }`} />
            </button>
          </div>
        </div>
      </section>

      {/* Jobseekers Section */}
      {activeSection === 'jobseekers' && (
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">JOBSEEKERS</h2>
            
            {/* Jobseeker Types */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* STL Community Jobseeker */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 shadow-lg">
                <h3 className="text-4xl font-bold mb-6 text-green-700">STL Community Jobseeker</h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  We are pleased to announce that in St. Louis, thanks to a generous grant from the St. Louis County Port Authority and funding from the Bob Barker Foundation, we work with justice-involved people who self-refer or find us through our community partners to prepare and connect them with fair chance employers.
                </p>
                
                <div className="bg-white rounded-xl p-8 mb-6">
                  <h4 className="text-2xl font-bold mb-6 text-gray-800">How it works</h4>
                  <p className="mb-4 text-gray-700">Jobseeker services can include:</p>
                  <ul className="space-y-3 mb-6">
                    {jobseekerServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 font-medium">
                    TWA staff then connect jobseekers with employer partners based on the best fit for both sides!
                  </p>
                </div>

                <div className="bg-green-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-6 h-6 text-green-700" />
                    <span className="font-bold text-green-700">Get Started</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Individuals may enter their information on the wait list or call and leave a message at <strong>314-977-5498</strong> to be added to the wait list.
                  </p>
                  <p className="text-sm text-gray-600">
                    We review new referrals every Monday to give them a projected timeline of when we are available to assist if we cannot work with someone immediately.
                  </p>
                </div>
              </div>

              {/* MO DOC Pre-Release */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-lg">
                <h3 className="text-4xl font-bold mb-6 text-blue-700">MO DOC Pre-Release Participant</h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  By engaging justice-involved jobseekers earlier, we can better prepare them for employment and reduce the stress of post-release job searching. Our video resume model allows participants to showcase their skills and readiness to employers before they leave incarceration.
                </p>
                
                <div className="bg-blue-100 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-blue-800">Partnership Facilities</h4>
                  <p className="text-gray-700 mb-4">In partnership with MO DOC, SLU TWA works with jobseekers in five correctional facilities:</p>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {[
                      "Bowling Green (NECC)",
                      "Farmington (FCC)", 
                      "Pacific (MECC)",
                      "Vandalia (WERDCC)",
                      "Transition Center of St. Louis (TCSTL)"
                    ].map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h4 className="text-2xl font-bold mb-4 text-gray-800">How we work together</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Pre-Release (90-120 days before release)</p>
                        <p className="text-gray-600">Evidence-based curriculum teaching successful reentry practices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Post-Release</p>
                        <p className="text-gray-600">Continued services and job placement support for up to one year</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-blue-800">Find your region</h4>
                  <p className="text-gray-700 mb-4">
                    If you are a participant in the program and ready to begin post-release work, please contact the SLU TWA contact in your region:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {regions.map((region, index) => (
                      <Link key={index} to={region.contact} className="text-blue-700 hover:text-blue-900 font-medium hover:underline">
                        {region.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Employers Section */}
      {activeSection === 'employers' && (
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-12 text-center text-gray-800">EMPLOYERS</h2>
            
            <div className="bg-white rounded-2xl p-12 mb-16 shadow-lg">
              <h3 className="text-4xl font-bold mb-8 text-center text-gray-800">What does it mean to be a fair chance employer?</h3>
              <p className="text-xl leading-relaxed text-center text-gray-700 max-w-4xl mx-auto">
                At SLU TWA we believe in the power of second chances. We recognize that individuals with criminal records often face significant barriers to employment — even after they've paid their debt to society and are ready to move forward. Being a Fair Chance Employer means considering candidates based on their qualifications, experience, and potential — not solely on their past.
              </p>
            </div>

            {/* New/Aspiring vs Existing Employer Tabs */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* New/Aspiring Employer */}
              <div className="bg-white rounded-2xl p-10 shadow-lg">
                <h3 className="text-4xl font-bold mb-6 text-blue-700">New or Aspiring Employer</h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Imagine unlocking a hidden talent pool filled by individuals who are ready to work and eager to prove themselves. Fair chance employment gives that opportunity—by focusing on qualifications, not past mistakes. It's a forward-thinking approach that helps business grow, strengthens community, and enhances a business's reputation as an inclusive, socially responsible employer.
                </p>

                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-blue-800">Why Fair Chance Hiring Matters</h4>
                  <p className="text-gray-700 mb-4">
                    Every year, thousands of capable individuals are overlooked because of a past conviction. Yet many of these individuals are highly motivated, skilled, and eager to contribute.
                  </p>
                  <div className="bg-blue-600 text-white rounded-lg p-4 text-center font-bold text-lg">
                    Fair chance hiring is more than a gesture of goodwill — it's a smart, strategic investment in people.
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <h4 className="text-2xl font-bold text-gray-800">Benefits to Employers</h4>
                  {fairChancebenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                      <div className="text-blue-600">{benefit.icon}</div>
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">{benefit.title}</h5>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-8 h-8" />
                    <h4 className="text-2xl font-bold">Access to Our Custom Video Resume Platform</h4>
                  </div>
                  <p className="mb-4 text-blue-100">
                    SLU TWA's innovative custom video platform is built exclusively for fair chance employers looking to grow their talent pool with purpose and ease.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="font-bold text-lg">It's a game-changing tool that saves time, and strengthens teams with individuals committed to a fresh start.</p>
                  </div>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                    Access Video Platform
                  </button>
                </div>
              </div>

              {/* Existing Employer */}
              <div className="bg-white rounded-2xl p-10 shadow-lg">
                <h3 className="text-4xl font-bold mb-6 text-green-700">Existing Employer</h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  By continuing to offer second chances, our employers are not just transforming lives—they're building a stronger, more resilient workforce and setting a powerful example of leadership and equity. The impact proves that talent and potential aren't defined by past mistakes.
                </p>

                <div className="bg-green-50 rounded-xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-green-800">Fair Employer Training and Consultation</h4>
                  <p className="text-gray-700">
                    TWA offers individual consultations as well as group trainings on the how's and why's of fair chance employment in each service area in Missouri. Once employers discuss their talent needs with TWA, they can become an employer partner.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-8 h-8" />
                    <h4 className="text-2xl font-bold">Access to Our Custom Video Resume Platform</h4>
                  </div>
                  <p className="mb-4 text-green-100">
                    SLU TWA's innovative custom video platform is built exclusively for fair chance employers looking to grow their talent pool with purpose and ease.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <p className="font-bold text-lg">It's a game-changing tool that saves time, and strengthens teams with individuals committed to a fresh start.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-2">What are the benefits?</h5>
                      <p className="text-sm text-green-100">Organized by industry and region, quick access to 2-3 minute videos highlighting personality, motivation, and readiness.</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-2">How will I use this platform?</h5>
                      <p className="text-sm text-green-100">Create custom profiles to filter candidates based on industry, qualifications, and job requirements.</p>
                    </div>
                  </div>
                  
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                    Access Video Platform
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners Section */}
      {activeSection === 'partners' && (
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-12 text-gray-800">COMMUNITY REFERRAL PARTNERS</h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-12 shadow-lg">
              <HandHeart className="w-16 h-16 text-purple-600 mx-auto mb-8" />
              <h3 className="text-4xl font-bold mb-8 text-purple-700">Partner with Us</h3>
              
              <div className="bg-white rounded-xl p-8 mb-8 shadow-md">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="font-bold text-purple-700 text-xl">How to Refer</span>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Individuals may enter their information on the wait list or call and leave a message at:
                </p>
                <div className="bg-purple-100 rounded-lg p-4 mb-4">
                  <p className="text-2xl font-bold text-purple-800">314-977-5498</p>
                </div>
                <p className="text-gray-600">
                  We review new referrals every Monday to give them a projected timeline of when we are available to assist if we cannot work with someone immediately.
                </p>
              </div>

              <Link 
                to="/contact#stlouis"
                className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors text-lg"
              >
                <Mail className="w-6 h-6" />
                Contact Our STL Team
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Communities We Serve - Always Visible */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8 text-gray-800">COMMUNITIES WE SERVE</h2>
          <p className="text-xl leading-relaxed mb-12 text-gray-600">
            TWA serves multiple communities across Missouri. Click on a location to reach out to the local contact.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <Link 
                key={index}
                to={region.contact}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:text-blue-800" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{region.name}</h3>
                <p className="text-gray-600">{region.description}</p>
                <ChevronRight className="w-6 h-6 text-blue-600 mx-auto mt-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;