"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Présentation", href: "/presentation" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const SERVICES = [
  { label: "Plâtrerie manuelle et mécanique", href: "/prestations/platrerie" },
  { label: "Staff décoratif et corniches en plâtre", href: "/prestations/staff" },
  { label: "Puits de lumière LED", href: "/prestations/puits-lumiere" },
  { label: "Isolation intérieure", href: "/prestations/isolation" },
  { label: "Cloisons et séparations", href: "/prestations/cloisons" },
  { label: "Enduits & finitions", href: "/prestations/enduits" },
  { label: "Peinture intérieure", href: "/prestations/peinture" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // dropdown desktop
  const [hoverOpen, setHoverOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setHoverOpen(true);
  };

  const closeMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setHoverOpen(false), 120);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Logo */}
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="Plâtrerie Voltz" width={40} height={40} />
          <span>Plâtrerie Voltz</span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="nav nav-desktop">
          {NAV.map((item) =>
            item.label === "Prestations" ? (
              <div
                key="prestations"
                className="dropdown"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <Link href="/prestations" className="dropdown__btn">
                  Prestations ▾
                </Link>

                <div
                  className="submenu"
                  style={{
                    opacity: hoverOpen ? 1 : 0,
                    visibility: hoverOpen ? "visible" : "hidden",
                  }}
                >
                  <ul>
                    {SERVICES.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/prestations" className="submenu__all">
                    Tout voir
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* BURGER MOBILE */}
        <button
          className="burger-mobile"
          onClick={() => {
            setOpen(!open);
            setServicesOpen(false);
          }}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="mobile-menu">
          <div className="container">
            <button
              className="mobile-item mobile-prestations"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Prestations {servicesOpen ? "▴" : "▾"}
            </button>

            {servicesOpen && (
              <ul className="mobile-sub">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} onClick={() => setOpen(false)}>
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/prestations" onClick={() => setOpen(false)}>
                    → Toutes les prestations
                  </Link>
                </li>
              </ul>
            )}

            {NAV.filter((n) => n.label !== "Prestations").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-item"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
