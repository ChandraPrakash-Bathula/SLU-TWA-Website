import { Users, DollarSign, Shield } from "lucide-react";

export const regions = [
    { name: "Saint Louis", description: "Focused programs with partnerships and mentorship opportunities", contact: "/contact#stlouis" },
    { name: "Kansas City", description: "Programs tailored for participants and local employers", contact: "/contact#kansascity" },
    { name: "Springfield", description: "Partnerships to assist justice-involved individuals", contact: "/contact#springfield" },
    { name: "Columbia", description: "Collaborations to expand reach and support", contact: "/contact#columbia" }
  ];

  export const jobseekerServices = [
    "Discussing values and career path",
    "Creating a traditional and virtual resume", 
    "Reviewing interview skills",
    "Navigating technology in applications and onboarding",
    "Connecting with supportive services"
  ];

  export const fairChancebenefits = [
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