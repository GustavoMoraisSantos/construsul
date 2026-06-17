import { business } from "@/data/business";
import SectionTitle from "./SectionTitle";

function ContactLink({
  href,
  label,
  sublabel,
  children,
}: {
  href: string;
  label: string;
  sublabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-colors hover:border-brand/40"
    >
      <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        {children}
      </span>
      <span>
        <span className="block text-base font-semibold text-ink">{label}</span>
        <span className="block text-sm text-muted">{sublabel}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Contato"
          title="Fale com a Nova Construsul"
          description="Entre em contato para orçamentos, disponibilidade de materiais, serviços de obra e atendimento em Corumbataí do Sul e região."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactLink
            href={business.whatsapp.url}
            label="WhatsApp"
            sublabel={business.phone.display}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.473-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
            </svg>
          </ContactLink>

          <ContactLink
            href={`tel:+${business.phone.raw}`}
            label="Telefone"
            sublabel={business.phone.display}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5c0 8.284 6.716 15 15 15a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-.8-.98l-3.4-.68a1 1 0 0 0-1 .42l-.9 1.2a12 12 0 0 1-5.08-5.08l1.2-.9a1 1 0 0 0 .42-1l-.68-3.4A1 1 0 0 0 8.5 3H6a2 2 0 0 0-2 2Z" />
            </svg>
          </ContactLink>

          <ContactLink
            href={business.social.instagram.url}
            label="Instagram"
            sublabel={business.social.instagram.handle}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </ContactLink>

          <ContactLink
            href={business.social.facebook.url}
            label="Facebook"
            sublabel={business.social.facebook.handle}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
            </svg>
          </ContactLink>
        </div>
      </div>
    </section>
  );
}
