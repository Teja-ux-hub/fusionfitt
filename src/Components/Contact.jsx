import React from 'react';
import Swal from 'sweetalert2'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cd26d36f-3072-4816-be17-dcbfd029d1c5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Thank You!",
            text: "Message Sent Successfully!",
            icon: "success"
          });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="bg-transparent flex items-center justify-center top-10 relative my-8 min-h-screen">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Contact Us</h2>

        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-600 font-semibold">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-2 w-full p-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-black font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 w-full p-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-black font-semibold">Message</label>
          <textarea
            id="message"
            className="mt-2 w-full p-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
            name='message'
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
