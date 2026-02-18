import { ShieldCheck, Lock, UserCheck, FileKey, Share2, AlertTriangle } from "lucide-react";

export default function Privacy() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
        Политика конфиденциальности и обработки персональных данных
      </h1>

      <div className="space-y-6">
        <Card>
          <p className="text-foreground/80 leading-relaxed">
            Настоящая Политика конфиденциальности определяет порядок обработки персональных данных
            пользователей сайта в соответствии с Федеральным законом Российской Федерации от 27.07.2006 № 152-ФЗ
            «О персональных данных».
          </p>
        </Card>

        <Section
          title="1. Общие положения"
          icon={<FileKey className="h-5 w-5" />}
          text="Используя сайт и отправляя данные через формы, пользователь подтверждает своё согласие
          на обработку персональных данных в соответствии со статьями 6 и 9 Федерального закона № 152-ФЗ."
        />

        <Section
          title="2. Состав персональных данных"
          icon={<UserCheck className="h-5 w-5" />}
          textNode={
            <div className="space-y-3">
              <p className="text-foreground/80 leading-relaxed">
                В рамках работы сайта могут обрабатываться следующие данные:
              </p>
              <ul className="m-0 list-none p-0 space-y-3">
                <ListItem>имя пользователя;</ListItem>
                <ListItem>номер телефона;</ListItem>
                <ListItem>иные сведения, указанные пользователем добровольно;</ListItem>
                <ListItem>
                  техническая информация (IP-адрес, cookie, данные браузера), обрабатываемая автоматически.
                </ListItem>
              </ul>
            </div>
          }
        />

        <Section
          title="3. Цели обработки персональных данных"
          icon={<ShieldCheck className="h-5 w-5" />}
          textNode={
            <ul className="m-0 list-none p-0 space-y-3">
              <ListItem>обработка обращений и заявок;</ListItem>
              <ListItem>обратная связь с пользователем;</ListItem>
              <ListItem>предоставление информации об услугах;</ListItem>
              <ListItem>обеспечение функционирования сайта.</ListItem>
            </ul>
          }
        />

        <Section
          title="4. Правовые основания обработки"
          icon={<FileKey className="h-5 w-5" />}
          text="Обработка персональных данных осуществляется на основании добровольного согласия субъекта
          персональных данных (ст. 9 ФЗ № 152-ФЗ), а также в иных случаях, предусмотренных законодательством
          Российской Федерации."
        />

        <Section
          title="5. Передача персональных данных третьим лицам"
          icon={<Share2 className="h-5 w-5" />}
          textNode={
            <div className="space-y-3">
              <p className="text-foreground/80 leading-relaxed">
                Оператор не передаёт персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul className="m-0 list-none p-0 space-y-3">
                <ListItem>когда передача необходима для исполнения обращения пользователя;</ListItem>
                <ListItem>когда передача предусмотрена законодательством РФ.</ListItem>
              </ul>
            </div>
          }
        />

        <Section
          title="6. Ограничение ответственности за утечку данных"
          icon={<AlertTriangle className="h-5 w-5" />}
          textNode={
            <div className="space-y-3">
              <p className="text-foreground/80 leading-relaxed">
                Оператор принимает разумные организационные и технические меры защиты персональных данных
                в соответствии со статьёй 19 Федерального закона № 152-ФЗ.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                При этом пользователь осознаёт, что передача информации через сеть «Интернет» не может быть
                полностью защищена, и Оператор не несёт ответственности за несанкционированный доступ к данным,
                произошедший вследствие действий третьих лиц, в том числе:
              </p>
              <ul className="m-0 list-none p-0 space-y-3">
                <ListItem>противоправных действий третьих лиц;</ListItem>
                <ListItem>вредоносного программного обеспечения;</ListItem>
                <ListItem>уязвимостей программного обеспечения или устройства пользователя.</ListItem>
              </ul>
            </div>
          }
        />

        <Section
          title="7. Ответственность третьих лиц"
          icon={<Lock className="h-5 w-5" />}
          text="В соответствии со статьями 137 и 272 Уголовного кодекса Российской Федерации
          ответственность за незаконное собирание, распространение или неправомерный доступ к персональным
          данным несут лица, совершившие указанные действия."
        />

        <Section
          title="8. Права субъекта персональных данных"
          icon={<UserCheck className="h-5 w-5" />}
          text="Пользователь имеет права, предусмотренные статьёй 14 Федерального закона № 152-ФЗ,
          включая право на получение информации об обработке данных и отзыв согласия."
        />

        <Section
          title="9. Заключительные положения"
          icon={<ShieldCheck className="h-5 w-5" />}
          text="Настоящая Политика действует бессрочно до замены новой редакцией и применяется в пределах,
          установленных законодательством РФ."
        />
      </div>
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
      {children}
    </div>
  );
}

function Section({
  title,
  text,
  textNode,
  icon,
}: {
  title: string;
  text?: string;
  textNode?: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <span className="text-primary">{icon}</span>
      </div>
      <div className="min-w-0">
        <h2 className="font-semibold text-foreground mb-1">{title}</h2>
        {text ? <p className="text-foreground/80 leading-relaxed">{text}</p> : textNode}
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M6.5 11.2 3.8 8.5"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 5.2 6.6 11.2"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-foreground/85 leading-relaxed">{children}</span>
    </li>
  );
}