export default function Home() {
  return (
    <>
      <section className="container hero hero--center home-hero">
        <div className="panel panel--decor panel--side" style={{ padding: "40px 36px" }}>
          <div className="hero__grid">
            <div>
              <h1 className="hero-title fade-up">
                <span style={{ whiteSpace: "nowrap" }}>Plâtrerie chaleureuse</span>
                <br />
                et artisanale
              </h1>

              <p className="tagline fade-up delay-1" style={{ maxWidth: 620 }}>
                Le savoir-faire du plâtre au service du confort et de l’esthétique.
              </p>

              <p
                className="fade-up delay-2"
                style={{ marginTop: 12, color: "var(--text-muted)", maxWidth: 560 }}
              >
                Bas-Rhin et alentours — plâtrerie manuelle & mécanique, staff décoratif,
                puits de lumière LED, isolation intérieure, cloisons, enduits & peinture.
              </p>

              <div className="fade-up delay-3" style={{ marginTop: 20, display: "flex", gap: 12 }}>
                <a href="/prestations" className="btn btn--primary">
                  Nos prestations
                </a>
                <a href="/contact" className="btn btn--ghost">
                  Contact
                </a>
              </div>
            </div>

            <div className="blob scale-in" style={{ aspectRatio: "1 / 1", maxWidth: 420 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Travaux de plâtrerie"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "8px 0 40px" }}>
        <div className="panel" style={{ padding: 24 }}>
          <h2 className="fade-up" style={{ marginTop: 0, marginBottom: 6, color: "var(--brand)" }}>
            Nos engagements
          </h2>

          <ul className="bullets fade-up delay-1">
            <li>
              <strong>Finitions propres et durables</strong> sur chaque chantier
            </li>
            <li>
              <strong>Délais tenus</strong> et suivi transparent
            </li>
            <li>
              <strong>Chantier protégé</strong> et laissé propre
            </li>
            <li>
              <strong>Devis gratuit</strong> — envoyez simplement votre <strong>plan</strong>, nous
              répondons sous <strong>48&nbsp;heures</strong>
            </li>
          </ul>

          <div className="fade-up delay-2" style={{ marginTop: 16 }}>
            <a href="/contact" className="btn btn--primary">
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}