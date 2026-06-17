import Hero from '@/components/Hero';
import BenefitsBar from '@/components/BenefitsBar';
import Programs from '@/components/Programs';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import Locator from '@/components/Locator';
import FreePassBlock from '@/components/FreePassBlock';

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <Programs />
      <Trainers />
      <Pricing />
      <Locator />
      <FreePassBlock />
    </>
  );
}
