import PageReveal from "@/components/PageReveal";

export default function PresentationPage() {
  return (
    <>
      {/* Déclencheur de l’animation au chargement */}
      <PageReveal />

      <section className="container reveal" style={{ padding: "40px 0" }}>
        <div className="panel reveal-stagger" style={{ padding: "36px" }}>
          <div
            className="hero__grid"
            style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" }}
          >
            {/* Texte gauche */}
            <div>
              <h1 className="hero-title" style={{ marginBottom: 12 }}>
                Présentation
              </h1>

              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, textAlign: "justify" }}>
                Entreprise familiale fondée en 2016, nous intervenons dans tout le Bas-Rhin pour vos
                travaux de plâtrerie, d’isolation et d’aménagement intérieur. Fort d’une longue expérience
                dans le métier, notre fondateur a consacré toute sa carrière à la plâtrerie, développant
                un véritable savoir-faire artisanal. Reconnus pour notre travail minutieux et notre souci
                du détail, nous accordons une attention particulière à chaque chantier pour garantir un
                résultat soigné, durable et à la hauteur de vos attentes.
              </p>

              <div
                className="panel"
                style={{ padding: 16, marginTop: 18, borderRadius: "14px", background: "#fff" }}
              >
                <h2 style={{ fontSize: "1.1rem", margin: 0, color: "var(--brand)" }}>Nos valeurs</h2>
                <ul style={{ marginTop: 10, color: "var(--text-muted)", lineHeight: 1.7 }}>
                  <li>Finitions propres et durables</li>
                  <li>Suivi transparent</li>
                  <li>Chantier propre et protégé</li>
                  <li>Conseils techniques adaptés</li>
                </ul>
              </div>

              <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                <a href="/prestations" className="btn btn--primary">Découvrir nos prestations</a>
                <a href="/contact" className="btn btn--ghost">Nous contacter</a>
              </div>
            </div>

            {/* Image droite : carré avec le logo */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pp.jpeg"            /* ← adapte ici si besoin : /images/pp.jpg ou autre */
                alt="Présentation Plâtrerie Voltz"
                style={{
                  /* carré responsive : max 320px, sinon 40vw */
                  width: "min(320px, 40vw)",
                  height: "min(320px, 40vw)",
                  objectFit: "cover",
                  borderRadius: "14px",
                  /* bordure blanche discrète + ombre douce */
                  border: "4px solid #fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bloc secondaire */}
        <div className="container" style={{ marginTop: 24 }}>
          <div className="panel reveal-stagger" style={{ padding: 24 }}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Zone d’intervention</h3>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>
              Bas-Rhin et alentours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
