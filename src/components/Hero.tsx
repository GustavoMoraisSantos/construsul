import Image from "next/image";
import { business, heroBadges } from "@/data/business";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-28 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-px relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            {business.tagline}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            Materiais de construção e{" "}
            <span className="text-brand">construção civil</span> em Corumbataí
            do Sul
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Desde 1994, a Nova Construsul reúne tudo para a sua obra em um só
            lugar: materiais, móveis, eletrodomésticos e mão de obra de
            confiança para construir e reformar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#materiais"
              className="btn-primary text-nowrap text-center"
            >
              Ver materiais
            </a>
            <a
              href="#servicos"
              className="btn-secondary text-nowrap text-center"
            >
              Nossos serviços
            </a>
            <WhatsAppButton className="text-nowrap" />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:max-w-lg">
            {heroBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-xl border border-line bg-cloud px-4 py-3 text-sm font-medium text-ink flex items-center gap-2"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line shadow-xl">
            <Image
              src={business.storePhoto}
              alt={`Loja da ${business.name} em Corumbataí do Sul - PR`}
              width={866}
              height={515}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-3 py-2 shadow-md">
              <Image
                src={business.logo}
                alt={`Logo da ${business.name}`}
                width={241}
                height={100}
                className="h-7 w-auto object-contain sm:h-9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
