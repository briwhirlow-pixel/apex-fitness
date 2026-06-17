import Hero from '@/components/Hero';
import SingleLine from '@/components/SingleLine';
import Ticker from '@/components/Ticker';
import Classes from '@/components/Classes';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SingleLine />
      <Ticker />
      <Classes />
      <Trainers />
      <Pricing />
      <Contact />
    </>
  );
}
