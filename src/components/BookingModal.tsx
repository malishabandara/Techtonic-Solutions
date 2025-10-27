import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '',
    fullName: '',
    email: '',
    company: '',
    phonePrefix: '+94',
    phoneNumber: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
🗓️ *Transformation Readiness Assessment - Booking Request*

📅 Date: ${formData.date}
⏰ Time Slot: ${formData.timeSlot}
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
🏢 Company: ${formData.company}
📱 Phone: ${formData.phonePrefix}${formData.phoneNumber}

💬 Message:
${formData.message}
    `.trim();

    const phoneNumber = '94XXXXXXXXX'; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    onClose();
    setFormData({
      date: '',
      timeSlot: '',
      fullName: '',
      email: '',
      company: '',
      phonePrefix: '+94',
      phoneNumber: '',
      message: '',
    });
  };

  const inputStyle =
    'w-full py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 hover:bg-gray-200"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Book Your Free Exploratory Call
              </h2>
              <p className="text-gray-500 mb-6">
                Schedule a consultation to discuss your transformation needs.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Date and Time Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className={`${inputStyle} pl-10 pr-4`}
                        required
                      />
                    </div>
                  </div>

                  {/* Time Slot Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                      className={`${inputStyle} px-4`}
                      required
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Full Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`${inputStyle} pl-10 pr-4`}
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`${inputStyle} pl-10 pr-4`}
                      required
                    />
                  </div>
                </div>

                {/* Company Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={`${inputStyle} pl-10 pr-4`}
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex items-center space-x-2">
                    {/* Country Code Select */}
                    <div className="relative w-[90px]">
                      <select
                        value={formData.phonePrefix}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phonePrefix: e.target.value,
                          })
                        }
                        className="w-full py-2.5 px-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                      >
                        <option value="+94">+94</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+971">+971</option>
                      </select>
                    </div>

                    {/* Phone Input */}
                    <div className="relative flex-1">
                      <Phone
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        className={`${inputStyle} pl-10 pr-4`}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className={`${inputStyle} px-4`}
                    placeholder="Tell us about your transformation needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Book Now via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
