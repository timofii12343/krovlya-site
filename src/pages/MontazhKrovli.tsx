import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import RequestForm from '@/components/RequestForm';
import CTAStrip from '@/components/CTAStrip';

const features = [
  'Монтаж стропильной системы из качественной древесины',
  'Укладка паро- и гидроизоляционных мембран',
  'Утепление минеральной ватой или экструдированным пенополистиролом',
  'Монтаж обрешётки и контробрешётки',
  'Установка металлочерепицы, профнастила или гибкой черепицы',
  'Монтаж водосточной системы',
  'Установка снегозадержателей и вентиляционных элементов',
  'Подшивка карнизных свесов',
];

const MontazhKrovli = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Монтаж кровли</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Выполняем полный цикл монтажных работ — от установки стропильной системы до финишного покрытия.
                Работаем с любыми типами кровельных материалов для частных домов и коммерческих объектов.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Что входит в монтаж</h2>
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
                <h2 className="text-xl font-bold mb-4 text-foreground">Сроки и стоимость</h2>
                <p className="text-muted-foreground mb-3">
                  Сроки зависят от площади и сложности кровли. Средний монтаж — от 3 до 10 рабочих дней.
                  Стоимость рассчитывается индивидуально после осмотра объекта.
                </p>
                <p className="text-muted-foreground">
                  Бесплатный выезд мастера для замеров и составления сметы.
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

export default MontazhKrovli;
