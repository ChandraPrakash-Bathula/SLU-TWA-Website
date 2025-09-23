import React, { useState, useEffect } from "react";
import {
  HandHeart,
  Heart,
  Briefcase,
  Users,
  Calendar,
  DollarSign,
  Building2,
  Mail,
  Phone,
  Gift,
  Truck,
  Factory,
  CreditCard,
  User,
  Landmark,
  Shield,
  Church,
  Gavel,
  Zap,
} from "lucide-react";

const currentSponsors = [
  { name: "St. Louis County Port Authority", type: "Current", icon: <Landmark className="w-5 h-5" /> },
  { name: "Missouri Department of Corrections", type: "Current", icon: <Shield className="w-5 h-5" /> },
  { name: "Lutheran Foundation of St. Louis", type: "Current", icon: <Church className="w-5 h-5" /> },
  { name: "Bob Barker Foundation", type: "Current", icon: <Gift className="w-5 h-5" /> },
];

const previousSponsors = [
  { name: "Al Franken for Senate", icon: <Gavel className="w-5 h-5" /> },
  { name: "AyCorp Media, LLC", icon: <Zap className="w-5 h-5" /> },
  { name: "Centene Charitable Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "Clark-Fox Family Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "Commerce Bank", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Eric & Amy Holland Charitable Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "IMC Outdoor Living", icon: <Factory className="w-5 h-5" /> },
  { name: "Jack and Rachel Oliver", icon: <User className="w-5 h-5" /> },
  { name: "Katie Sinquefield", icon: <User className="w-5 h-5" /> },
  { name: "Mimi & Peter Haas Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "Regional Business Council", icon: <Building2 className="w-5 h-5" /> },
  { name: "Royal Hansen", icon: <User className="w-5 h-5" /> },
  { name: "Stephen and Angela Strum", icon: <User className="w-5 h-5" /> },
  { name: "US Bank", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Viceroy Development Group", icon: <Building2 className="w-5 h-5" /> },
  { name: "Walmart", icon: <Truck className="w-5 h-5" /> },
];

const teamMembers = [
  { name: "Meredith RJ", role: "Program Director", email: "meredith.rj@slu.edu", phone: "314-555-1234" },
  { name: "Nikki Chilton", role: "Coordinator", email: "nikki.chilton@slu.edu", phone: "314-555-5678" },
  { name: "John Doe", role: "Mentor", email: "john.doe@slu.edu", phone: "314-555-9101" },
  { name: "Jane Smith", role: "Community Outreach", email: "jane.smith@slu.edu", phone: "314-555-1122" },
];

const testimonials = [
  { quote: "TWA helped me find work and rebuild my life.", author: "A. Participant" },
  { quote: "Employers really listened. Life-changing support.", author: "B. Participant" },
  { quote: "The coaches were patient and practical.", author: "C. Participant" },
];

export default function SupportTWA() {
  const [sponsorModal, setSponsorModal] = useState(null); // sponsor object
  const [contactOpen, setContactOpen] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState(null);
  const [testIndex, setTestIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  function initials(text) {
    return text
      .split(" ")
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase();
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    // Basic client-side validation
    if (!contact.name || !contact.email || !contact.message) {
      setContactStatus({ type: "error", text: "Please complete all fields." });
      return;
    }
    // Simulate submission (replace with real endpoint)
    setContactStatus({ type: "sending", text: "Sending..." });
    setTimeout(() => {
      setContactStatus({ type: "success", text: "Message sent! We’ll be in touch." });
      setContact({ name: "", email: "", message: "" });
      // close after short delay
      setTimeout(() => setContactOpen(false), 1200);
    }, 900);
  }

  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">Support the Transformative Workforce Academy</h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl opacity-90">
            Join SLU TWA in empowering justice-involved Missourians through mentorship, workforce training,
            and connections to fair-chance employers. Your time, talent, and resources create second chances.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#volunteer" className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold">
              <HandHeart className="w-5 h-5" /> Volunteer
            </a>
            <a href="#ways-to-give" className="inline-flex items-center gap-3 px-5 py-3 bg-sky-600 hover:bg-sky-700 rounded-lg font-semibold">
              <Heart className="w-5 h-5" /> Ways to Give
            </a>
            <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-3 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
              <Briefcase className="w-5 h-5" /> Contact / Sponsor
            </button>
          </div>
        </div>

        {/* decorative svg */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block opacity-20">
          <svg viewBox="0 0 600 800" className="w-full h-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <stop offset="1" stopColor="#000000" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="600" height="800" fill="url(#g1)" />
          </svg>
        </div>
      </header>

      {/* NAV CARDS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-emerald-50 text-emerald-600">
              <HandHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Volunteer</h3>
            <p className="text-sm text-gray-600 flex-1">Coaching, administrative support, event volunteers — help prepare jobseekers for stable employment.</p>
            <a href="#volunteer" className="text-emerald-600 font-semibold mt-2">Learn more →</a>
          </article>

          <article className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-sky-50 text-sky-600">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Ways to Give</h3>
            <p className="text-sm text-gray-600 flex-1">Sponsorships, donations, in-kind gifts — all help scale training and reentry supports.</p>
            <a href="#ways-to-give" className="text-sky-600 font-semibold mt-2">How to give →</a>
          </article>

          <article className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-purple-50 text-purple-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Work with Us</h3>
            <p className="text-sm text-gray-600 flex-1">Join a mission-driven team or post jobs to connect with program participants.</p>
            <a href="#work-with-us" className="text-purple-600 font-semibold mt-2">Opportunities →</a>
          </article>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold">Sponsors</h2>
            <div className="text-sm text-gray-500">We gratefully acknowledge our supporters.</div>
          </div>

          {/* Current */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Current Sponsors</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {currentSponsors.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSponsorModal(s)}
                  aria-label={`Open sponsor ${s.name}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-600 ring-1 ring-emerald-100">
                    {s.icon || <span className="font-medium">{initials(s.name)}</span>}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-gray-500">Partner</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Previous */}
          <div>
            <h3 className="text-lg font-semibold text-sky-700 mb-4">Previous Sponsors</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {previousSponsors.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSponsorModal(s)}
                  aria-label={`Open sponsor ${s.name}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sky-600 ring-1 ring-sky-50">
                    {s.icon || <span className="font-medium">{initials(s.name)}</span>}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-gray-500">Previous</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer section */}
      <section id="volunteer" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold">Volunteer — Coaching & Events</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Volunteers help jobseekers with resume prep, interview practice, digital skills,
              and mock interviews. Volunteers also support data, outreach, and event logistics.
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>One-on-one coaching</li>
              <li>Job fair volunteer roles</li>
              <li>Resume & interview workshops</li>
              <li>Research & data support</li>
            </ul>

            <div className="mt-6">
              <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold">
                <Mail className="w-4 h-4" /> Contact Meredith Rataj
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-center mb-6">
              <Calendar className="w-10 h-10 text-sky-600 mx-auto" />
              <h4 className="text-xl font-semibold mt-3">Upcoming Events</h4>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 rounded-lg bg-slate-50">
                <div className="font-semibold">Spring Second Chance Job Fair</div>
                <div className="text-sm">April — Chaifetz Arena (details TBA)</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50">
                <div className="font-semibold">Volunteer Training — Employer Guide</div>
                <div className="text-sm">Quarterly virtual sessions</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50">
                <div className="font-semibold">Pre-apprenticeship Support</div>
                <div className="text-sm">Ongoing cohort-based training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section id="ways-to-give" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Ways to Give</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 bg-emerald-50 shadow">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="w-6 h-6 text-emerald-700" />
                <h3 className="text-xl font-semibold">Sponsorship</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Sponsorships fund career training, job fairs, apprenticeships, and employer engagement
                activities. Sponsorship tiers are flexible to meet organizational goals.
              </p>
              <div className="flex gap-3">
                <a href="#" onClick={(e)=>e.preventDefault()} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Request Sponsorship Info</a>
                <button onClick={() => setContactOpen(true)} className="px-4 py-2 border rounded-lg">Contact Meredith</button>
              </div>
            </div>

            <div className="rounded-xl p-6 bg-sky-50 shadow">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-sky-700" />
                <h3 className="text-xl font-semibold">Donations</h3>
              </div>
              <p className="text-gray-700 mb-6">
                One-time gifts or recurring donations support wraparound services—transportation,
                work clothes, digital access, and training materials.
              </p>
              <div className="flex gap-3">
                <a href="#" onClick={(e)=>e.preventDefault()} className="px-4 py-2 bg-sky-700 text-white rounded-lg">Donate Now</a>
                <button onClick={() => setContactOpen(true)} className="px-4 py-2 border rounded-lg">Discuss Giving</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work with Us */}
      <section id="work-with-us" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Briefcase className="w-12 h-12 text-purple-600 mx-auto" />
          <h2 className="text-3xl font-bold mt-4 mb-4">Work with Us</h2>
          <p className="text-gray-700 mb-8">
            Join a mission-driven team or post meaningful job opportunities for TWA participants.
            Lived experience is welcomed and valued.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white shadow">
              <div className="font-semibold">Employment Specialist (St. Louis)</div>
              <div className="text-sm text-gray-500 mb-4">Full-time · Apply via SLU jobs</div>
              <button onClick={() => setContactOpen(true)} className="px-4 py-2 bg-purple-600 text-white rounded-lg">Contact Hiring Team</button>
            </div>

            <div className="p-6 rounded-xl bg-white shadow">
              <div className="font-semibold">Volunteer Mentor (Part-time)</div>
              <div className="text-sm text-gray-500 mb-4">Flexible · Volunteer role</div>
              <button onClick={() => setContactOpen(true)} className="px-4 py-2 bg-purple-600 text-white rounded-lg">Become a Mentor</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Testimonials</h3>

          <div className="relative">
            <div className="rounded-xl p-8 bg-slate-50 shadow">
              <blockquote className="text-lg italic text-gray-800">“{testimonials[testIndex].quote}”</blockquote>
              <div className="mt-4 font-semibold text-gray-700">— {testimonials[testIndex].author}</div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <button onClick={() => setTestIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial" className="p-2 rounded-full bg-white shadow">‹</button>
              <button onClick={() => setTestIndex((i) => (i + 1) % testimonials.length)} aria-label="Next testimonial" className="p-2 rounded-full bg-white shadow">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Contact summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow flex flex-col items-start gap-2">
                <div className="w-full flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white ring-1 ring-slate-100 flex items-center justify-center text-slate-700">
                    {initials(m.name)}
                  </div>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-gray-500">{m.role}</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <div><span className="font-medium">Email:</span> <a href={`mailto:${m.email}`} className="text-sky-600">{m.email}</a></div>
                  <div><span className="font-medium">Phone:</span> <a href={`tel:${m.phone}`} className="text-sky-600">{m.phone}</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Saint Louis University — Transformative Workforce Academy</div>
          <div className="flex items-center gap-4">
            <a href="mailto:meredith.rj@slu.edu" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
              <Mail className="w-4 h-4" /> Contact Meredith
            </a>
            <a href="#ways-to-give" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
              <DollarSign className="w-4 h-4" /> Ways to Give
            </a>
          </div>
        </div>
      </footer>

      {/* Sponsor Modal */}
      {sponsorModal && (
        <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSponsorModal(null)} />
          <div className="relative bg-white max-w-md w-full rounded-xl p-6 shadow-lg z-10">
            <button onClick={() => setSponsorModal(null)} className="absolute top-3 right-3 text-gray-500">✕</button>
            <h4 className="text-lg font-bold mb-2">{sponsorModal.name}</h4>
            <div className="text-sm text-gray-600 mb-4">
              {sponsorModal.type ? <span className="inline-block mr-2 px-2 py-1 bg-emerald-50 rounded text-emerald-700 text-xs">{sponsorModal.type}</span> : null}
              Sponsor details and acknowledgement copy can go here. If you have a logo, swap the initials circle for an <code>&lt;img /&gt;</code>.
            </div>
            <div className="flex gap-3">
              <a href="#" onClick={(e)=>e.preventDefault()} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Sponsor Info</a>
              <button onClick={() => { setSponsorModal(null); setContactOpen(true); }} className="px-4 py-2 border rounded-lg">Contact</button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactOpen && (
        <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="fixed inset-0 bg-black/50" onClick={() => setContactOpen(false)} />
          <form onSubmit={handleContactSubmit} className="relative bg-white max-w-lg w-full rounded-xl p-6 shadow-lg z-10">
            <button onClick={() => setContactOpen(false)} type="button" className="absolute top-3 right-3 text-gray-500">✕</button>
            <h3 className="text-xl font-semibold mb-2">Contact SLU TWA</h3>
            <p className="text-sm text-gray-600 mb-4">For sponsorships, volunteering, or hiring questions — send us a message.</p>

            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} className="w-full mb-3 px-3 py-2 border rounded" required />

            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} className="w-full mb-3 px-3 py-2 border rounded" required />

            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea value={contact.message} onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))} rows="4" className="w-full mb-4 px-3 py-2 border rounded" required />

            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Send message</button>
              <a className="px-4 py-2 border rounded-lg" href={`mailto:meredith.rj@slu.edu?subject=SLU%20TWA%20Contact&body=${encodeURIComponent(contact.message || "")}`}>Or open mail</a>
            </div>

            {contactStatus && (
              <div className={`mt-4 text-sm ${contactStatus.type === "error" ? "text-rose-600" : "text-green-700"}`}>
                {contactStatus.text}
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
