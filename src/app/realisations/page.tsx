"use client";

import { useMemo, useState } from "react";

type Phase = "Avant" | "Pendant" | "Après" | null;

type Photo = {
  src: string;
  alt: string;
  tags: string[];
  phase?: Phase;
};

const PHOTOS: Photo[] = [
  // ===== ISOLATION =====
  {
    src: "/images/realisations/isolation-avant1.jpg",
    alt: "Isolation des combles avant travaux",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-avant2.jpg",
    alt: "Isolation des rampants avant pose",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-pendant1.jpg",
    alt: "Isolation en cours avec pose de l’isolant",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-pendant2.jpg",
    alt: "Pose du pare-vapeur pendant l’isolation",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-pendant3.jpeg",
    alt: "Isolation plafond avec pare-vapeur",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-pendant4.jpeg",
    alt: "Isolation intérieure avec passage des gaines",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-pendant5.jpeg",
    alt: "Isolation plafond en cours avant fermeture",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-apres1.jpg",
    alt: "Isolation des combles terminée",
    tags: ["Isolation"],
  },
  {
    src: "/images/realisations/isolation-apres2.jpg",
    alt: "Finition isolation",
    tags: ["Isolation"],
  },

  // ===== CLOISONS =====
  {
    src: "/images/realisations/cloisons.jpeg",
    alt: "Création de cloisons intérieures en plaques de plâtre",
    tags: ["Cloisons"],
  },
  {
    src: "/images/realisations/cloisons2.jpeg",
    alt: "Pose de cloisons en placo",
    tags: ["Cloisons"],
  },
  {
    src: "/images/realisations/cloisons3.jpeg",
    alt: "Cloisons intérieures avec bandes en cours",
    tags: ["Cloisons"],
  },

  // ===== ENDUITS DÉCORATIFS =====
  {
    src: "/images/realisations/enduits-decoratifs1.jpeg",
    alt: "Enduit décoratif intérieur",
    tags: ["Enduits décoratifs"],
  },
  {
    src: "/images/realisations/enduits-decoratifs2.jpeg",
    alt: "Enduit décoratif mural",
    tags: ["Enduits décoratifs"],
  },

  // ===== ENDUITS & FINITIONS =====
  {
    src: "/images/realisations/enduits-finitions.jpeg",
    alt: "Enduits et finitions murales",
    tags: ["Enduits & finitions"],
  },
  {
    src: "/images/realisations/enduits-finitions2.jpg",
    alt: "Préparation des murs avant enduit et plâtrerie",
    tags: ["Enduits & finitions"],
  },
  {
    src: "/images/realisations/enduits-finitions3.jpg",
    alt: "Reprise des supports avant finitions",
    tags: ["Enduits & finitions"],
  },
  {
    src: "/images/realisations/enduits-finitions4.jpg",
    alt: "Préparation des tableaux de fenêtres avant enduit",
    tags: ["Enduits & finitions"],
  },
  {
    src: "/images/realisations/enduits-finitions5.jpg",
    alt: "Préparation des murs en briques avant plâtre",
    tags: ["Enduits & finitions"],
  },

  // ===== PLÂTRE =====
  {
    src: "/images/realisations/platre-avant.jpeg",
    alt: "Plâtrerie avant travaux",
    tags: ["Plâtre"],
  },
  {
    src: "/images/realisations/platre-pendant-manuel.jpeg",
    alt: "Application manuelle du plâtre",
    tags: ["Plâtre"],
  },
  {
    src: "/images/realisations/platre-pendant-projection.jpeg",
    alt: "Projection de plâtre en cours",
    tags: ["Plâtre"],
  },
  {
    src: "/images/realisations/platre-apres.jpg",
    alt: "Plâtrerie après finition",
    tags: ["Plâtre"],
  },

  // ===== PEINTURE =====
  {
    src: "/images/realisations/peinture.jpg",
    alt: "Peinture intérieure",
    tags: ["Peinture"],
  },

  // ===== PUITS LED =====
  {
    src: "/images/realisations/puits-led1.jpg",
    alt: "Puits de lumière LED",
    tags: ["Puits LED"],
  },
  {
    src: "/images/realisations/puits-led2.jpg",
    alt: "Éclairage intérieur par puits LED",
    tags: ["Puits LED"],
  },

  // ===== STAFF =====
  {
    src: "/images/realisations/staff1.jpeg",
    alt: "Plafond en staff décoratif",
    tags: ["Staff"],
  },
  {
    src: "/images/realisations/staff2.jpeg",
    alt: "Décoration en staff intérieur",
    tags: ["Staff"],
  },
  {
    src: "/images/realisations/staff3.jpg",
    alt: "Travail de staff sur plafond",
    tags: ["Staff"],
  },
];

const ALL_TAGS = [
  "Tous",
  "Cloisons",
  "Enduits décoratifs",
  "Enduits & finitions",
  "Isolation",
  "Peinture",
  "Plâtre",
  "Puits LED",
  "Staff",
];

export default function RealisationsPage() {
  const [tag, setTag] = useState("Tous");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (tag === "Tous") return PHOTOS;
    return PHOTOS.filter((p) => p.tags.includes(tag));
  }, [tag]);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Nos réalisations</h1>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {ALL_TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={tag === t ? "chip is-active" : "chip"}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filtered.map((p, i) => (
          <button
            key={p.src}
            className="gallery__item"
            onClick={() => setOpenIndex(i)}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            <span className="gallery__caption">
              {p.alt}
              {p.phase && <em> — {p.phase}</em>}
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="lightbox" onClick={() => setOpenIndex(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[openIndex].src}
              alt={filtered[openIndex].alt}
            />
            <p>
              {filtered[openIndex].alt}
              {filtered[openIndex].phase && ` — ${filtered[openIndex].phase}`}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
