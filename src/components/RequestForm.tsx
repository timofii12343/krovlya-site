import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const d = digits.startsWith('7') ? digits : '7' + digits;
  const limited = d.slice(0, 11);

  let result = '+7';
  if (limited.length > 1) result += ` (${limited.slice(1, 4)}`;
  if (limited.length >= 4) result += ')';
  if (limited.length > 4) result += ` ${limited.slice(4, 7)}`;
  if (limited.length > 7) result += `-${limited.slice(7, 9)}`;
  if (limited.length > 9) result += `-${limited.slice(9, 11)}`;
  return result;
};

const RequestForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setPhone(formatPhone(raw));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (allowed.includes(e.key)) return;
    if (e.ctrlKey || e.metaKey) return;
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 11 || !consent) {
      toast({
        title: 'Заполните все обязательные поля',
        description: 'Укажите имя, телефон и дайте согласие на обработку данных.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setName('');
    setPhone('+7');
    setComment('');
    setConsent(false);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-foreground">Оставьте заявку</h2>
              <p className="text-muted-foreground">Мы перезвоним в течение 30 минут</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>

              <div>
                <Input
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  inputMode="numeric"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Комментарий"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я согласен на обработку персональных данных и принимаю{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Политику конфиденциальности
                  </a>{' '}
                  и{' '}
                  <a href="/terms" className="text-primary hover:underline">
                    Условия использования
                  </a>
                  .
                </label>
              </div>

              <Button type="submit" className="w-full btn-glow h-12 text-base" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RequestForm;