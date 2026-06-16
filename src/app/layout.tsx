import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Nova Construsul | Materiais de Construção e Construção Civil - Corumbataí do Sul - PR";
const description =
  "Nova Construsul: materiais de construção, móveis, eletrodomésticos e serviços de construção civil em Corumbataí do Sul - PR. Desde 1994 valorizando lares.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novaconstrusul.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Nova Construsul",
    "Materiais de construção Corumbataí do Sul",
    "Construção civil Corumbataí do Sul",
    "Loja de materiais de construção Paraná",
    "Móveis e eletrodomésticos Corumbataí do Sul",
    "Construsul",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    images: [
      {
        url: business.logo,
        alt: `Logo da ${business.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
