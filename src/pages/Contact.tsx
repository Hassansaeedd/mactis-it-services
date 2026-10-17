import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', detail: 'Gulberg III, Lahore, Pakistan', color: 'text-primary' },
  { icon: Phone, title: 'Call Us', detail: '0315-4327855', color: 'text-green-400' },
  { icon: Mail, title: 'Email Us', detail: 'info@mactis.co', color: 'text-blue-400' },
  { icon: Clock, title: 'Consultation Hours', detail: 'Mon–Sat: 10am – 7pm', color: 'text-amber-400' },
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
          subject: `Mactis IT services: New Quote Request (${formData.subject})`,
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
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 dark:bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Global Engagement & Discovery
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Schedule an Enterprise <br />
            <span className="text-gradient">Architectural Consultation</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Connect directly with our principal engineering directors and solutions architects to evaluate technical requirements, security constraints, and deployment roadmaps.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-100 dark:bg-dark-lighter">
        <div className="container mx-auto px-4 md:px-6">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card p-6 rounded-3xl text-center hover:border-white/10 transition-all duration-300 hover:-translate-y-1 group">
                  <Icon className={`h-8 w-8 ${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">{item.title}</p>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-10 rounded-3xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Request a Free Quote</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto bg-green-500/10 text-green-400 h-20 w-20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Project Details Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Thank you. An IT solution architect will review your requirements and reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name *</label>
                      <input
                        required name="name" type="text" value={formData.name} onChange={handleChange}
                        className="w-full bg-white dark:bg-dark border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address *</label>
                      <input
                        required name="email" type="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-white dark:bg-dark border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Type *</label>
                    <select
                      required name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full bg-white dark:bg-dark border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none"
                    >
                      <option value="">Select an enterprise requirement...</option>
                      <option value="enterprise-erp">Enterprise Agro-Industrial ERP & Supply Chain</option>
                      <option value="computer-vision">Smart City & Computer Vision (ANPR / Surveillance)</option>
                      <option value="generative-ai">Cognitive Generative AI & Autonomous Agents</option>
                      <option value="digital-commerce">Headless Digital Commerce & Retail Platforms</option>
                      <option value="cloud-devops">Enterprise Cloud Architecture & DevOps</option>
                      <option value="cybersecurity">Zero-Trust Cybersecurity & Audit</option>
                      <option value="custom-solution">Custom Bespoke Enterprise Engineering</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Requirements *</label>
                    <textarea
                      required name="message" rows={5} value={formData.message} onChange={handleChange}
                      className="w-full bg-white dark:bg-dark border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 outline-none resize-none transition-all"
                      placeholder="Describe your goals, features, and timeline requirements..."
                    />
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-primary py-4 flex items-center justify-center disabled:opacity-50">
                    {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Send className="h-5 w-5 mr-2" />}
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp + Map */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <MessageCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Prefer WhatsApp?</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-5 text-sm">Get instant responses from a solution expert on WhatsApp. Online Mon–Sat, 10am–7pm.</p>
                    <a
                      href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 font-bold text-white rounded-xl transition-all hover:opacity-90"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 mr-2">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54445.99498879888!2d74.27483694999999!3d31.516564350000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe9765878e0!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mactis Office Location"
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
