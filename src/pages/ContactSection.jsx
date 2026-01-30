import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_zatye1i';
const TEMPLATE_ID = 'template_kd1r6nz';
const PUBLIC_KEY = '-aka4n_AIKbgt1VmH';

const initialState = { name: '', email: '', message: '' };

const ContactSection = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { type: 'success'|'error', message: string }

  const validate = () => {
    const { name, email, message } = form;
    if (name.trim().length < 2) return 'Name must be at least 2 characters.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Please enter a valid email address.';
    if (message.trim().length < 20) return 'Message must be at least 20 characters.';
    return null;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    const error = validate();
    if (error) {
      setAlert({ type: 'error', message: error });
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);
      setAlert({ type: 'success', message: 'Message sent!' });
      setForm(initialState);
    } catch (err) {
      setAlert({ type: 'error', message: 'Failed to send. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Get in touch
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Work with me</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Open to new opportunities and projects. Say hello or ask a question—I’ll get back to you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-teal-600 dark:bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 dark:text-white font-semibold">Email</p>
                  <p className="text-slate-600 dark:text-gray-300">mariadonna0319@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 dark:text-white font-semibold">Location</p>
                  <p className="text-slate-600 dark:text-gray-300">Manila, Philippines</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 dark:text-white font-semibold">LinkedIn</p>
                  <p className="text-slate-600 dark:text-gray-300">linkedin.com/in/ma-donna-fidelino</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
            {alert && (
              <div
                className={`mb-6 px-4 py-3 rounded-lg text-sm font-semibold shadow-md transition-all duration-300 ${
                  alert.type === 'success'
                    ? 'bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/40 dark:border-green-400/30'
                    : 'bg-red-500/20 text-red-700 dark:text-red-300 border border-red-500/40 dark:border-red-400/30'
                }`}
                role="alert"
                aria-live="polite"
              >
                {alert.message}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off" noValidate>
              <div className="md:flex md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label htmlFor="name" className="block text-slate-800 dark:text-white font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    minLength={2}
                    required
                    aria-required="true"
                    aria-label="Name"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-colors"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-slate-800 dark:text-white font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-label="Email"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-colors"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-800 dark:text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  minLength={20}
                  required
                  aria-required="true"
                  aria-label="Message"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-colors resize-none"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
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
      </div>
    </section>
  );
};

export default ContactSection; 