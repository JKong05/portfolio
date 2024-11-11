import React from 'react'
import Swal from 'sweetalert2'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully',
        icon: 'success',
        customClass: {
          confirmButton: 'bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300'
        }
      });
    } else {
      console.log("Error", data);
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error',
        customClass: {
          confirmButton: 'bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300'
        }
      });
    }
  };

  return (
    <div className="box-content mx-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}>
      <h1 className="flex justify-between text-xl bg-custom-gradient font-semibold mb-4 py-2 pl-4">Talk to me!</h1>
      <div className="px-4 pb-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            required
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            required
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium">Message</label>
          <textarea 
            name="message" 
            id="message"
            required
            rows="5"
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black resize-none"
            placeholder="Start typing..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-button-color text-white py-2 px-4 hover:bg-header-color transition duration-200 font-medium"
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
}
