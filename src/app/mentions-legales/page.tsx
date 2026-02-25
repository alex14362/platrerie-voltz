import PageReveal from "@/components/PageReveal";

const sectionTitleStyle = {
  marginTop: 24,
  marginBottom: 8,
  color: "var(--brand)",
};

const textStyle = {
  color: "var(--text-muted)",
  lineHeight: 1.7,
};

function LegalSection({ number, title, children }: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 style={sectionTitleStyle}>{number}. {title}</h2>
      <p style={textStyle}>{children}</p>
    </>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageReveal />

      <section className="container reveal" style={{ padding: "40px 0" }}>
        <div className="panel reveal-stagger" style={{ padding: "36px" }}>
          <h1 className="hero-title" style={{ marginBottom: 12 }}>
            Mentions légales
          </h1>

          <p style={textStyle}>
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la Confiance dans
            l'économie numérique (L.C.E.N.), il est porté à la connaissance des
            utilisateurs du site <strong>Plâtrerie Voltz</strong> les présentes mentions légales.
          </p>

          <LegalSection number={1} title="Éditeur du site">
            <strong>Plâtrerie Voltz</strong><br />
            Entreprise individuelle – Artisan plâtrier<br />
            Responsable de la publication : Alexia Voltz<br />
            Siège social : 65a rue des seigneurs, 67470 Buhl, France<br />
            Immatriculation : Répertoire des Métiers du Bas-Rhin<br />
            SIRET : <strong>123 456 789 00012</strong><br />
            Numéro de TVA intracommunautaire : <strong>FR57818768285</strong><br />
            Téléphone : <strong>06 45 37 44 32</strong><br />
            Email : <strong>platrerie_voltz@yahoo.fr</strong>
          </LegalSection>

          <LegalSection number={2} title="Hébergement">
            Le site est hébergé par <strong>Vercel Inc.</strong><br />
            Service d'hébergement web basé aux États-Unis.<br />
            Site :{" "}
            <a href="https://vercel.com" target="_blank" style={{ color: "var(--brand)", textDecoration: "none" }}>
              vercel.com
            </a>
          </LegalSection>

          <LegalSection number={3} title="Propriété intellectuelle">
            L'ensemble du contenu du site (textes, images, graphismes, logo, icônes, etc.)
            est la propriété exclusive de <strong>Plâtrerie Voltz</strong>, sauf mention contraire.
            Toute reproduction, distribution, modification, adaptation ou publication, même partielle,
            est strictement interdite sans accord écrit préalable.
          </LegalSection>

          <LegalSection number={4} title="Données personnelles">
            Les informations recueillies via le formulaire de contact sont utilisées uniquement pour
            répondre aux demandes des utilisateurs. Aucune donnée personnelle n'est transmise à des tiers.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
            de vos données. Pour exercer ce droit, contactez-nous à :{" "}
            <strong>platrerie_voltz@yahoo.fr</strong>.
          </LegalSection>

          <LegalSection number={5} title="Responsabilité">
            <strong>Plâtrerie Voltz</strong> s'efforce d'assurer l'exactitude des informations présentes
            sur le site, mais ne saurait être tenue responsable d'erreurs, d'omissions ou de
            dysfonctionnements techniques. L'utilisateur reconnaît utiliser le site sous sa propre responsabilité.
          </LegalSection>

          <LegalSection number={6} title="Crédits">
            Design et développement : <strong>Plâtrerie Voltz</strong><br />
            Logo : propriété de l'entreprise<br />
            Photos : droits réservés
          </LegalSection>
        </div>
      </section>
    </>
  );
}
