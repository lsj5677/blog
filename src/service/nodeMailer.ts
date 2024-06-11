import nodemailer from "nodemailer";

export type EmailDataProps = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: EmailDataProps) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[PORTFOLIO] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br />
    <p>보낸사람: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
