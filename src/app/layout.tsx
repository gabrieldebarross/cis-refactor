import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({
  subsets: []
})

export const metadata: Metadata = {
  title: "Cis-Comcam",
  description: "Nasceu da união dos municípios que integram a COMCAM (Comunidade dos Municípios da Região de Campo Mourão) para atender à necessidade de prestar serviços de saúde de qualidade à população de menor renda.",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DynamicTitle />
        {children}
      </body>
    </html>
  );
}
