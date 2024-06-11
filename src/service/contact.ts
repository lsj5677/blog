import { EmailDataProps } from "./nodeMailer";

export async function sendContactEmail(email: EmailDataProps) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "서버 요청 실패");

  return data;
}
