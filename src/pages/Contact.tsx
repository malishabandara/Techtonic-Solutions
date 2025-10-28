import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'; // Added Send
import React, { FormEvent, useState } from 'react'; // Added React and FormEvent

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', // Use 'name' as in your new snippet
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const phoneNumber = "94XXXXXXXXX"; // Using number from old snippet, update if needed

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Using new, more detailed whatsapp message format
    const whatsappMessage = `New Contact Form Submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Using new input style but with purple focus
  const inputStyle = "w-full px-4 py-3 rounded-xl bg-black/30 text-white border-2 border-white/20 focus:border-purple-400 focus:outline-none transition-colors";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      // Using background image from previous version
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
      <div className="bg-black/60 min-h-screen">

        {/* Keeping new header section */}
      

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-4 font-serif">Send Us a Message</h2>
                {/* CHANGED: Gradient color to purple */}
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mb-6"></div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Have questions? Fill out the form and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className={inputStyle}
                    placeholder="Full Name *"
                  />
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className={inputStyle}
                    placeholder="Email Address *"
                  />
                  <input
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className={inputStyle}
                    placeholder="Phone Number *"
                  />
                  <input
                    type="text" name="subject" required value={formData.subject} onChange={handleChange}
                    className={inputStyle}
                    placeholder="Subject *"
                  />
                  <textarea
                    name="message" required value={formData.message} onChange={handleChange} rows={4}
                    className={`${inputStyle} resize-none`}
                    placeholder="Message *"
                  />
                  <button
                    type="submit"
                    // CHANGED: Button gradient to purple
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              </div>

              <div className="sticky top-24 h-fit">
                <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-4 font-serif">Contact Information</h2>
                  {/* CHANGED: Gradient color to purple */}
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mb-6"></div>
                  
                  <div className="space-y-4">
                    {/* UPDATED: Contact info from previous version */}
                    <InfoItem icon={<MapPin size={24} />} title="Our Address" lines={["02, Yaya 06, Nawa Nagaraya", "Madhingiriya, Sri Lanka"]} />
                    <InfoItem icon={<Phone size={24} />} title="Phone Numbers" lines={["+94 703592888", "+94 703862650"]} />
                    <InfoItem icon={<Mail size={24} />} title="Email" lines={["email@calicunatureceylon.com"]} />
                    <InfoItem icon={<Clock size={24} />} title="Working Hours" lines={["Mon - Sat: 8 AM - 6 PM", "Sunday: Closed"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10">
              <iframe
                src="http://googleusercontent.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Ceylon Tea Collection Location"
              ></iframe>
            </div>
          </div>
        </section> */}

      </div>
    </div>
  );
}

// CHANGED: InfoItem icon color to purple
const InfoItem = ({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-purple-400/20 p-3 rounded-full text-purple-400">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <div className="text-gray-300 leading-relaxed">
        {lines.map(line => <div key={line}>{line}</div>)}
      </div>
    </div>
  </div>
);

