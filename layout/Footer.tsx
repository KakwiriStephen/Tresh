// // components/Footer.tsx
// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#1C3C6C] text-white py-8">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
//         {/* Left Section - School Information */}
//         <div className="flex-1 text-center md:text-left p-1 md:p-2 mx-2 md:mx-4">
//           {" "}
//           {/* Reduced padding and margin */}
//           <div className="flex flex-col items-center md:items-center md:items-start">
//             <div className="flex flex-col items-right">
//               <img
//                 src="/assets/Frame 37.png" // Replace with your actual image path
//                 alt="Treshaw International School Logo"
//                 className="h-12 w-12 mb-4" // Smaller height and width for the logo, reduced margin-bottom
//               />
//               <h3 className="text-sm md:text-base font-bold mb-4 text-center">
//                 TRESHAW INTERNATIONAL SCHOOL
//               </h3>
//             </div>

//             <p
//               style={{ fontFamily: "'Open Sans', sans-serif" }}
//               className="text-base md:text-sm font-sans text-justify"
//             >
//               BRITISH INTERNATIONAL CURRICULUM <br></br>
//               <br></br>
//               Treshaw International School offers Pearson <br></br>Edexcel
//               International Curriculum
//             </p>
//           </div>
//         </div>

//         {/* Middle Section - Quick Links */}
//         <div className="flex-1 text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2 list-disc ml-4">
//             {" "}
//             {/* Added list-disc for bullets and ml-4 for left margin */}
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 {" "}
//                 {/* Hover effect for blue color */}
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 {" "}
//                 {/* Hover effect for blue color */}
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 {" "}
//                 {/* Hover effect for blue color */}
//                 What We Offer
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 {" "}
//                 {/* Hover effect for blue color */}
//                 Subjects & Classes
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section - Contact Information */}
//         <div className="flex-1 text-center md:text-left">
//           <h4 className="text-lg font-bold mb-4">Contact Us</h4>
//           <div className="space-y-2">
//             <p>
//               <span role="img" aria-label="phone">
//                 📞
//               </span>{" "}
//               +254-714006148
//             </p>
//             <p>
//               <span role="img" aria-label="phone">
//                 📞
//               </span>{" "}
//               +254-717661283
//             </p>
//             <p>
//               <span role="img" aria-label="email">
//                 📧
//               </span>{" "}
//               info@treshawinternationalschool.com
//             </p>
//             <p>
//               <span role="img" aria-label="location">
//                 📍
//               </span>{" "}
//               Muhuti Close, South C Nairobi, Kenya in East Africa
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center text-sm border-t border-gray-200 pt-4 flex justify-center pr-10 -mt-10">
//         Copyright &copy; 2023 Treshaw International School.
//       </div>
//     </footer>
//   );
// };
import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs"; // Chevron icon for custom bullets

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1C3C6C] text-white py-12 overflow-hidden">
      {/* Geometric Background Watermark */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url(/assets/let.png)" }}
      ></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - School Information */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <img
            src="/assets/logo-1.png" // Replace with actual logo path
            alt="Treshaw International School Logo"
            className="h-16 w-17"
          />
          <h3 className="text-2xl font-semibold">
            Treshaw International School
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            British International Curriculum
            <br />
            Offering Pearson Edexcel International Curriculum
          </p>
        </div>

        {/* Middle Section - Quick Links with Custom Bullet Points */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-center md:text-left">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/offer", label: "What We Offer" },
              { href: "/subject-classes", label: "Subjects & Classes" },
              { href: "/contactUs", label: "Contact" },
            ].map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                <BsChevronRight className="text-blue-400" />{" "}
                {/* Custom bullet icon */}
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Information with Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="space-y-1 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-white" aria-label="Phone" role="img" />
              <span>+254-714006148</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-white" />
              <span>+254-717661283</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-white" />{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@treshawinternationalschool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                info@treshawinternationalschool.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-red-500" />{" "}
              <span>Muhuti Close, South C, Nairobi, Kenya</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-xs lg:text-sm relative z-10">
        &copy; 2024 Treshaw International School | Powered by Bold-Code.
      </div>
    </footer>
  );
};

export default Footer;
