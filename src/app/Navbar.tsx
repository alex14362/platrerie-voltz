"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisa­tions", href: "/realisations" },
  { label: "Présentation", href: "/presentation" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const SERVICES = [
  { label: "Plâtrerie manuelle et mécanique", href: "/prestations/platrerie" },
  { label: "Staff décoratif et corniches en plâtre", href: "/prestations/staff" },
  { label: "Puits de lumière LED", href: "/prestations/puits-lumiere" },
  { label: "Isolation intérieure (combles et murs)", href: "/prestations/isolation" },
  { label: "Cloison et murs de séparation", href: "/prestations/cloisons" },
  { label: "Enduit à joint et finition", href: "/prestations/enduits" },
  { label: "Peinture intérieure et ponçage", href: "/prestations/peinture" },
];

export default function Navbar() {
  // mobile
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // hover stable desktop
  const [hoverOpen, setHoverOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setHoverOpen(true); };
  const closeMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverOpen(false), 120);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Logo + nom */}
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="Plâtrerie Voltz" width={40} height={40} />
          <span>Plâtrerie Voltz</span>
        </Link>

        {/* NAV desktop */}
        <nav className="nav">
          {NAV.map((item) => {
            if (item.label === "Prestations") {
              return (
                <div
                  key={item.label}
                  className="dropdown"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <Link href={item.href} className="dropdown__btn">
                    {item.label} <span>▾</span>
                  </Link>
                  <div className="dropdown__bridge">
                    <div className="submenu" style={{opacity: hoverOpen ? 1 : 0, visibility: hoverOpen ? "visible" as const : "hidden"}}>
                      <ul className="submenu__grid">
                        {SERVICES.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href}>{s.label}</Link>
                          </li>
                        ))}
                      </ul>
                      <div className="submenu__footer">
                        <Link href="/prestations">Tout voir</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bouton mobile */}
        <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label="Ouvrir le menu">☰</button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="mobile">
          <div className="container">
            <div>
              <button onClick={() => setServicesOpen(v => !v)} style={{width:"100%", textAlign:"left", padding:"12px 16px"}}>
                Prestations {servicesOpen ? "▴" : "▾"}
              </button>
              {servicesOpen && (
                <div style={{padding:"0 0 8px 8px"}}>
                  <ul>
                    {SERVICES.map(s => (
                      <li key={s.href}>
                        <Link href={s.href} onClick={() => setOpen(false)}>{s.label}</Link>
                      </li>
                    ))}
                    <li style={{marginTop:8}}>
                      <Link href="/prestations" onClick={() => setOpen(false)}>Tout voir</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {NAV.filter(n => n.label !== "Prestations").map(item => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
