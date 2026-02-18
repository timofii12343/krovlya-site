import { Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';
import heroImage from '@/assets/hero-roof.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Надёжная кровля
            <br />
            <span className="text-primary">для вашего дома</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Профессиональный монтаж, демонтаж и ремонт кровли в Краснодаре и крае.
            Гарантия качества на все виды работ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow text-base px-8 py-6">
              <a href={PHONE_LINK}>
                <Phone className="w-5 h-5 mr-2" />
                {PHONE}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-border hover:border-primary/50">
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5 mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
