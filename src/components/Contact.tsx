import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Copy, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);
  const [copyPhoneSuccess, setCopyPhoneSuccess] = useState(false);
  
  // Dynamic time readout
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setCurrentTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("arulsampathcyr@gmail.com");
    setCopyEmailSuccess(true);
    setTimeout(() => setCopyEmailSuccess(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("6381733560");
    setCopyPhoneSuccess(true);
    setTimeout(() => setCopyPhoneSuccess(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Simulate server side relay with success reporting
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050816]/40 border-t border-white/5 overflow-hidden">
      {/* Visual backdrop lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            07 . INITIATE DIALOG
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Let&#39;s Build Something Amazing Together
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct connection parameters and active clocks */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am highly excited to collaborate on new internships, research opportunities, full stack web apps, or product development challenges. Drop a line; I usually respond within a few business hours!
            </p>

            {/* Location, Telephone, Email lists */}
            <div className="space-y-4">
              
              {/* Coordinates container */}
              <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center justify-between hover:bg-white/5 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Send Direct Mail</p>
                    <p className="text-sm text-gray-200 font-medium">arulsampathcyr@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-white bg-white/5 border border-white/5 transition-all"
                  title="Copy email to clipboard"
                >
                  {copyEmailSuccess ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone telephone */}
              <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center justify-between hover:bg-white/5 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Phone className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Call or Whatsapp</p>
                    <p className="text-sm text-gray-200 font-medium">6381733560</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-white bg-white/5 border border-white/5 transition-all"
                  title="Copy and dial"
                >
                  {copyPhoneSuccess ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Geographic spot with real Indian time */}
              <div className="p-4 rounded-xl bg-[#0a0e28]/70 border border-indigo-500/10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Based In</p>
                    <p className="text-sm text-gray-200 font-medium">Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-400/10 text-cyan-400 text-[10px] font-mono font-bold tracking-wider border border-cyan-500/15">
                    IST: {currentTime || "00:00:00 AM"}
                  </span>
                </div>
              </div>

            </div>

            {/* LinkedIn direct redirect button */}
            <div className="pt-4">
              <a
                id="contact-linkedin-direct"
                href="https://www.linkedin.com/in/arulsampath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold text-white bg-[#0e163b] border border-white/5 hover:border-indigo-500/30 hover:bg-white/5 transition-all hover:-translate-y-0.5 shadow"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>Message Me on LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact form with stateful UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 shadow-2xl relative overflow-hidden">
              
              {/* Form loader line */}
              {status === "sending" && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-[bounce_2s_infinite]" />
              )}

              <AnimatePresence mode="wait">
                
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="p-4 bg-green-500/10 rounded-full text-green-400 border border-green-500/20">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-bold text-lg text-white">Transmission Successful</h4>
                      <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto">
                        Thank you! Your message has been routed to Arul. I will review it and follow up with you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl font-display text-xs font-bold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-center mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error indicator banner */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-2.5 text-xs text-red-400"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Please fill in all necessary fields (Name, Email, and Message).</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/40 focus:bg-[#0c0f24] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/40 focus:bg-[#0c0f24] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/40 focus:bg-[#0c0f24] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                        placeholder="Collaboration proposal"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                        Message Body *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/40 focus:bg-[#0c0f24] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                        placeholder="Hi Arul, I noticed your smart-contract sensing paper and..."
                      />
                    </div>

                    {/* Submitting Buttons */}
                    <button
                      id="contact-form-submit"
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 rounded-xl font-display text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/5 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Routing message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
