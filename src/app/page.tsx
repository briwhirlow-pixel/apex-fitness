import Hero from '@/components/Hero';
import Classes from '@/components/Classes';
import WhyApex from '@/components/WhyApex';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Classes />
      <WhyApex />
      <Trainers />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </>
  );
}
