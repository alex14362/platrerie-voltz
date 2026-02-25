"use client";

import { useState } from "react";
import PageReveal from "@/components/PageReveal";

const FORMSPREE_ID = "mrbyvajg";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp"];

type FormStatus = "idle" | "sending" | "success" | "error";

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", { method: "POST", body: formData });
  const json = await response.json();

  if (!response.ok) throw new Error(json?.error || "Échec de l'upload du fichier.");
  return json.url as string;
}

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const honeypot = (form.querySelector('input[name="website"]') as HTMLInputElement)?.value;
    if (honeypot) {
      setStatus("success");
      return;
    }

    const fileInput = form.querySelector('input[name="plan"]') as HTMLInputElement | null;
    const file = fileInput?.files?.[0] ?? null;

    data.delete("plan");

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setStatus("error");
        setErrorMsg("Format non supporté (PDF/JPG/PNG/WebP).");
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setStatus("error");
        setErrorMsg("Fichier trop lourd (max 10 Mo).");
        return;
      }

      try {
        const planUrl = await uploadFile(file);
        data.append("plan_url", planUrl);
      } catch (error) {
        setStatus("error");
        setErrorMsg(error instanceof Error ? error.message : "Échec de l'upload.");
        return;
      }
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
        setFileName("");
      } else {
        setStatus("error");
        setErrorMsg(json?.errors?.[0]?.message || `Erreur ${response.status}.`);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible d'envoyer le message. Réessayez.");
    }
  }

  return (
    <>
      <PageReveal />

      <section className="container reveal" style={{ padding: "40px 0" }}>
        <div className="panel" style={{ padding: "36px" }}>
          <h1 className="hero-title" style={{ marginBottom: 12 }}>
            Contactez-nous
          </h1>

          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
            Vous avez un projet ou souhaitez obtenir un devis ? Remplissez le formulaire
            ci-dessous (vous pouvez joindre votre plan en PDF/JPG/PNG) ou contactez-nous
            directement par téléphone.
          </p>

          <div
            className="reveal-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

              <input className="input" type="text" name="name" placeholder="Votre nom *" required />
              <input className="input" type="email" name="email" placeholder="Votre e-mail *" required />
              <input className="input" type="tel" name="phone" placeholder="Votre téléphone" />
              <textarea className="input" name="message" rows={5} placeholder="Votre message *" required />

              <div>
                <label style={{ display: "block", fontWeight: 600, marginBottom: 10, color: "var(--brand)" }}>
                  Joindre un plan (PDF/JPG/PNG)
                </label>

                <input
                  id="plan-input"
                  type="file"
                  name="plan"
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  style={{ display: "none" }}
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />

                <label htmlFor="plan-input" className="btn btn--primary" style={{ cursor: "pointer" }}>
                  Choisir un fichier
                </label>

                {fileName && (
                  <p style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 6 }}>
                    {fileName}
                  </p>
                )}
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 6 }}>
                  Taille max : 10 Mo
                </p>
              </div>

              <input type="hidden" name="_subject" value="Nouveau message - Plâtrerie Voltz" />
              <input type="hidden" name="_template" value="table" />

              <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>

              {status === "success" && (
                <p className="alert success">✅ Votre message a bien été envoyé.</p>
              )}
              {status === "error" && (
                <p className="alert error">❌ {errorMsg}</p>
              )}
            </form>

            <div>
              <h2 style={{ fontSize: "1.1rem", color: "var(--brand)" }}>Nos coordonnées</h2>
              <p style={{ marginTop: 10, color: "var(--text-muted)", lineHeight: 1.7 }}>
                📍 Bas-Rhin et alentours<br />
                📞 <strong>06 45 37 44 32</strong>
              </p>

              <h3 style={{ fontSize: "1.1rem", color: "var(--brand)", marginTop: 24 }}>Horaires</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Lundi – Vendredi : 8h00 – 17h00<br />
                Samedi : sur rendez-vous
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
