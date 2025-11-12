"use client";
import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";

export function ReservationSection() {
  return (
    <section className="px-8 md:px-12 lg:px-16 py-24 border-t border-[var(--color-charcoal)] border-opacity-10">
      <div className="grid grid-cols-12 gap-8">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-6 space-y-12"
        >
          <div>
            <h3 className="mb-8">Visit Us</h3>
            <p className="opacity-70 mb-12">
              Reservations recommended for weekend brunch. 
              Walk-ins welcome based on availability.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-[var(--color-sage)] mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="mb-2">LOCATION</h4>
                <small className="opacity-70">
                  Jehan Numa Palace Hotel<br />
                  157 Shamla Hills<br />
                  Bhopal, Madhya Pradesh 462013
                </small>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-[var(--color-sage)] mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="mb-2">HOURS</h4>
                <small className="opacity-70">
                  Monday — Sunday<br />
                  08:00 — 22:00
                </small>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-[var(--color-sage)] mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h4 className="mb-2">CONTACT</h4>
                <small className="opacity-70">
                  +91 755 266 1100<br />
                  cafechino@jehanuma.com
                </small>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reservation Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="border border-[var(--color-charcoal)] border-opacity-10 p-8 md:p-12">
            <h4 className="mb-8">REQUEST RESERVATION</h4>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <small className="block mb-2 opacity-60">NAME</small>
                  <input 
                    type="text" 
                    className="w-full border-b border-[var(--color-charcoal)] border-opacity-20 bg-transparent pb-2 focus:outline-none focus:border-opacity-60 transition-colors duration-200"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <small className="block mb-2 opacity-60">PHONE</small>
                  <input 
                    type="tel" 
                    className="w-full border-b border-[var(--color-charcoal)] border-opacity-20 bg-transparent pb-2 focus:outline-none focus:border-opacity-60 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <small className="block mb-2 opacity-60">DATE</small>
                  <input 
                    type="date" 
                    className="w-full border-b border-[var(--color-charcoal)] border-opacity-20 bg-transparent pb-2 focus:outline-none focus:border-opacity-60 transition-colors duration-200"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <small className="block mb-2 opacity-60">TIME</small>
                  <input 
                    type="time" 
                    className="w-full border-b border-[var(--color-charcoal)] border-opacity-20 bg-transparent pb-2 focus:outline-none focus:border-opacity-60 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <small className="block mb-2 opacity-60">GUESTS</small>
                <select className="w-full border-b border-[var(--color-charcoal)] border-opacity-20 bg-transparent pb-2 focus:outline-none focus:border-opacity-60 transition-colors duration-200">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              <div>
                <small className="block mb-2 opacity-60">SPECIAL REQUESTS</small>
                <textarea 
                  rows={3}
                  className="w-full border border-[var(--color-charcoal)] border-opacity-20 bg-transparent p-3 focus:outline-none focus:border-opacity-60 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: "linear" }}
                type="submit"
                className="w-full border border-[var(--color-charcoal)] py-4 hover:bg-[var(--color-charcoal)] hover:text-[var(--color-marble)] transition-colors duration-200"
              >
                SUBMIT REQUEST
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
