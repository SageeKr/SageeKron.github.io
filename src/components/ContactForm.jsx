import React, { useState } from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgwenpv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus('Message sent successfully!');
        setTimeout(() => {
        setFormStatus('');
        }, 4000);
      } else {
        setFormStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      setFormStatus('Oops! Something went wrong.');
    }
  };

   return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-lg mx-auto text-center bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-4xl font-montserrat font-bold mb-6">Contact Me </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
        {formStatus && (
          <p className="mt-6 text-lg font-open-sans text-green-600">{formStatus}</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
