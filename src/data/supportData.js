import {
  Building2,
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


export const currentSponsors = [
  {
    name: "St. Louis County Port Authority",
    type: "Current",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    name: "Missouri Department of Corrections",
    type: "Current",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    name: "Lutheran Foundation of St. Louis",
    type: "Current",
    icon: <Church className="w-5 h-5" />,
  },
  {
    name: "Bob Barker Foundation",
    type: "Current",
    icon: <Gift className="w-5 h-5" />,
  },
];

export const previousSponsors = [
  { name: "Al Franken for Senate", icon: <Gavel className="w-5 h-5" /> },
  { name: "AyCorp Media, LLC", icon: <Zap className="w-5 h-5" /> },
  { name: "Centene Charitable Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "Clark-Fox Family Foundation", icon: <Gift className="w-5 h-5" /> },
  { name: "Commerce Bank", icon: <CreditCard className="w-5 h-5" /> },
  {
    name: "Eric & Amy Holland Charitable Foundation",
    icon: <Gift className="w-5 h-5" />,
  },
  { name: "IMC Outdoor Living", icon: <Factory className="w-5 h-5" /> },
  { name: "Jack and Rachel Oliver", icon: <User className="w-5 h-5" /> },
  { name: "Katie Sinquefield", icon: <User className="w-5 h-5" /> },
  { name: "Mimi & Peter Haas Foundation", icon: <Gift className="w-5 h-5" /> },
  {
    name: "Regional Business Council",
    icon: <Building2 className="w-5 h-5" />,
  },
  { name: "Royal Hansen", icon: <User className="w-5 h-5" /> },
  { name: "Stephen and Angela Strum", icon: <User className="w-5 h-5" /> },
  { name: "US Bank", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Viceroy Development Group", icon: <Building2 className="w-5 h-5" /> },
  { name: "Walmart", icon: <Truck className="w-5 h-5" /> },
];

export const teamMembers = [
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
    role: "Mentor",
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