"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/business";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const total = galleryItems.length;

  const goTo = useCallback(
    (index: number) => setCurrent((index + total) % total),
    [total],
  );
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="galeria" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Nossa loja"
          title="Conheça a Nova Construsul"
          description="Materiais, estruturas e obras: confira um pouco do que a Nova Construsul oferece para a sua construção."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line shadow-sm">
            {galleryItems.map((item, index) => (
              <figure
                key={item.image}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index === current ? undefined : true}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                  priority={index === 0}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 bg-black/25 to-transparent p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                    {item.text}
                  </p>
                </figcaption>
              </figure>
            ))}

            <button
              type="button"
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-ink shadow-md transition-colors hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-ink shadow-md transition-colors hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            {galleryItems.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir para a imagem ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === current
                    ? "w-7 bg-brand"
                    : "w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
