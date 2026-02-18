import { Link } from 'react-router-dom';
import { Hammer, Wrench, HardHat, ClipboardCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import RequestForm from '@/components/RequestForm';

const services = [
  {
    icon: Hammer,
    title: 'Монтаж кровли',
    description:
      'Полный цикл монтажных работ: от стропильной системы до финишного покрытия. Работаем с металлочерепицей, профнастилом, гибкой черепицей и фальцевой кровлей.',
    features: ['Стропильная система', 'Утепление и гидроизоляция', 'Финишное покрытие', 'Водосточная система'],
    link: '/uslugi/montazh',
  },
  {
    icon: Wrench,
    title: 'Демонтаж кровли',
    description:
      'Профессиональный демонтаж старого кровельного покрытия. Аккуратная работа, утилизация материалов, подготовка основания под новую кровлю.',
    features: ['Снятие покрытия', 'Демонтаж обрешётки', 'Утилизация', 'Подготовка основания'],
    link: '/uslugi/demontazh',
  },
  {
    icon: HardHat,
    title: 'Ремонт кровли',
    description:
      'Устранение протечек, замена повреждённых участков, ремонт водосточной системы. Локальный и капитальный ремонт любой сложности.',
    features: ['Диагностика протечек', 'Замена элементов', 'Герметизация', 'Ремонт водостоков'],
    link: '/uslugi/remont',
  },
  {
    icon: ClipboardCheck,
    title: 'Консультация и осмотр',
    description:
      'Бесплатный выезд специалиста на объект. Оценка состояния кровли, рекомендации по материалам и технологиям, составление сметы.',
    features: ['Бесплатный выезд', 'Оценка состояния', 'Подбор материалов', 'Составление сметы'],
    link: '/kontakty',
  },
];

const Services = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Услуги</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Полный спектр кровельных работ для частных домов и коммерческих объектов в Краснодаре и крае.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="card-lift bg-card border border-border rounded-xl p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground mb-5 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <RequestForm />
    </>
  );
};

export default Services;
