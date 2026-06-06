import React from "react";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import Logo from "../components/Logo.jsx";
import { siteConfig, navLinks } from "../data/site.js";
import { services } from "../data/services.js";

const socialLinks = [
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy-700/40 bg-navy-900">
      <div className="absolute inset-0 opacity-30" />
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold-600/10 blur-[140px]" />

      <Container className="relative">
        <div className="grid gap-12 py-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-400">
              Flow fix technical &amp; MEP works LLC is a Dubai Municipality
              approved contractor delivering HVAC, electrical, plumbing, fire
              fighting and ELV systems for buildings across the UAE.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/30 bg-navy-800/50 text-navy-300 cursor-not-allowed"
                >
                  <Icon className="text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-400">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-navy-400">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 shrink-0 text-base text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineEnvelope className="mt-0.5 shrink-0 text-base text-gold" />
                <div className="flex flex-col">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email2}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.email2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-base text-gold" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone2}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.phone2}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-700/40 py-6 text-center text-sm text-navy-400">
          <p>
            Copyright © flowfix | Designed by tarah.ae Built with{" "}
            <svg
              className="w-4 h-4 inline"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="2" fill="#61DAFB" />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
          </p>
        </div>
      </Container>
    </footer>
  );
}
