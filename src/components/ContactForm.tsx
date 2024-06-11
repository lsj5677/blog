"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import StateBanner, { StateBannerProps } from "./StateBanner";
import { sendContactEmail } from "@/service/contact";

type FormProps = {
  from: string;
  subject: string;
  message: string;
};

const INIT_DATA = { from: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormProps>(INIT_DATA);

  const [stateBanner, setStateBannner] = useState<StateBannerProps | null>(
    null,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(values) //
      .then(() => {
        setStateBannner({
          message: "메일이 성공적으로 전송되었습니다.",
          state: "success",
        });
        setValues(INIT_DATA);
      })
      .catch(() => {
        setStateBannner({
          message: "메일이 전송되지 않았습니다. 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setStateBannner(null);
        }, 3000);
      });
  };

  const INPUT_STYLE = "w-full px-3 py-2 bg-sub";

  return (
    <div className="relative mt-10 w-full">
      {stateBanner && <StateBanner stateBanner={stateBanner} />}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="text-sm">
            Your Email
          </label>
          <input
            required
            id="from"
            type="email"
            name="from"
            value={values.from}
            className={INPUT_STYLE}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm">
            Subject
          </label>
          <input
            required
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            className={INPUT_STYLE}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            How Can We Help You?
          </label>
          <textarea
            required
            cols={50}
            rows={10}
            name="message"
            id="message"
            value={values.message}
            className={`resize-none ${INPUT_STYLE}`}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-[#7C7764] py-3 text-main sm:ml-auto sm:w-[200px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
