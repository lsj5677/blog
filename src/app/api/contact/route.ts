import { sendEmail } from "@/service/nodeMailer";
import * as yup from "yup";

const bodyShema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodyShema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일전송 실패" }), {
      status: 400,
    });
  }

  const { from, subject, message } = body;
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냄" }), {
          status: 200,
        }),
    )
    .catch((error) => {
      console.log("error", error);
      new Response(JSON.stringify({ message: "메일전송 실패" }), {
        status: 500,
      });
    });
}
