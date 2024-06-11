import { rock_salt } from "@/app/font";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="py-20" id="contact">
      <div className="sub-wrap items-center gap-20 md:flex">
        <p className="hidden h-1/3 min-h-[500px] w-[300px] flex-auto shrink-0 bg-white md:block">
          image
        </p>
        <div>
          <h2
            className={`text-center text-5xl opacity-40 ${rock_salt.className}`}
          >
            Make suggestions
          </h2>
          <p className="mt-10 text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            provident praesentium?{" "}
            <i className="text-lg">Ipsum quidem eaque architecto</i> libero
            minima repellendus ullam modi!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
