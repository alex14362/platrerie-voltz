import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function PeinturePage() {
  return (
    <>
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Peinture intérieure et ponçage"
          accroche="Apportez la touche finale à vos espaces intérieurs."
          paragraphs={[
            "Nous réalisons la préparation des supports, le ponçage et l’application de peinture intérieure, en finition mate, satinée ou brillante.",
            "Nos produits sont choisis pour leur qualité, leur tenue dans le temps et leur respect de l’environnement.",
          ]}
          points={[
            "Préparation et ponçage des murs et plafonds",
            "Peinture à base acrylique ou minérale",
            "Finitions soignées et durables",
            "Conseils sur le choix des teintes",
          ]}
          heroImageUrl="/prestation/peinture.jpg"
        />
      </div>
    </>
  );
}