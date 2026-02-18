import { useState, useEffect } from 'react';
import { Phone, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';

const PopupCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    if (!dismissed) return;
    const repeatTimer = setTimeout(() => {
      setDismissed(false);
      setIsVisible(true);
    }, 60000);
    return () => clearTimeout(repeatTimer);
  }, [dismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="container mx-auto max-w-lg pointer-events-auto">
        <div className="bg-card border border-border rounded-xl p-6 shadow-2xl shadow-background/50 animate-slide-up relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-lg font-bold text-foreground mb-2">Нужна помощь с кровлей?</h3>
          <p className="text-sm text-muted-foreground mb-5 pr-6">
            Поможем с осмотром, консультацией и подбором оптимального решения для вашей крыши.
            Бесплатный выезд мастера.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="btn-glow flex-1" size="default">
              <a href={PHONE_LINK}>
                <Phone className="w-4 h-4 mr-2" />
                {PHONE}
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1" size="default">
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCTA;
