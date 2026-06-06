import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import {
  HiOutlineStar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  const swiperRef = React.useRef(null);

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden bg-navy-50"
    >
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          highlight="about Flow fix"
          description="A short selection of leaders who have partnered with Flow fix to engineer measurable performance gains."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSwiper={(s) => (swiperRef.current = s)}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <article className="relative rounded-3xl glass-strong gold-border p-8 md:p-12">
                  <FaQuoteLeft className="text-3xl text-gold/60" />
                  <p className="mt-6 font-display text-xl leading-relaxed text-silver-100 md:text-2xl">
                    “{t.quote}”
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-silver-100/10 pt-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-14 w-14 rounded-full border-2 border-gold/40 object-cover"
                      />
                      <div>
                        <div className="font-display text-base font-bold text-silver-100">
                          {t.name}
                        </div>
                        <div className="text-sm text-silver-500">{t.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className="text-lg fill-current"
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-silver-500">
                        {t.rating}.0
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* nav buttons */}
          <div className="absolute -top-4 right-0 hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200/60 bg-white text-navy-600 transition hover:border-gold/40 hover:text-gold"
            >
              <HiOutlineChevronLeft className="text-lg" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200/60 bg-white text-navy-600 transition hover:border-gold/40 hover:text-gold"
            >
              <HiOutlineChevronRight className="text-lg" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
