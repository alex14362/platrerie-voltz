/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// On récupère les variables d'environnement UNE FOIS
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

// 🔍 Log de debug dans les logs Vercel (pas visible sur le site)
console.log("Cloudinary env (server):", {
  cloud: CLOUDINARY_CLOUD_NAME,
  hasKey: !!CLOUDINARY_API_KEY,
  hasSecret: !!CLOUDINARY_API_SECRET,
});

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("❌ Missing Cloudinary env vars");
}

// Config Cloudinary avec ces valeurs
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploaded = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "plans",
          use_filename: true,
          unique_filename: true,
        },
        (err, result) => (err ? reject(err) : resolve(result))
      );
      stream.end(buffer);
    });

    return NextResponse.json({ url: uploaded.secure_url });
  } catch (e: any) {
    console.error("❌ Cloudinary upload error:", e);
    return NextResponse.json(
      { error: e?.message || "Upload failed" },
      { status: 500 }
    );
  }
}
