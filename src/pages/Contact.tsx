import React, { useState } from 'react';

const contactInfo = [
  { label: 'Office Location', detail: 'Gulberg III, Lahore, Pakistan' },
  { label: 'Direct Phone', detail: '+92 315 4327855' },
  { label: 'General Inquiries', detail: 'info@mactis.co' },
  { label: 'Working Hours', detail: 'Mon–Sat: 10:00 AM – 7:00 PM' },
];

const WEB3FORMS_ACCESS_KEY: string = "0d9997d3-2f7c-4982-9099-26c52d99b858";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      alert("Please update WEB3FORMS_ACCESS_KEY in Contact.tsx with your actual key from Web3Forms.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Mactis IT: Project Consultation Request (${formData.subject})`,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-slate-900 dark:bg-slate-950 border-b border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Contact & Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Let's Talk About Your Next Software Project
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
            Connect directly with our engineering leadership to discuss specifications, technical dependencies, project scope, and timelines.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactInfo.map((item) => (
              <div 
                key={item.label} 
                className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-left space-y-1.5 shadow-sm"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">{item.label}</p>
                <p className="text-slate-900 dark:text-white font-bold text-sm sm:text-base">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Project Inquiry
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6">
                Tell us about your project goals. We typically respond within one business day.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="mx-auto bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 h-14 w-14 rounded-full flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you for reaching out. A senior member of our engineering team will review your requirements and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        required name="name" type="text" value={formData.name} onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        required name="email" type="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Service Area of Interest *
                    </label>
                    <select
                      required name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-600 outline-none"
                    >
                      <option value="">Select a service category...</option>
                      <option value="web-development">Web & SaaS Application Development</option>
                      <option value="mobile-apps">Mobile App Development (iOS & Android)</option>
                      <option value="enterprise-erp">Custom Enterprise ERP & Systems</option>
                      <option value="ai-automation">AI Integration & Smart Automation</option>
                      <option value="cloud-devops">Cloud Infrastructure & DevOps</option>
                      <option value="security-audit">Security & Vulnerability Audits</option>
                      <option value="other">Other / Custom Project</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Project Description *
                    </label>
                    <textarea
                      required name="message" rows={4} value={formData.message} onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none resize-none"
                      placeholder="Please share details about what you want to build, any existing systems, and your expected timeline..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full btn-primary py-3.5 text-xs sm:text-sm font-semibold disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Send Inquiry →'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct WhatsApp & Map Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Direct WhatsApp Line</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Available Mon–Sat: 10:00 AM – 7:00 PM</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For quick inquiries or immediate questions regarding custom software development, you can message our engineering lead directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule a technical consultation regarding an enterprise software project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="font-bold">→</span>
                </a>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 bg-slate-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54445.99498879888!2d74.27483694999999!3d31.516564350000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe9765878e0!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mactis Headquarters Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
