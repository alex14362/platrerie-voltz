import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function CloisonsPage() {
  return (
    <>
      {/* Déclenche l’animation au chargement */}
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Cloison et murs de séparation"
          accroche="Créez et organisez vos espaces avec des cloisons solides et esthétiques."
          paragraphs={[
            "Nous réalisons la pose de cloisons, doublages et séparations pour vos pièces intérieures.",
            "Nos solutions s’adaptent à tous types d’environnements : résidentiel, tertiaire ou industriel.",
          ]}
          points={[
            "Cloisons en plaques de plâtre ou briques plâtrières",
            "Adaptation acoustique et thermique",
            "Pose sur ossature métallique ou bois",
            "Finitions soignées et prêtes à peindre",
          ]}

          /*ton image */
          heroImageUrl="/prestation/cloison.jpg"
        />
      </div>
    </>
  );
}
