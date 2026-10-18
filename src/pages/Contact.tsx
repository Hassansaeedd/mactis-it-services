import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Corporate Headquarters', detail: 'Gulberg III, Lahore, Pakistan' },
  { icon: Phone, title: 'Direct Hotline', detail: '+92 315 4327855' },
  { icon: Mail, title: 'Executive Inquiries', detail: 'info@mactis.co' },
  { icon: Clock, title: 'Consultation Hours', detail: 'Mon-Sat: 10:00 AM - 7:00 PM' },
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
          subject: `Mactis IT: Technical Consultation Request (${formData.subject})`,
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
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-3">
            Engagement & Discovery
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Schedule an Architectural Consultation
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
            Connect directly with our principal engineering leads to evaluate technical specifications, security constraints, and deployment roadmaps.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-left space-y-1.5"
                >
                  <Icon className="h-5 w-5 text-blue-700 dark:text-blue-400 mb-2" />
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">{item.title}</p>
                  <p className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Request an Architectural Discovery Session
              </h2>

              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 h-14 w-14 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Project Briefing Received</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    A principal solutions architect will review your technical requirements and respond with initial evaluation notes within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        required name="name" type="text" value={formData.name} onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Corporate Email *
                      </label>
                      <input
                        required name="email" type="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Technical Practice Area *
                    </label>
                    <select
                      required name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-blue-600 outline-none"
                    >
                      <option value="">Select a practice area...</option>
                      <option value="enterprise-erp">Enterprise Agro-Industrial ERP & Supply Chain</option>
                      <option value="computer-vision">Smart City & Computer Vision (ANPR / Surveillance)</option>
                      <option value="generative-ai">Cognitive Generative AI & Autonomous Agents</option>
                      <option value="digital-commerce">Headless Digital Commerce & Retail Platforms</option>
                      <option value="cloud-devops">Enterprise Cloud Architecture & DevOps</option>
                      <option value="cybersecurity">Zero-Trust Cybersecurity & Audit</option>
                      <option value="custom-solution">Custom Bespoke Enterprise Engineering</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Project Requirements & Timeline *
                    </label>
                    <textarea
                      required name="message" rows={4} value={formData.message} onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 px-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 outline-none resize-none"
                      placeholder="Outline your architectural requirements, data volumes, integration needs, or timeline constraints..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full btn-primary py-3 text-xs sm:text-sm font-semibold space-x-2 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span>{loading ? 'Submitting Briefing...' : 'Submit Architecture Request'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct WhatsApp & Map Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Direct Technical Hotline</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Mon-Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For urgent operational requests or rapid consultation scheduling, connect directly with an engineering lead on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule a technical consultation regarding an enterprise software project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 h-64 bg-slate-900">
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
