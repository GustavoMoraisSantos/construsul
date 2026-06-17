import { differentials } from "@/data/business";
import SectionTitle from "./SectionTitle";
import Icon from "./Icon";

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-cloud py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Por que escolher a Nova Construsul"
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
