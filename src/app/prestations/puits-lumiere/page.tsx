import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function PuitsLumierePage() {
  return (
    <>
      {/* Déclenche l’animation au chargement */}
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Puits de lumière LED"
          accroche="Apportez luminosité et modernité à vos espaces intérieurs."
          paragraphs={[
            "Nous réalisons des puits de lumière LED sur mesure, alliant design et efficacité énergétique.",
            "Nos installations créent un éclairage doux, homogène et économique.",
          ]}
          points={[
            "Éclairage LED encastré ou apparent",
            "Économie d’énergie et longue durée de vie",
            "Conception adaptée à chaque pièce",
            "Intégration possible dans plafonds staff",
          ]}

          /*ton image */
          heroImageUrl="/prestation/led.jpg"
        />
      </div>
    </>
  );
}
