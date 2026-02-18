import { Phone, Send, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK, WHATSAPP_LINK, EMAIL, CITY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import RequestForm from '@/components/RequestForm';

const Contacts = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Контакты</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Свяжитесь с нами любым удобным способом — ответим в течение 30 минут в рабочее время.
              </p>

              {/* Contact blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Город</span>
                  </div>
                  <p className="text-foreground font-semibold">{CITY}</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Телефон</span>
                  </div>
                  <a href={PHONE_LINK} className="text-foreground font-semibold hover:text-primary transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Send className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Telegram</span>
                  </div>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Написать в Telegram
                  </a>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">WhatsApp</span>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Написать в WhatsApp
                  </a>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Режим работы</span>
                  </div>
                  <p className="text-foreground font-semibold">Пн–Сб, 08:00–20:00</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Эл. почта</span>
                  </div>
                  <a href={`mailto:${EMAIL}`} className="text-primary font-semibold hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* How to reach us */}
              <div className="mb-14">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Как с нами связаться</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Самый быстрый способ — позвонить. Мы ответим на звонок, уточним детали вашего объекта
                  и предложим удобное время для выезда мастера. Если вам удобнее писать, отправьте сообщение
                  в Telegram или WhatsApp — мы отвечаем так же оперативно, как и по телефону.
                  Электронная почта подходит для отправки фотографий объекта, чертежей или технических заданий.
                </p>
              </div>

              {/* Geography */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">География работ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оказываем кровельные услуги в Краснодаре, Краснодарском крае, Адыгее и прилегающих районах.
                  Выезд на осмотр — по всему региону. Объекты на расстоянии более 100 км от Краснодара
                  обсуждаются индивидуально.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <RequestForm />
    </>
  );
};

export default Contacts;
