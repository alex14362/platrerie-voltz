import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function EnduitsPage() {
  return (
    <>
      {/* Déclenche l’animation au chargement */}
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Enduit à joint et finition"
          accroche="Des finitions parfaites pour un rendu impeccable."
          paragraphs={[
            "Nous assurons la réalisation des joints entre plaques de plâtre et les finitions pour une surface parfaitement plane.",
            "Nos équipes maîtrisent les techniques manuelles et mécanisées selon le type de chantier.",
          ]}
          points={[
            "Enduits de joints et rebouchage précis",
            "Ponçage mécanique ou manuel",
            "Surfaces prêtes à peindre",
            "Rendu lisse et sans défauts",
          ]}

          /*ton image */
          heroImageUrl="/prestation/finition.jpg"
        />
      </div>
    </>
  );
}
