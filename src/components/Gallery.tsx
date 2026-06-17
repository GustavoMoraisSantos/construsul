import Image from "next/image";
import { business, galleryItems } from "@/data/business";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Nossa loja"
          title="Conheça a Nova Construsul"
          description="Estamos no centro de Corumbataí do Sul, prontos para atender você. Em breve mais fotos da loja, dos produtos e das obras realizadas."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <figure className="relative overflow-hidden rounded-2xl border border-line shadow-sm lg:col-span-2">
            <Image
              src={business.storePhoto}
              alt={`Fachada da loja ${business.name}`}
              width={866}
              height={515}
              className="h-full max-h-[420px] w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm font-medium text-white">
              Loja Nova Construsul — Corumbataí do Sul - PR
            </figcaption>
          </figure>

          <div className="grid gap-6">
            {galleryItems.map((item) => (
              <figure
                key={item.title}
                className="flex flex-col justify-end rounded-2xl border border-dashed border-line bg-cloud p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand/30 text-brand"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="1.6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <figcaption>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
