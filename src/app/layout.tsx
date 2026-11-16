import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SpeechProvider } from "@/lib/speech";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Językowy Sprint – drugi język obcy od zera",
    template: "%s · Językowy Sprint",
  },
  description:
    "Zeszyt ćwiczeń online do samodzielnej nauki drugiego języka obcego – poziom A1 i A2, tak jak w szkole. Z lektorem, kluczem odpowiedzi i postępami.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={`${nunito.variable} ${baloo.variable} h-full antialiased`}>
      {/* suppressHydrationWarning: browser extensions often add classes to <body> */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <SpeechProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
            Językowy Sprint · nauka bez nauczyciela, krok po kroku · wymowa: syntezator mowy Twojej przeglądarki
          </footer>
        </SpeechProvider>
      </body>
    </html>
  );
}
