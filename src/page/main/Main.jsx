import WhatsappButton from "../../components/buttons/whatsappButton/WhatsappButton";
import HomeSection from "../homeSection/HomeSection";
import AboutSection from "../aboutSection/AboutSection";
import ServicesSection from "../servicesSection/ServicesSection";
import BenefitsSection from "../benefitsSection/BenefitsSection";
import TestimonialsSection from "../testimonialsSection/TestimonialsSection";
import ContactSection from "../contactSection/ContactSection";
import NumbersSection from "../numbersSection/NumbersSection";
import SuccessCasesSection from "../successCasesSection/SuccessCasesSection";

export default function Main() {
  return (
    <main>
      <WhatsappButton />
      <HomeSection />
      <NumbersSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
