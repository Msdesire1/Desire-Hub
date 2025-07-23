
// "use client";
// import React, { useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
// import { FiMenu, FiX, FiArrowDown } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
// import axios from "axios";

// const Sendmessage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Basic form validation
//     if (!formData.name || !formData.email || !formData.service || !formData.message) {
//       toast.error("Please fill all fields");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("/api/send-request", formData, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });

//       if (response.data.statusCode === "00") {
//         toast.success("Thank you for your inquiry. I'll get back to you soon!");
//         // Reset form after successful submission
//         setFormData({
//           name: "",
//           email: "",
//           service: "",
//           message: ""
//         });
//       } else {
//         throw new Error(response.data.message || "Form submission failed");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       toast.error(error.response?.data?.message || error.message || "Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };
//   console.log(formData)

//   return (
//     <div>
//       <div className="bg-gray-50 rounded-2xl p-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           <div>
//             <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//               Service Needed
//             </label>
//             <select
//               id="service"
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             >
//               <option value="">Select a service</option>
//               <option value="development">Frontend Development</option>
//               <option value="events">Event Planning</option>
//               <option value="catering">Catering Services</option>
//               <option value="cakes">Cake Baking</option>
//               <option value="realestate">Real Estate</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={5}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//               placeholder="Tell me about your project..."
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform transition-all duration-300 ${
//               isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
//             }`}
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Sending...
//               </span>
//             ) : (
//               'Send Message'
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Sendmessage;

"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX, FiArrowDown } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

const Sendmessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqalpdjj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New service request: ${formData.service}`
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your inquiry. I'll get back to you soon!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          service: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <div className="bg-gray-50 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select a service</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Event Planning">Event Planning</option>
              <option value="Catering Services">Catering Services</option>
              <option value="Cake Baking">Cake Baking</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform transition-all duration-300 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sendmessage;