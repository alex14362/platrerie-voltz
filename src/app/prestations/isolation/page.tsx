import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function IsolationPage() {
  return (
    <>
      {/* Déclenche l’animation au chargement */}
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Isolation intérieure (combles et murs)"
          accroche="Une isolation performante pour un confort durable."
          paragraphs={[
            "Nous posons des isolants thermiques et acoustiques sur murs et plafonds, afin d'améliorer le confort et réduire la consommation d'énergie.",
            "Nos matériaux sont sélectionnés pour leur qualité, leur durabilité et leur performance.",
          ]}
          points={[
            "Isolation laine de verre, laine de roche ou biosourcée",
            "Pose rapide et soignée",
            "Amélioration énergétique du logement",
            "Travail conforme aux normes en vigueur",
          ]}

          /* 👇 ajoute juste cette ligne avec le bon nom de fichier */
          heroImageUrl="/prestation/isolation.jpg"
          // heroImageUrl="/prestation/isolation.png"
          // heroImageUrl="/prestation/isolation.webp"
        />
      </div>
    </>
  );
}
