import { serviceItems } from "@/data/business";
import SectionTitle from "./SectionTitle";
import WhatsAppButton from "./WhatsAppButton";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="servicos" className="bg-cloud py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Construção civil"
          title="Serviços para tirar a obra do papel"
          description="Além de vender o material, a Nova Construsul também executa e acompanha a sua obra."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-brand/20 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-base font-medium text-ink">
            Precisa de mão de obra ou de um orçamento para a sua obra? Fale com a
            nossa equipe e receba um atendimento personalizado.
          </p>
          <WhatsAppButton label="Solicitar orçamento de obra" />
        </div>
      </div>
    </section>
  );
}
