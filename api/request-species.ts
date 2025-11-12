import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, speciesName, scientificName, description } = data;

    // Validación básica (sin email)
    if (!name || !speciesName) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios (nombre y nombre común)" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Enviar correo con Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Terrarium Labels <onboarding@resend.dev>", // Usa tu dominio verificado
      to: ["tu-correo@ejemplo.com"], // ← Pon tu correo receptor aquí
      subject: `Nueva solicitud de especie: ${speciesName}`,
      html: `
        <h2>Nueva solicitud de especie</h2>
        <p><strong>Nombre del solicitante:</strong> ${name}</p>
        <p><strong>Nombre común:</strong> ${speciesName}</p>
        <p><strong>Nombre científico:</strong> ${scientificName || "No especificado"}</p>
        <p><strong>Descripción:</strong><br/>${description || "Sin información adicional"}</p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return new Response(
        JSON.stringify({ error: "Error al enviar correo" }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, emailId: emailData?.id }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error en la API:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
