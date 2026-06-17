import { business } from "@/data/business";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.26L21.5 9l-5 4.6L18 21l-6-3.4L6 21l1.5-7.4-5-4.6 6.6-.74L12 2Z" />
    </svg>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-brand py-14 text-white">
      <div className="container-px flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="flex items-center justify-center gap-1 text-gold md:justify-start">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="mt-3 text-2xl font-extrabold sm:text-3xl">
            {business.google.reviews} avaliações no Google
          </p>
          <p className="mt-1 text-sm text-white/80">
            Clientes de Corumbataí do Sul e região confiam na Nova Construsul.
          </p>
        </div>

        <a
          href={business.google.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-cloud"
        >
          Ver avaliações no Google
        </a>
      </div>
    </section>
  );
}
