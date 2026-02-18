import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, PHONE_LINK, TELEGRAM_LINK } from '@/lib/constants';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Услуги', path: '/uslugi' },
  { label: '3D графика', path: '/3d-grafika' },
  { label: 'Контакты', path: '/kontakty' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
            Кровля<span className="text-primary">Про</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="btn-glow" size="sm">
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

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md p-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button asChild className="btn-glow w-full" size="default">
                <a href={PHONE_LINK}>
                  <Phone className="w-4 h-4 mr-2" />
                  {PHONE}
                </a>
              </Button>
              <Button asChild variant="outline" size="default" className="w-full">
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">
                Кровля<span className="text-primary">Про</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Профессиональные кровельные работы в Краснодаре и крае
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Навигация</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>г. Краснодар</p>
                <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
                <a
                  href={TELEGRAM_LINK}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href="https://wa.me/79991234567"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 КровляПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
