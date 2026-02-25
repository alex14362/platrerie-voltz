type Props = {
  title: string;
  accroche: string;
  paragraphs: string[];
  points: string[];
  heroImageUrl?: string;
};

export default function ServiceTemplate({
  title,
  accroche,
  paragraphs,
  points,
  heroImageUrl,
}: Props) {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="panel" style={{ padding: "28px 24px" }}>
        <div className="service-hero">
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>
              {title}
            </h1>

            <p style={{ color: "var(--text-muted)", fontSize: ".98rem" }}>
              {accroche}
            </p>

            <div style={{ marginTop: 18 }}>
              <a href="/contact" className="btn btn--primary">
                Contact
              </a>
            </div>
          </div>

          <div
            className="service-hero__image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImageUrl || "/hero.jpg"}
              alt={title}
              className="service-photo"
              style={{
                width: 300,
                height: 300,
                objectFit: "cover",
                borderRadius: 14,
                border: "4px solid #fff",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.15), inset 0 0 10px rgba(0,0,0,0.05)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container service-layout" style={{ marginTop: 28 }}>
        <div>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              style={{
                marginBottom: 14,
                color: "var(--text-muted)",
                fontSize: ".98rem",
                lineHeight: 1.7,
              }}
            >
              {text}
            </p>
          ))}

          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginTop: 22,
              marginBottom: 8,
            }}
          >
            Points forts
          </h2>

          <ul
            style={{
              color: "var(--text-muted)",
              fontSize: ".98rem",
              lineHeight: 1.7,
            }}
          >
            {points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>

        <aside className="panel service-side" style={{ padding: 18 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 8 }}>
            Zone d’intervention
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: ".95rem" }}>
            Bas-Rhin et alentours.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 16, marginBottom: 8 }}>
            Contact
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: ".95rem" }}>
            Tél :{" "}
            <a href="tel:0645374432">06 45 37 44 32</a>
            <br />
            Email :{" "}
            <a href="mailto:platrerie_voltz@yahoo.fr">
              platrerie_voltz@yahoo.fr
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}