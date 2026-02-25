import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function PlatreriePage() {
  return (
    <>
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Plâtrerie manuelle et mécanique"
          accroche="Des surfaces parfaitement lisses, prêtes à peindre, avec un rendu durable."
          paragraphs={[
            "Nous réalisons tous travaux de plâtrerie en application manuelle ou mécanisée selon la surface et les délais : préparation des supports, enduits, rebouchage et finitions soignées pour murs et plafonds.",
            "Notre priorité : un rendu propre, droit et homogène, prêt à recevoir peinture ou revêtement.",
          ]}
          points={[
            "Application manuelle ou mécanique selon les besoins",
            "Finitions nettes et régulières",
            "Respect des délais et propreté de chantier",
            "Conseils techniques sur les supports et enduits",
          ]}
          heroImageUrl="/prestation/platre.jpg"
        />
      </div>
    </>
  );
}