import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-px">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-extrabold">
              <span className="text-brand">Nova</span> Construsul
            </p>
            <p className="mt-1 text-sm text-white/60">{business.segment}</p>
            <p className="mt-4 text-sm text-white/70">{business.address.full}</p>
            <p className="mt-1 text-sm text-white/70">
              Telefone: {business.phone.display}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Redes sociais
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={business.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram: {business.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Facebook: {business.social.facebook.handle}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: {business.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-center">
          <p className="text-sm font-medium text-white/70">
            Desde 1994 valorizando lares em Corumbataí do Sul - PR.
          </p>
          <p className="text-xs text-white/50">
            Site institucional desenvolvido para apresentação comercial da empresa.
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {business.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
