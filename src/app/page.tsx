import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FeaturedWorks from "@/components/FeaturedWorks";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section>
      <Main />
      <About />
      <FeaturedWorks />
      <ContactForm />
    </section>
  );
}
