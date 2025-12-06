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
    phase: "Avant",
  },
  {
    src: "/images/realisations/isolation-avant2.jpg",
    alt: "Isolation rampants avant pose",
    tags: ["Isolation"],
    phase: "Avant",
  },
  {
    src: "/images/realisations/isolation-pendant1.jpg",
    alt: "Isolation en cours – pose de l’isolant",
    tags: ["Isolation"],
    phase: "Pendant",
  },
  {
    src: "/images/realisations/isolation-pendant2.jpg",
    alt: "Pose du pare-vapeur pendant isolation",
    tags: ["Isolation"],
    phase: "Pendant",
  },
  {
    src: "/images/realisations/isolation-apres1.jpg",
    alt: "Isolation des combles terminée",
    tags: ["Isolation"],
    phase: "Après",
  },
  {
    src: "/images/realisations/isolation-apres2.jpg",
    alt: "Finition isolation avec puits de lumière",
    tags: ["Isolation"],
    phase: "Après",
  },

  // ===== CLOISONS =====
  {
    src: "/images/realisations/cloisons.jpeg",
    alt: "Création de cloisons intérieures",
    tags: ["Cloisons"],
  },

  // ===== ENDUITS =====
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
  {
    src: "/images/realisations/enduits-finitions.jpeg",
    alt: "Enduits et finitions murs",
    tags: ["Enduits & finitions"],
  },

  // ===== PLÂTRE =====
  {
    src: "/images/realisations/platre-avant.jpeg",
    alt: "Plâtrerie avant travaux",
    tags: ["Plâtre"],
    phase: "Avant",
  },
  {
    src: "/images/realisations/platre-apres.jpg",
    alt: "Plâtrerie après finition",
    tags: ["Plâtre"],
    phase: "Après",
  },

   {
    src: "/images/realisations/platre-pendant-projection.jpeg",
    alt: "Projection de plâtre en cours",
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
    alt: "Éclairage par puits LED",
    tags: ["Puits LED"],
  },

  // ===== STAFF =====
  {
    src: "/images/realisations/staff1.jpeg",
    alt: "Plafond staff décoratif",
    tags: ["Staff"],
  },
  {
    src: "/images/realisations/staff2.jpeg",
    alt: "Staff décoratif plafond",
    tags: ["Staff"],
  },
  {
    src: "/images/realisations/staff3.jpg",
    alt: "Travail en staff intérieur",
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

      {/* Filters */}
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

      {/* Gallery */}
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

      {/* Lightbox */}
      {openIndex !== null && (
        <div className="lightbox" onClick={() => setOpenIndex(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[openIndex].src} alt={filtered[openIndex].alt} />
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
