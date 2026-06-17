import { aboutCard, business } from "@/data/business";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="container-px grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Sobre"
            title="Há 30 anos construindo junto com a região"
            description={business.description}
          />
        </div>

        <div className="rounded-2xl border border-line bg-cloud p-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand">
            {business.shortName}
          </p>
          <ul className="space-y-4">
            {aboutCard.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                />
                <span className="text-base text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
