import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mvqs5pc",  // Replace with your EmailJS Service ID
        "template_fsvt6v8", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "DhiFwijVsWtwk0JWE" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send email. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className=" bg-gradient-contact h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9F3]">
      <motion.div
  className="w-full max-w-lg bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-300"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
        <h2 className="text-4xl font-bold text-center text-black">Contact Me 📩</h2>

        <form className="mt-6" onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-black hover:bg-[#57B4BA] rounded-lg text-lg text-white">
            Send Message
          </button>
        </form>

        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}

        <p className="text-center text-gray-600 mt-4">
          Or email me at <a href="mailto:pratikshit22@gmail.com" className="text-blue-500 hover:underline">pratikshit22@gmail.com</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
