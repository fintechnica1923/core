import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Consulting() {
  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6">
      <div className="space-y-24">
        {/* 01 КОНЦЕПЦИЯ */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-snug tracking-tight">КОНЦЕПЦИЯ</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Кто мы
              </h3>
              <p className="text-lg leading-relaxed">
                Консалтинговая компания, которая помогает не финансовым платформам
                стать полноценными игроками современной цифровой экономики. Мы
                интегрируем и развиваем финтех-решения, чтобы сократить затраты на
                платежи, повысить конверсию и улучшить клиентское взаимодействие с
                сервисом. Имеем опыт в строительстве платформ. Помогаем компаниям
                построить работающие системы и качественные продукты.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Области экспертизы
              </h3>
              <p className="text-lg leading-relaxed">
                KYC и быстрая верификация клиентов / интеграция удобных методов
                оплаты для сокращения транзакционных издержек / запуск кредитных
                продуктов (BNPL, рассрочки) для роста среднего чека / внедрение
                систем лояльности для вовлечения клиентов / выпуск собственных
                платежных средств (электронные кошельки, карты и др.). Мы умеем
                строить эффективные воронки, обеспечивая лучший пользовательский
                опыт для финтех-продуктов.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Наш подход
              </h3>
              <p className="text-lg leading-relaxed">
                Мы предлагаем комплексный консалтинг по интеграции финтех-решений:
                проводим базовый аудит и глубокий анализ текущих бизнес-процессов,
                выявляем точки роста и формируем первичные рекомендации. Также
                разрабатываем стратегический документ с подробным планом внедрения
                финансовых сервисов — используя отработанный в Авито подход,
                оснонный на опыте Amazon; сопровождаем реализацию стратегии,
                помогаем в подборе подрядчиков и осуществляем контроль качества
                интеграционных работ.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Как связаться
              </h3>
              <p className="text-lg leading-relaxed">
                Нам всегда можно написать в телеграме и тезисно сформулировав ваш
                запрос или отправить нам вводные материалы на почту.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* 02 ПОРТФЕЛЬ */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-snug tracking-tight">ПОРТФЕЛЬ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 text-lg font-medium">DO-DO PIZZA</h3>
              <p className="text-muted-foreground">
                Продукт и клиентский опыт
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-2 text-lg font-medium">НОВЫЙ КЕЙС</h3>
              <p className="text-muted-foreground">
                Стратегия, продукт, дизайн
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* 03 УСЛУГИ */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-snug tracking-tight">УСЛУГИ</h2>
          </div>
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3 className="font-medium uppercase tracking-wider">
                  Экспресс аудит и экспертная сессия
                </h3>
                <Badge variant="secondary">от 5 часов</Badge>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Краткий анализ контекста и ключевых точек роста, первичные
                рекомендации.
              </p>
              <div className="flex items-center justify-between gap-4">
                 <h3 className="font-medium uppercase tracking-wider">
                  Глубокая коммуникация
                </h3>
                 <Badge variant="secondary">от 10 часов</Badge>
              </div>
               <p className="text-lg leading-relaxed text-muted-foreground">
                С командой, формулировка запроса или экспертная валидация
                предполагаемых решений.
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3 className="font-medium uppercase tracking-wider">
                  Анализ продуктов и разработка стратегии
                </h3>
                <Badge variant="secondary">от 15 часов</Badge>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Полноценный стратегический документ с дорожной картой внедрения,
                готовой к оперативной реализации.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* 04 ЭКСПЕРТИЗА */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-snug tracking-tight">ЭКСПЕРТИЗА</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-lg font-medium">САША КАПУСТИН</h3>
              <p className="mb-2 text-sm text-muted-foreground">@productanddot</p>
              <p className="text-base leading-relaxed">
                CEO Unirest IT, ex-CPO Avito Fintech, лектор EMBA Сколково (блок
                стратегия) и ФРИИ (блок продуктовый подход)
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium">МИША КОЛОСКОВ</h3>
              <p className="mb-2 text-sm text-muted-foreground">@bankfloorbelow</p>
              <p className="text-base leading-relaxed">
                Арт-Директор финансовых сервисов Авито, ex-Design Lead B2C/B2B
                продуктов в компании Яндекс.Деньги
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* 05 МАТЕРИАЛЫ */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-medium leading-snug tracking-tight">МАТЕРИАЛЫ</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">ОТРАСЛЕВАЯ АНАЛИТИКА</h3>
                <p className="text-muted-foreground">
                  Обзор событий с исследованием потенциала потребительского рынка
                  и поиск продуктовых решений.
                </p>
              </div>
              <Badge variant="outline">Скоро</Badge>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">РЕФЕРЕНСНАЯ БАЗА</h3>
                <p className="text-muted-foreground">
                  Каталог ключевых сервисов с набором финансовых продуктов.
                </p>
              </div>
              <Badge variant="outline">Скоро</Badge>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">СПЕЦИФИКАЦИИ</h3>
                <p className="text-muted-foreground">
                  Академическая документация по разработке и развитию цифровых
                  продуктов.
                </p>
              </div>
              <Badge variant="outline">Скоро</Badge>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">СООБЩЕСТВО</h3>
                <p className="text-muted-foreground">
                  Среда для открытого индустриального диалога с группой экспертов.
                </p>
              </div>
              <Badge variant="outline">Скоро</Badge>
            </div>
             <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">ОТЧЕТ</h3>
                <p className="text-muted-foreground">
                  Развернутая презентация о положении торгово-финансового рынка.
                </p>
              </div>
              <Badge variant="outline">Скоро</Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
