import React, { useState } from "react";

const IconWithTextData_11 = [
  {
    icon: "",
    title: "Expert HR Services",
    content: "Recruitment and Staffing",
    content2: "Talent Management",
    content3: "Performance Management",
    title2: "Why Choose Us?",
    subcontent: "Experienced HR professionals with proven track records",
    subcontent2: "Customized solutions tailored to your organization's needs",
    subcontent3: "Cost-effective and efficient services",
    subcontent4: "Proactive approach to HR challenges",
    title3: "Solutions for:",
    solutions: [
      "Small and Medium-Sized Businesses (SMBs)",
      "Large Corporations",
      "Startups",
      "Non-Profit Organizations",
    ],
    servicePackages: [
      "HR Audit and Compliance",
      "Recruitment and Hiring",
      "Employee Onboarding",
      "Performance Management",
      "Leadership Development",
    ],
    fees: [
      "Competitive hourly rates",
      "Project-based pricing",
      "Retainer options",
    ],
    contact: {
      phone: ["08024575070", "08135381901"],
      email: "smartcityhr@gmail.com",
      website: "https://academic-smoky.vercel.app/",
      address: `Olalonpe House, 
    Behind Royal Clinic, 
    Opposite Oyo State Veterinary Clinic, Mokola, Ibadan.`,
    },
    callToAction: "Get a Free Consultation!",
    scheduleMessage: "Schedule a call with our HR expert today!",
    followUs: {
      linkedin: "SmartCity HR",
      x: "SmartCity HR",
      facebook: "facebook.com/SmartCity HR",
    },
  },
  {
    icon: "",
    title: "Expert Tutoring Services",
    content: "NECO, WAEC, JAMB, and University exams preparation",
    content2:
      "Mathematics, Physics, Chemistry, Biology, English, and Economics",
    content3: "Individual and group classes available",
    title2: "Why Choose Us?",
    subcontent: "Experienced tutors with proven track records",
    subcontent2: "Personalized attention and flexible scheduling",
    subcontent3: "Comprehensive study materials and resources",
    subcontent4: "Conducive learning environment",
    subjectsOffered: [
      "Sciences (Math, Physics, Chemistry, Biology)",
      "Arts (English, Economics, Government, History)",
      "Social Sciences/Commercial (Geography, Commerce, Accounting)",
    ],
    programs: [
      "Regular tutorials",
      "Intensive revision classes",
      "Holiday coaching",
      "Online tutoring",
    ],
    fees: [
      "Affordable and competitive rates",
      "Discounts for package deals and referrals",
    ],
    contact: {
      phone: ["08135381901", "08024575070"],
      email: "smartcity@gmail.com",
      address: `Olalonpe House, 
  Behind Royal Clinic, Opposite Oyo State Veterinary Clinic, Mokola, Ibadan.`,
      website: "https://academic-smoky.vercel.app/",
    },
    callToAction: "Register Now!",
    scheduleMessage:
      "Call/WhatsApp 08135381901, 08024575070 to reserve a spot.",
    followUs: {
      facebook: "@SmartCity Institute",
      instagram: "@SmartCity Institute",
      twitter: "@SmartCity Institute",
    },
  },
  {
    icon: "",
    title: "Your Trusted Car Partner",
    vehiclesOffered: [
      "Sedans",
      "SUVs",
      "Trucks",
      "Electric & Hybrid",
      "Luxury Vehicles",
    ],
    services: [
      "Sales",
      "Financing",
      "Leasing",
      "Trade-Ins",
      "Maintenance & Repair",
      "Body Shop",
    ],
    specialOffers: "Certified Pre-Owned",
    specialOfferDetails: [
      "Warranty up to 7 years/100,000 miles",
      "Rigorous inspection process",
      "24/7 Roadside Assistance",
    ],
    title2: "Why Choose Us?",
    subcontent: "Family-owned & operated",
    subcontent2: "Award-winning customer service",
    subcontent3: "State-of-the-art facility",
    contact: {
      phone: ["08024575070", "08135381901"],
      address: `Olalonpe House, 
  Behind Royal Clinic, Opposite Oyo State Veterinary Clinic, Mokola, Ibadan.`,
    },
    hours: {
      mondayToSaturday: "9am - 8pm",
    },
    awards: [
      "Dealer of the Year Award (Moniya Automotive Association)",
      "5-Star Customer Review Rating",
    ],
    additionalServices: ["Car Rental", "Towing", "Vehicle Inspections"],
  },
  {
    icon: "",
    title: "Your Dream Home, Our Priority",
    description:
      "Are you looking for a luxurious and affordable home in Ibadan, Oyo State, Nigeria, and across the world? Look no further than SmartCity Homes and Properties!",
    features: [
      "Luxurious finishes",
      "Spacious rooms",
      "Secure and gated communities",
      "Convenient locations",
    ],
    contact: {
      phone: ["08024575070", "08135381901"],
      address: `Olalonpe House, 
  Behind Royal Clinic, Opposite Oyo State Veterinary Clinic, Mokola, Ibadan`,
    },
  },
  {
    icon: "",
    title: "SmartCity Foods",
    description:
      "Delicious Meals, Conveniently Yours. Craving delicious, homemade meals? Look no further than SmartCity Foods!",
    menu: [
      "Traditional Nigerian dishes",
      "International cuisine",
      "Healthy options",
      "Catering services for events",
    ],
    benefits: [
      "Fast delivery",
      "Affordable prices",
      "Fresh, high-quality ingredients",
    ],
    contact: {
      phone: ["08024575070", "08135381901"],
      address: `Olalonpe House, 
  Behind Royal Clinic, Opposite Oyo State Veterinary Clinic, Mokola, Ibadan`,
    },
  },
];

const TutoringCard = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (index) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex justify-center items-start gap-10 flex-wrap">
      {IconWithTextData_11.map((item, index) => {
        const isExpanded = expandedCards[index] || false;

        return (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 max-w-sm w-full relative"
            style={{ zIndex: isExpanded ? 50 : 10, position: "relative" }}
          >
            {/* Title Section */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            </div>

            {/* Content Section */}
            <div
              className={`text-gray-700 ${
                isExpanded ? "max-h-full" : "max-h-20 overflow-hidden"
              }`}
            >
              {/* General Content */}
              {item.content && <p>{item.content}</p>}
              {item.content2 && <p>{item.content2}</p>}
              {item.content3 && <p>{item.content3}</p>}

              {/* List of Details */}
              {item.title2 && (
                <label className="font-semibold mt-4">{item.title2}</label>
              )}
              <ul className="list-disc pl-5">
                {item.subcontent && <li>{item.subcontent}</li>}
                {item.subcontent2 && <li>{item.subcontent2}</li>}
                {item.subcontent3 && <li>{item.subcontent3}</li>}
                {item.subcontent4 && <li>{item.subcontent4}</li>}
              </ul>

              {/* Solutions Section */}
              {item.title3 && (
                <label className="font-semibold mt-4">{item.title3}</label>
              )}
              {item.solutions && (
                <ul className="list-disc pl-5">
                  {item.solutions.map((solution, i) => (
                    <li key={i}>{solution}</li>
                  ))}
                </ul>
              )}

              {/* Service Packages Section */}
              {item.servicePackages && (
                <div className="mt-4">
                  <label className="font-semibold">Service Packages:</label>
                  <ul className="list-disc pl-5">
                    {item.servicePackages.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features Section */}
              {item.features && (
                <div className="mt-4">
                  <label className="font-semibold">Features:</label>
                  <ul className="list-disc pl-5">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Information */}
              {item.contact && (
                <div className="mt-4">
                  <label className="font-semibold">Contact Us:</label>
                  <p>
                    <strong>Phone:</strong> {item.contact.phone.join(", ")}
                  </p>
                  {item.contact.email && (
                    <p>
                      <strong>Email:</strong> {item.contact.email}
                    </p>
                  )}
                  {item.contact.address && (
                    <p>
                      <strong>Address:</strong> {item.contact.address}
                    </p>
                  )}
                  {item.contact.website && (
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={item.contact.website}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.contact.website}
                      </a>
                    </p>
                  )}
                </div>
              )}

              {/* Call to Action */}
              {item.callToAction && (
                <div className="mt-4">
                  <p className="font-semibold text-blue-600">
                    {item.callToAction}
                  </p>
                </div>
              )}
            </div>

            {/* Read More Button */}
            <button
              className="mt-4 text-blue-500 hover:underline focus:outline-none"
              onClick={() => toggleReadMore(index)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TutoringCard;
