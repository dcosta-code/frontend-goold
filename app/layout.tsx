import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import ClientLayout from "@/lib/client-layout";
import { QueryProvider } from "@/lib/query-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Gold Spell Admin",
  description: "Login Admin - Gold Spell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <QueryProvider>
            <ClientLayout>{children}</ClientLayout>
          </QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
