import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ExternalLink,
  Mail,
  ArrowRight,
  MapPin,
  Share2,
  BookOpen,
  Megaphone,
  X,
} from "lucide-react";
import job_fair from "../assets/job_fair.png";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("news");

  const newsItems = [
    {
      id: 1,
      title:
        "TWA Awarded Major Contract Expansion with Missouri Department of Corrections",
      excerpt:
        "SLU's Transformative Workforce Academy was recently awarded a contract with Missouri's Department of Corrections which will position the program to significantly expand services to justice-involved jobseekers.",
      date: "December 15, 2022",
      category: "Program Expansion",
      image: job_fair,
      author: "TWA Communications Team",
      readTime: "3 min read",
      featured: true,
    },
    {
      id: 2,
      title:
        "SLU Partners with Workforce Edge to Expand Educational Opportunities",
      excerpt:
        "Saint Louis University and Workforce Edge announce a partnership to provide access to online bachelor's, master's, and certificate programs through SLU's School for Professional Studies.",
      date: "February 8, 2024",
      category: "Partnership",
      image: job_fair,
      author: "SLU News Team",
      readTime: "2 min read",
      featured: false,
    },
    {
      id: 3,
      title: "TWA Presents at Show Me Reentry Conference 2023",
      excerpt:
        "Honored to be presenting at Show Me Reentry Conference on day one today! Great start to our 3-day conference focused on reentry services and second-chance employment.",
      date: "November 2, 2023",
      category: "Conference",
      image: job_fair,
      author: "TWA Team",
      readTime: "2 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Workforce Center Delivers Premier Technology Training Solutions",
      excerpt:
        "The world moves fast. Professionals today must keep their skills sharp as technological upgrades require evolving skills. SLU's Workforce Center provides premier training solutions.",
      date: "March 15, 2023",
      category: "Training",
      image: job_fair,
      author: "Workforce Center Team",
      readTime: "4 min read",
      featured: false,
    },
  ];

  const newsletters = [
    {
      id: 1,
      title: "TWA Monthly Impact Report - September 2024",
      description:
        "Our latest statistics on job placements, employer partnerships, and success stories from justice-involved individuals who found meaningful employment.",
      date: "September 30, 2024",
      type: "Monthly Report",
      downloadLink: "#",
    },
    {
      id: 2,
      title: "Fair Chance Employer Spotlight Newsletter",
      description:
        "Highlighting businesses that are making a difference by providing second-chance employment opportunities and the impact on their organizations.",
      date: "August 15, 2024",
      type: "Employer Focus",
      downloadLink: "#",
    },
    {
      id: 3,
      title: "TWA Success Stories Quarterly",
      description:
        "Inspiring stories from TWA participants who have successfully transitioned into sustainable employment and are rebuilding their lives.",
      date: "June 30, 2024",
      type: "Success Stories",
      downloadLink: "#",
    },
    {
      id: 4,
      title: "Policy & Research Update",
      description:
        "Latest research findings on second-chance employment, policy developments, and TWA's contributions to reducing recidivism through workforce development.",
      date: "May 20, 2024",
      type: "Research",
      downloadLink: "#",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "TWA Job Fair - Fall 2024",
      date: "November 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Saint Louis University - Busch Student Center",
      description:
        "Semi-annual job fair connecting justice-involved jobseekers with fair-chance employers. Includes video pitch preparation and one-on-one employer meetings.",
      category: "Job Fair",
      registrationLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Employer Partnership Workshop",
      date: "November 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      description:
        "Learn about becoming a fair-chance employer, understanding the benefits, and how TWA can support your hiring process.",
      category: "Workshop",
      registrationLink: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Volunteer Orientation & Training",
      date: "December 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "SLU Campus - Room TBD",
      description:
        "Join our volunteer program! Learn how to support justice-involved individuals with resume preparation, interview skills, and career coaching.",
      category: "Volunteer",
      registrationLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "TWA Annual Impact Celebration",
      date: "December 12, 2024",
      time: "6:30 PM - 9:00 PM",
      location: "Saint Louis University - Alumni Hall",
      description:
        "Celebrate another successful year of TWA partnerships, success stories, and community impact. Network with employers, participants, and supporters.",
      category: "Celebration",
      registrationLink: "#",
      featured: false,
    },
    {
      id: 5,
      title: "New Year Job Readiness Bootcamp",
      date: "January 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "SLU Workforce Center",
      description:
        "Intensive one-day program covering resume writing, interview techniques, professional communication, and job search strategies.",
      category: "Training",
      registrationLink: "#",
      featured: true,
    },
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@slu_twa",
      url: "#",
      icon: Share2, // Using Share2 as replacement for deprecated Instagram
      description: "Behind-the-scenes content and visual storytelling",
      followers: "280+",
      color: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]", // Instagram gradient
    },
    {
      platform: "LinkedIn",
      handle: "@slutwa",
      url: "https://www.linkedin.com/company/twaslu",
      icon: Share2, // Using Share2 as replacement for deprecated Linkedin
      description:
        "Professional updates, success stories, and industry insights",
      followers: "500+",
      color: "bg-[#0A66C2]", // LinkedIn brand blue
    },
    {
      platform: "Facebook",
      handle: "@SLUWorkforceCenter",
      url: "https://www.facebook.com/saintlouisuniversityworkforcecenter/",
      icon: Share2, // Using Share2 as replacement for deprecated Facebook
      description:
        "Community events, training opportunities, and program updates",
      followers: "1.2K+",
      color: "bg-[#1877F2]", // Facebook brand blue
    },
    {
      platform: "X",
      handle: "@SLU_TWA",
      url: "#",
      icon: X,
      description: "Latest news, quick updates, and reentry advocacy",
      followers: "350+",
      color: "bg-black", // X uses black
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Crimson Pro, serif" }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003da5] to-[#002a7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              Stay connected with the latest developments, success stories, and
              upcoming events from Saint Louis University's Transformative
              Workforce Academy
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { key: "news", label: "Latest News", icon: Megaphone },
              {
                key: "newsletters",
                label: "Newsletters & Blogs",
                icon: BookOpen,
              },
              { key: "events", label: "Upcoming Events", icon: Calendar },
              { key: "social", label: "Social Media", icon: Share2 },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-4 text-lg font-semibold border-b-2 transition-colors ${
                  activeTab === key
                    ? "border-[#003da5] text-[#003da5]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* News Section */}
        {activeTab === "news" && (
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed about TWA's impact, partnerships, and program
                developments
              </p>
            </div>

            {/* Featured Article */}
            {newsItems
              .filter((item) => item.featured)
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex items-center mb-4">
                        <span className="bg-[#003da5] text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          Featured
                        </span>
                        <span className="text-sm text-gray-500">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="mr-4">{article.readTime}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <button className="flex items-center text-[#003da5] font-semibold hover:text-blue-700 transition-colors">
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems
                .filter((item) => !item.featured)
                .map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Newsletters Section */}
        {activeTab === "newsletters" && (
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Newsletters & Blog Posts
              </h2>
              <p className="text-xl text-gray-600">
                Access our regular publications featuring insights, research,
                and impact stories
              </p>
            </div>

            <div className="grid gap-8">
              {newsletters.map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <BookOpen className="w-5 h-5 text-[#003da5] mr-2" />
                        <span className="bg-[#f0f5ff] text-[#003da5] px-3 py-1 rounded-full text-sm font-medium">
                          {newsletter.type}
                        </span>
                        <span className="text-sm text-gray-500 ml-4">
                          {newsletter.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {newsletter.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {newsletter.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-[#003da5] font-semibold hover:text-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Article
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-[#003da5] to-[#002a7a] text-white rounded-2xl p-8 mt-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
                <p className="text-xl mb-8 opacity-90">
                  Subscribe to our newsletter for the latest updates, success
                  stories, and opportunities to get involved with TWA
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Join us at upcoming job fairs, workshops, and community events
              </p>
            </div>

            {/* Featured Events */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-br from-[#003da5] to-[#002a7a] text-white rounded-2xl p-8"
                  >
                    <div className="flex items-center mb-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        Featured Event
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 opacity-80" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 opacity-80" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 opacity-80" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="bg-white text-[#003da5] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Register Now
                    </button>
                  </div>
                ))}
            </div>

            {/* Regular Events */}
            <div className="grid gap-6">
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                            {event.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">{event.date}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center mb-3">
                          <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-600">
                            {event.location}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <button className="w-full md:w-auto bg-[#003da5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See What You're Looking For?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to learn about additional events, workshops, or ways
                to get involved with TWA
              </p>
              <button className="bg-[#003da5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        )}

        {/* Social Media Section */}
        {activeTab === "social" && (
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Follow Us on Social Media
              </h2>
              <p className="text-xl text-gray-600">
                Stay connected and engaged with our community across all
                platforms
              </p>
            </div>

            {/* Social Media Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {socialMedia.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`${platform.color} p-6 text-white text-center`}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        {platform.platform}
                      </h3>
                      <p className="text-sm opacity-90">
                        {platform.followers} followers
                      </p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {platform.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">
                          {platform.handle}
                        </span>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#003da5] hover:text-blue-700 transition-colors"
                        >
                          Follow <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Feed Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Social Media Updates
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#003da5] pl-6">
                  <div className="flex items-center mb-2">
                    <Share2 className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">
                      LinkedIn
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      • 2 days ago
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Proud to announce that 15 TWA participants secured
                    employment this month through our fair-chance employer
                    partnerships. These success stories remind us why this work
                    matters. #SecondChance #SLU_TWA"
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Share2 className="w-5 h-5 text-blue-700 mr-2" />
                    <span className="font-semibold text-gray-900">
                      Facebook
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      • 4 days ago
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Join us at our upcoming Job Fair on November 15th! We'll
                    have 20+ fair-chance employers ready to meet qualified
                    candidates. Registration is now open."
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-6">
                  <div className="flex items-center mb-2">
                    <X className="w-5 h-5 text-sky-500 mr-2" />
                    <span className="font-semibold text-gray-900">Twitter</span>
                    <span className="text-gray-500 text-sm ml-2">
                      • 1 week ago
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Research shows fair-chance employment reduces recidivism by
                    13%. TWA participants employed through our partners see even
                    better outcomes. #DataDriven #Reentry"
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-[#003da5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View All Social Media Updates
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-white text-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Connected with TWA</h3>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of supporters, employers, and advocates working
            to create second chances
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#003da5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              Follow on Social Media
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
