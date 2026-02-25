import PageReveal from "@/components/PageReveal";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function StaffPage() {
  return (
    <>
      <PageReveal />

      <div className="reveal">
        <ServiceTemplate
          title="Staff décoratif et corniches en plâtre"
          accroche="Un savoir-faire artisanal pour des finitions élégantes et personnalisées."
          paragraphs={[
            "Nous concevons et posons des éléments décoratifs en plâtre : corniches, rosaces, moulures et encadrements.",
            "Chaque création est façonnée sur mesure pour s’intégrer parfaitement à votre intérieur.",
          ]}
          points={[
            "Fabrication et pose sur mesure",
            "Travail artisanal et finitions haut de gamme",
            "Respect du style architectural existant",
            "Possibilité d’intégrer un éclairage indirect",
          ]}
          heroImageUrl="/prestation/staff.jpg"
        />
      </div>
    </>
  );
}