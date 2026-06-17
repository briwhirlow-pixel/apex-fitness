import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import WhyApex from '@/components/WhyApex';
import Classes from '@/components/Classes';
import TheHour from '@/components/TheHour';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhyApex />
      <Classes />
      <TheHour />
      <Trainers />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </>
  );
}
