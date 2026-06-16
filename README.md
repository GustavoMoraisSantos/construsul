# Nova Construsul — Landing Page

Landing page institucional one-page da **Nova Construsul**, loja de materiais de construção e prestadora de serviços de construção civil em Corumbataí do Sul - PR. Atua desde 1994, vendendo também móveis e eletrodomésticos.

Construída em **Next.js (App Router) + TypeScript + Tailwind CSS**. Sem banco de dados, sem backend, sem CMS — pronta para deploy em Vercel, Netlify ou hospedagem estática compatível.

## Tecnologias

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Pré-requisitos

- Node.js 18.18+ (recomendado 20+)
- npm

## Como instalar as dependências

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Como gerar o build de produção

```bash
npm run build
npm run start
```

## Estrutura do projeto

```txt
src/
  app/
    layout.tsx         # Metadata/SEO + fonte + html base
    page.tsx           # Monta a landing page (ordem das seções)
    globals.css        # Estilos globais + utilitários Tailwind
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Differentials.tsx
    Products.tsx        # Seção "Materiais de construção"
    Services.tsx        # Seção "Construção civil"
    SocialProof.tsx     # Faixa com avaliações do Google
    Gallery.tsx
    Location.tsx
    Contact.tsx
    Footer.tsx
    SectionTitle.tsx
    WhatsAppButton.tsx
    FloatingWhatsApp.tsx
    Icon.tsx            # Ícones SVG das categorias/serviços
  data/
    business.ts         # Todos os dados editáveis da empresa
public/
  logo-nova-construsul.png  # Logo da marca
  loja-nova-construsul.jpg  # Foto real da loja
```

## Onde editar os dados da empresa

Todos os textos e informações comerciais estão centralizados em
[`src/data/business.ts`](src/data/business.ts). Edite ali:

- Nome, segmento, tagline e descrição
- Endereço completo e CEP
- Telefone e WhatsApp (número + mensagem pré-preenchida)
- Instagram e Facebook
- Número de avaliações do Google
- Diferenciais (`differentials`)
- Categorias de materiais (`materialCategories`)
- Serviços de construção civil (`serviceItems`)
- Cards da galeria (`galleryItems`)
- Itens dos menus, badges do hero e card "Sobre"

Evite alterar textos direto nos componentes — prefira sempre o `business.ts`.

> **A confirmar com o cliente:** número de WhatsApp (hoje usa o telefone fixo
> (44) 3277-1197), horário de funcionamento completo e a lista exata de
> categorias de materiais e serviços prestados.

## Onde trocar a logo

Substitua o arquivo `public/logo-nova-construsul.png` mantendo o **mesmo nome**.
Se quiser usar outro nome/caminho, atualize o campo `logo` em
`src/data/business.ts`.

## Onde configurar o mapa

O mapa é um `iframe` do Google Maps. A URL fica em `business.map.embedUrl` em
[`src/data/business.ts`](src/data/business.ts).

Para trocar: no Google Maps, busque o endereço → **Compartilhar** →
**Incorporar um mapa** → copie o valor do atributo `src` do iframe e cole em
`embedUrl`. O embed público padrão **não exige chave de API**.

## Onde adicionar fotos reais na galeria

A seção de galeria (`src/components/Gallery.tsx`) já usa a foto real da fachada e
mantém cards placeholders para novas imagens. Para adicionar mais fotos:

1. Adicione os arquivos em `public/` (ex.: `public/galeria/obra.jpg`).
2. Substitua um card placeholder por `<Image src="/galeria/obra.jpg" alt="..." ... />`.
3. Sempre inclua o atributo `alt` descritivo.

## Variáveis de ambiente (opcional)

- `NEXT_PUBLIC_SITE_URL`: URL pública do site, usada como base das imagens de
  Open Graph (ex.: `https://novaconstrusul.com.br`). Se não definida, usa um
  valor padrão.

## Deploy

O projeto é compatível com Vercel/Netlify (deploy direto do repositório). Para
hospedagem estática, gere o build com `npm run build`.
