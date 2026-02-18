import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import HowWeWork from '@/components/HowWeWork';
import BeforeAfter from '@/components/BeforeAfter';
import CTAStrip from '@/components/CTAStrip';
import RequestForm from '@/components/RequestForm';
import PopupCTA from '@/components/PopupCTA';

const Index = () => {
  return (
    <>
      <Hero />
      <ServiceCards />
      <HowWeWork />
      <BeforeAfter />
      <CTAStrip />
      <RequestForm />
      <PopupCTA />
    </>
  );
};

export default Index;
