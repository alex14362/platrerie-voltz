import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Plâtrerie Voltz",
  description: "Artisan plâtrier dans le Bas-Rhin.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}