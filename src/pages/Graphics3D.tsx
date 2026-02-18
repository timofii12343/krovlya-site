import { useState } from 'react';
import { Phone, Send, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

import roofLayers from '@/assets/3d-roof-layers.jpg';
import roofTiles from '@/assets/3d-roof-tiles.jpg';
import roofTruss from '@/assets/3d-roof-truss.jpg';
import roofInsulation from '@/assets/3d-roof-insulation.jpg';

const items = [
  {
    image: roofLayers,
    title: 'Чертёж кровельного',
    description:
      'Чертёж кровли показывает расположение стропил, утеплителя, гидроизоляции. Важность чертежа помогает избежать всех ошибок монтажа и повысить долговечность, и сохранить теплоизоляцию.',
  },
  {
    image: roofTiles,
    title: 'Металлочерепица',
    description:
      'Профилированные листы из оцинкованной стали с полимерным покрытием. Имитирует натуральную черепицу, обеспечивает герметичность и долговечность. Крепится саморезами к обрешётке.',
  },
  {
    image: roofTruss,
    title: 'Стропильная система',
    description:
      'Несущий каркас крыши из деревянных или металлических элементов. Воспринимает все нагрузки — от собственного веса кровли до снега и ветра. Рассчитывается индивидуально под каждый объект.',
  },
  {
    image: roofInsulation,
    title: 'Утепление и вентиляция',
    description:
      'Система утепления включает пароизоляцию, минеральную вату и вентилируемый зазор. Правильная вентиляция предотвращает конденсат и продлевает срок службы всей кровельной конструкции.',
  },
];

const Graphics3D = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">3D графика</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Интерактивные визуализации кровельных конструкций и материалов
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div
                className="card-lift bg-card border border-border rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => toggleExpand(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedIndex === index ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button asChild size="sm" className="btn-glow">
                        <a href={PHONE_LINK}>
                          <Phone className="w-4 h-4 mr-2" />
                          {PHONE}
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                          <Send className="w-4 h-4 mr-2" />
                          Telegram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graphics3D;
