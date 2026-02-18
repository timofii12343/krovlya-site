import { Link } from 'react-router-dom';
import { Hammer, Wrench, HardHat, ClipboardCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    icon: Hammer,
    title: 'Монтаж кровли',
    description: 'Установка кровельных систем любой сложности — от частных домов до коммерческих объектов.',
    benefit: 'Гарантия герметичности',
    link: '/uslugi/montazh',
  },
  {
    icon: Wrench,
    title: 'Демонтаж кровли',
    description: 'Аккуратный демонтаж старого покрытия с утилизацией материалов и подготовкой основания.',
    benefit: 'Чистая площадка',
    link: '/uslugi/demontazh',
  },
  {
    icon: HardHat,
    title: 'Ремонт кровли',
    description: 'Локальный и капитальный ремонт протечек, замена повреждённых элементов.',
    benefit: 'Быстрое устранение',
    link: '/uslugi/remont',
  },
  {
    icon: ClipboardCheck,
    title: 'Консультация и осмотр',
    description: 'Бесплатный выезд мастера, оценка состояния кровли и рекомендации по материалам.',
    benefit: 'Бесплатно',
    link: '/kontakty',
  },
];

const ServiceCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Полный спектр кровельных работ для частных домов и коммерческих объектов в Краснодаре и крае.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link to={service.link} className="block h-full">
                <div className="card-lift bg-card border border-border rounded-lg p-6 h-full flex flex-col group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{service.description}</p>
                  <div className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
                    {service.benefit}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
