import PageReveal from "@/components/PageReveal";
import Link from "next/link";

export default function PrestationsPage() {
  const services = [
    { name: "Plâtrerie manuelle et mécanique", href: "/prestations/platrerie" },
    { name: "Staff décoratif et corniches en plâtre", href: "/prestations/staff" },
    { name: "Puits de lumière LED", href: "/prestations/puits-lumiere" },
    { name: "Isolation intérieure (combles et murs)", href: "/prestations/isolation" },
    { name: "Cloison et murs de séparation", href: "/prestations/cloisons" },
    { name: "Enduit à joint et finition", href: "/prestations/enduits" },
    { name: "Peinture intérieure et ponçage", href: "/prestations/peinture" },
  ];

  return (
    <>
      {/* Déclencheur de l’animation */}
      <PageReveal />

      <section className="min-h-[50vh] container reveal" style={{ padding: "40px 0" }}>
        <h1 className="hero-title" style={{ marginBottom: "1rem" }}>
          Nos prestations
        </h1>

        <p className="mb-6" style={{ color: "var(--text-muted)" }}>
          Découvrez l’ensemble de nos services de plâtrerie.
          Cliquez sur une prestation pour en savoir plus.
        </p>

        <ul
          className="services-list grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-stagger"
          style={{
            paddingLeft: 0,
            listStyle: "none", // ✅ empêche les flèches héritées
          }}
        >
          {services.map((s) => (
            <li
              key={s.href}
              style={{
                position: "relative",
                background: "#fff",
                border: "1px solid #e6dfd3",
                borderRadius: "14px",
                padding: "18px 20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <Link
                href={s.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <h2 style={{ color: "var(--brand)", fontWeight: 700, marginBottom: "8px" }}>
                  {s.name}
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Voir la fiche détaillée
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
