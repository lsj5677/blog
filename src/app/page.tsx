import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section>
      <Main />
      <About />
      <FeaturedWorks />
      <ContactSection />
    </section>
  );
}
