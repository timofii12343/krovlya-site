import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import RequestForm from '@/components/RequestForm';

const features = [
  'Диагностика протечек и повреждений',
  'Локальный ремонт отдельных участков',
  'Капитальный ремонт кровельного покрытия',
  'Замена повреждённых элементов',
  'Герметизация швов и примыканий',
  'Ремонт водосточной системы',
  'Восстановление гидроизоляции',
  'Устранение последствий ураганов и непогоды',
];

const RemontKrovli = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Link
              to="/uslugi"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ремонт кровли
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                Устранение протечек, замена повреждённых участков, ремонт водосточной системы. 
                Выполняем локальный и капитальный ремонт любой сложности — быстро, качественно, с гарантией.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-xl p-8 mb-10">
                <h2 className="text-xl font-bold mb-6 text-foreground">Что входит в услугу</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
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
            </ScrollReveal>
          </div>
        </div>
      </section>
      <RequestForm />
    </>
  );
};

export default RemontKrovli;
