import { materialCategories } from "@/data/business";
import SectionTitle from "./SectionTitle";
import WhatsAppButton from "./WhatsAppButton";
import Icon from "./Icon";

export default function Products() {
  return (
    <section id="materiais" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Materiais de construção"
          title="Tudo para a sua obra em um só lugar"
          description="Do alicerce ao acabamento, além de móveis e eletrodomésticos para deixar o lar completo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materialCategories.map((category) => (
            <article
              key={category.title}
              className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={category.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {category.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-cloud p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted">
            A disponibilidade de produtos pode variar conforme estoque e
            fornecedores. Para preços e informações atualizadas, fale com a
            nossa equipe.
          </p>
          <div className="mt-6">
            <WhatsAppButton label="Consultar disponibilidade e preços" />
          </div>
        </div>
      </div>
    </section>
  );
}
