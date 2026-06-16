/**
 * Dados editáveis da empresa.
 *
 * Centralize aqui todas as informações comerciais (nome, contatos, textos,
 * diferenciais, materiais, serviços e mapa). Os componentes consomem este
 * arquivo, então para atualizar o site basta editar os valores abaixo.
 */

// IMPORTANTE: confirmar o número de WhatsApp da loja.
// O telefone (44) 3277-1197 é fixo; se houver um celular/WhatsApp dedicado,
// troque o "whatsappNumber" abaixo (formato: 55 + DDD + número, só dígitos).
const whatsappNumber = "554432771197";
const whatsappMessage =
  "Olá! Vim pelo site da Nova Construsul e gostaria de mais informações.";

export const business = {
  name: "Nova Construsul",
  shortName: "Nova Construsul",
  segment: "Materiais de construção e construção civil",
  foundedYear: 1994,
  tagline: "Desde 1994 valorizando lares",
  description:
    "A Nova Construsul atua desde 1994 em Corumbataí do Sul - PR, oferecendo materiais de construção, móveis e eletrodomésticos, além de serviços de construção civil. São mais de 30 anos ajudando famílias da região a construir, reformar e mobiliar seus lares, sempre com atendimento próximo e de confiança.",

  // Logo: substitua o arquivo em /public/logo-nova-construsul.png mantendo o nome.
  logo: "/logo-nova-construsul.png",
  // Foto real da loja em /public/loja-nova-construsul.jpg
  storePhoto: "/loja-nova-construsul.jpg",

  address: {
    street: "R. Guarani, 656",
    district: "Centro",
    city: "Corumbataí do Sul",
    state: "PR",
    zip: "86970-000",
    get full() {
      return `${this.street} - ${this.district}, ${this.city} - ${this.state}, ${this.zip}`;
    },
  },

  phone: {
    display: "(44) 3277-1197",
    raw: "554432771197",
  },

  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    get url() {
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    },
  },

  google: {
    reviews: "4.532",
    // Link para o perfil/avaliações no Google Maps.
    url: "https://www.google.com/maps/search/?api=1&query=Nova+Construsul+Corumbata%C3%AD+do+Sul",
  },

  social: {
    instagram: {
      handle: "@novaconstrusul_",
      url: "https://www.instagram.com/novaconstrusul_/",
    },
    facebook: {
      handle: "Nova Construsul",
      url: "https://www.facebook.com/nova.construsul.9/",
    },
  },

  /**
   * Mapa incorporado (Google Maps).
   * Troque a URL abaixo pelo src do iframe gerado em "Compartilhar > Incorporar um mapa".
   * Não é necessária chave de API para o embed público padrão do Google Maps.
   */
  map: {
    embedUrl:
      "https://www.google.com/maps?q=R.+Guarani,+656+-+Corumbatai+do+Sul+-+PR,+86970-000&output=embed",
    label: "Mapa da localização da Nova Construsul em Corumbataí do Sul - PR",
  },

  openingHours: "Segunda a sábado · fecha às 18:00 (confirmar horários completos).",
} as const;

export const differentials = [
  {
    icon: "award",
    title: "30 anos de tradição",
    text: "Desde 1994 valorizando lares em Corumbataí do Sul e região.",
  },
  {
    icon: "store",
    title: "Tudo em um só lugar",
    text: "Materiais de construção, móveis, eletrodomésticos e mão de obra para a sua obra.",
  },
  {
    icon: "handshake",
    title: "Atendimento próximo",
    text: "Equipe que conhece o cliente e acompanha do orçamento à entrega.",
  },
  {
    icon: "star",
    title: "Referência na região",
    text: "Mais de 4.500 avaliações no Google de clientes satisfeitos.",
  },
] as const;

/** Categorias de materiais (confirmar conforme o estoque real da loja). */
export const materialCategories = [
  {
    icon: "bag",
    title: "Material básico",
    text: "Cimento, areia, brita, cal e argamassa para a estrutura da obra.",
  },
  {
    icon: "tile",
    title: "Acabamentos",
    text: "Pisos, revestimentos, louças, metais e tintas.",
  },
  {
    icon: "pipe",
    title: "Hidráulica e elétrica",
    text: "Tubos, conexões, fios e materiais elétricos em geral.",
  },
  {
    icon: "tools",
    title: "Ferramentas e ferragens",
    text: "Ferramentas, fixadores e itens de ferragem.",
  },
  {
    icon: "roof",
    title: "Telhas e cobertura",
    text: "Telhas, estruturas e materiais para cobertura.",
  },
  {
    icon: "sofa",
    title: "Móveis e eletrodomésticos",
    text: "Móveis e eletrodomésticos para mobiliar e equipar o lar.",
  },
] as const;

/** Serviços de construção civil (confirmar quais a empresa presta). */
export const serviceItems = [
  {
    icon: "building",
    title: "Construção e reforma",
    text: "Execução de obras, reformas e ampliações residenciais e comerciais.",
  },
  {
    icon: "helmet",
    title: "Mão de obra e empreitada",
    text: "Equipe para serviços de construção civil em geral.",
  },
  {
    icon: "truck",
    title: "Entrega de materiais",
    text: "Entrega dos produtos direto na sua obra na cidade e região.",
  },
  {
    icon: "clipboard",
    title: "Orçamento e consultoria",
    text: "Orientação para planejar a obra e comprar o material certo.",
  },
] as const;

export const galleryItems = [
  {
    title: "Móveis e eletrodomésticos",
    text: "Linha de móveis e eletrodomésticos disponível na loja.",
  },
  {
    title: "Materiais de construção",
    text: "Variedade de materiais para todas as etapas da obra.",
  },
  {
    title: "Ferramentas e ferragens",
    text: "Ferramentas e ferragens para profissionais e para casa.",
  },
] as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Materiais", href: "#materiais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Loja", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;

export const aboutCard = [
  "Fundada em 1994",
  "Corumbataí do Sul - PR",
  "Materiais de construção + construção civil",
  "Móveis e eletrodomésticos",
] as const;

export const heroBadges = [
  "Desde 1994",
  "+4.500 avaliações no Google",
  "Materiais + mão de obra",
  "Corumbataí do Sul - PR",
] as const;
