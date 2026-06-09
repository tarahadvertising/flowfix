import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineClock,
  HiArrowUpRight,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { siteConfig } from "../data/site.js";
import {
  fadeUp,
  stagger,
  viewportOnce,
  slideInLeft,
  slideInRight,
} from "../utils/motion.js";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};
export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Tell us a little more";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // demo only — wire up to backend / form service in production
    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 5000);
  };
  const items = [
    { icon: HiOutlineMapPin, label: "Visit Us", value: siteConfig.address },
    {
      icon: HiOutlineEnvelope,
      label: "Email Us",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: HiOutlinePhone,
      label: "Call Us",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: HiOutlineClock,
      label: "Working Hours",
      value: "Mon — Fri · 08:00 to 19:00",
    },
  ];

  return (
    <section id="contact" className="section-pad relative bg-white">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get Your MEP"
          highlight="Quote Today"
          description="Share your project details and a Flow fix MEP engineer will respond within one business day with a competitive proposal."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* details */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-navy-200/60 bg-navy-50/50 p-8">
              <h3 className="font-display text-2xl font-medium text-navy-900">
                Reach our team
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">
                Prefer a direct conversation? Use any of the channels below —
                we're available across time zones.
              </p>

              <ul className="mt-8 space-y-5">
                {items.map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-600/10 text-gold ring-1 ring-gold/20">
                      <it.icon className="text-xl" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-navy-400">
                        {it.label}
                      </div>
                      {it.href ? (
                        <a
                          href={it.href}
                          className="mt-1 block font-display text-base font-semibold text-navy-900 transition-colors hover:text-gold"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <div className="mt-1 font-display text-base font-semibold text-navy-900">
                          {it.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/[0.04] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">
                  Response SLA
                </div>
                <div className="mt-2 font-display text-lg font-medium text-navy-900">
                  Senior engineer reply &lt; 1 business day
                </div>
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={onSubmit}
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl border border-navy-200/60 bg-white p-8 lg:col-span-7 shadow-sm"
            noValidate
          >
            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-5 md:grid-cols-2"
            >
              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="form-input"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  className="form-input"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 (415) 555-0142"
                  className="form-input"
                />
              </Field>
              <Field label="Company">
                <input
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Company Inc."
                  className="form-input"
                />
              </Field>
              <Field
                label="Message"
                error={errors.message}
                className="md:col-span-2"
              >
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your project, scope, location & timing…"
                  className="form-input resize-none"
                />
              </Field>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center justify-between gap-4"
            >
              <p className="text-xs text-navy-400">
                By submitting, you agree to our privacy policy. We never share
                data.
              </p>
              <button type="submit" className="btn-primary group">
                <span>Send Message</span>
                <HiArrowUpRight className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-sm font-semibold text-gold"
              >
                <HiOutlineCheckCircle className="text-base" />
                Thanks — your message is on its way. We'll respond within one
                business day.
              </motion.div>
            )}
          </motion.form>
        </div>
      </Container>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(203, 213, 225, 0.4);
          color: #0F172A;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 14px;
          transition: all .25s ease;
          outline: none;
        }
        .form-input::placeholder { color: rgba(100, 116, 139, 0.6); }
        .form-input:focus {
          border-color: rgba(245, 158, 11, 0.6);
          background: rgba(255, 255, 255, 0.95);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <motion.label
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`block ${className}`}
    >
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
        {label}
        {error ? <span className="ml-2 text-gold">{error}</span> : null}
      </span>
      {children}
    </motion.label>
  );
}
