import { Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

const CTAStrip = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Нужна надёжная кровля?
              </h2>
              <p className="text-muted-foreground">
                Позвоните или напишите — ответим в течение 30 минут
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="btn-glow text-base px-8">
                <a href={PHONE_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAStrip;
