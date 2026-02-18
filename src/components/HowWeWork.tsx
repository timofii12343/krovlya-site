import { useEffect, useRef, useState } from 'react';
import { ClipboardList, Eye, Calculator, Truck, Hammer, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    icon: ClipboardList,
    title: 'Заявка',
    description: 'Вы оставляете заявку или звоните. Мы уточняем детали объекта.',
  },
  {
    icon: Eye,
    title: 'Осмотр',
    description: 'Мастер выезжает на объект, оценивает состояние и объём работ.',
  },
  {
    icon: Calculator,
    title: 'Смета',
    description: 'Составляем детальную смету с фиксированной ценой.',
  },
  {
    icon: Truck,
    title: 'Материалы',
    description: 'Закупаем и доставляем все необходимые материалы.',
  },
  {
    icon: Hammer,
    title: 'Монтаж',
    description: 'Выполняем работы в оговорённые сроки с контролем качества.',
  },
  {
    icon: CheckCircle2,
    title: 'Сдача',
    description: 'Принимаете работу. Получаете гарантию и рекомендации по уходу.',
  },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-20% 0px -30% 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Как мы работаем</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Прозрачный процесс от заявки до сдачи объекта
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => { stepRefs.current[index] = el; }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-3rem)] bg-border" />
              )}

              {/* Step circle */}
              <div
                className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  index <= activeStep
                    ? 'bg-primary border-primary shadow-lg shadow-primary/25'
                    : 'bg-secondary border-border'
                }`}
              >
                <step.icon
                  className={`w-5 h-5 transition-colors duration-500 ${
                    index <= activeStep ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`flex-1 pt-1 transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-medium text-primary">Шаг {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
