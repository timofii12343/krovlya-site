import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import RequestForm from '@/components/RequestForm';
import CTAStrip from '@/components/CTAStrip';

const features = [
  'Снятие финишного кровельного покрытия',
  'Демонтаж обрешётки и контробрешётки',
  'Удаление старой гидро- и пароизоляции',
  'Демонтаж утеплителя',
  'Разборка стропильной системы (при необходимости)',
  'Вывоз и утилизация строительного мусора',
  'Подготовка основания под новую кровлю',
];

const DemontazhKrovli = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Демонтаж кровли</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональный демонтаж старого кровельного покрытия с соблюдением техники безопасности.
                Аккуратная работа, полная утилизация и подготовка основания для новой кровли.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Этапы работ</h2>
              <div className="space-y-3 mb-12">
                {features.map((feature, i) => (
                  <ScrollReveal key={i} delay={i * 50}>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-xl font-bold mb-4 text-foreground">Важно знать</h2>
                <p className="text-muted-foreground">
                  Демонтаж выполняется с минимальным воздействием на несущие конструкции здания.
                  При необходимости устанавливается временная защита от осадков на время работ.
                  Стоимость зависит от площади и типа покрытия.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTAStrip />
      <RequestForm />
    </>
  );
};

export default DemontazhKrovli;
