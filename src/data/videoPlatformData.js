
import saintLouis from "../assets/regions/saintLouis.png";
import columbia from "../assets/regions/columbiaMO.jpeg";
import springfield from "../assets/regions/springField.jpeg";
import kansasCity from "../assets/regions/kansasCity.jpeg";
import manufacture from "../assets/industries/manufacturing.jpg";
import healthcare from "../assets/industries/health.jpg";
import technology from "../assets/industries/information-technology.webp";
import finance from "../assets/industries/finance.webp";
import jamesJohnson from "../assets/videos/james_johnson.mp4";
import edmondBrown from "../assets/videos/edmond_brown.mp4";
import nityaSattaru from "../assets/videos/nitya_sattaru.mp4";
// Region Data (Missouri only)
export const RegionCardData = [
  {
    cityId: "001",
    city: "Saint Louis, MO",
    state: "Missouri",
    imageURL: saintLouis,
    industries: 4,
    individuals: 12,
    contact: "/contact/saint-louis",
  },
  {
    cityId: "002",
    city: "Kansas City, MO",
    state: "Missouri",
    imageURL: kansasCity,
    industries: 4,
    individuals: 12,
    contact: "/contact/kansas-city",
  },
  {
    cityId: "003",
    city: "Columbia, MO",
    state: "Missouri",
    imageURL: columbia,
    industries: 4,
    individuals: 12,
    contact: "/contact/columbia",
  },
  {
    cityId: "004",
    city: "Springfield, MO",
    state: "Missouri",
    imageURL: springfield,
    industries: 4,
    individuals: 12,
    contact: "/contact/springfield",
  },{
    cityId: "004",
    city: "Spring, MO",
    state: "Missouri",
    imageURL: springfield,
    industries: 4,
    individuals: 12,
    contact: "/contact/springfield",
  },{
    cityId: "004",
    city: "Spring, MO",
    state: "Missouri",
    imageURL: springfield,
    industries: 4,
    individuals: 12,
    contact: "/contact/springfield",
  },
];

// Industry Data with locations
export const industryList = [
  {
    id: 1,
    name: "Healthcare",
    imageURL: healthcare,
    individuals: 12,
    location: "Saint Louis, MO",
  },
  {
    id: 2,
    name: "Technology",
    imageURL: technology,
    individuals: 12,
    location: "Saint Louis, MO",
  },
  {
    id: 3,
    name: "Finance",
    imageURL: finance,
    individuals: 12,
    location: "Kansas City, MO",
  },
  {
    id: 4,
    name: "Manufacturing",
    imageURL: manufacture,
    individuals: 12,
    location: "Springfield, MO",
  },
];

// Video Data with locations and categories
export const videoObj = [
  {
    id: "001",
    name: "James Johnson",
    videoURL: jamesJohnson,
    description: "Skilled in Manufacturing",
    skills: "Maintaining machinery, Cleaning and repairing equipment",
    category: "offense",
    transport: "public",
    location: "Saint Louis, MO",
    industry: "Manufacturing",
    isFavorite: false,
  },
  {
    id: "002",
    name: "Edmond Brown",
    videoURL: edmondBrown,
    description: "Expert in Supply Chain Management",
    skills: "Inventory management, Logistics coordination, Warehouse operations",
    category: "non-offense",
    transport: "car",
    location: "Kansas City, MO",
    industry: "Finance",
    isFavorite: false,
  },
  {
    id: "003",
    name: "Nitya Sattaru",
    videoURL: nityaSattaru,
    description: "Promoting the video content",
    skills: "Information Technology, Software Development, Data Analysis",
    category: "non-offense",
    transport: "public",
    location: "Springfield, MO",
    industry: "Technology",
    isFavorite: false,
  },
];