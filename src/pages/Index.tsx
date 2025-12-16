import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Саров Вадим</h2>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Достижения
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Саров Вадим Васильевич
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Студент КубГАУ, группа ФК2501
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              1 курс • Родился 13 декабря 2007 года
            </p>
            <a href="mailto:vadik272007@gmail.com">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться со мной
              </Button>
            </a>
          </div>
          <div className="animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/42f4594e-daf6-4785-b81c-c70e8a51a27d/files/9b02936d-e920-4ebd-a9ec-d277f5245514.jpg"
              alt="Саров Вадим"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Обо мне
          </h2>
          <div className="space-y-8">
            <Card className="animate-fade-in shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="GraduationCap" className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      Мой выбор профессии
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Поступление в Кубанский государственный аграрный университет стало для меня осознанным выбором. 
                      Меня всегда привлекала возможность работать с современными технологиями в сельском хозяйстве, 
                      сочетать инновации с традициями. Я вижу огромный потенциал в развитии агропромышленного комплекса 
                      и хочу внести свой вклад в эту важную отрасль.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Target" className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      Жизненные приоритеты
                    </h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Для меня важнейшими ценностями являются саморазвитие, профессионализм и целеустремленность. 
                      Я стремлюсь постоянно учиться новому, развивать свои навыки и быть полезным обществу. 
                      Верю, что упорный труд и настойчивость помогают достигать любых целей.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Образование
                      </span>
                      <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Развитие
                      </span>
                      <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Профессионализм
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Heart" className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      Увлечения
                    </h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      В свободное время я увлекаюсь чтением профессиональной литературы, 
                      изучением современных технологий в агрономии, занимаюсь спортом для поддержания 
                      физической формы. Также интересуюсь фотографией природы и участвую в студенческих 
                      проектах университета.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <div className="bg-muted rounded-lg p-4 mb-2">
                          <Icon name="BookOpen" className="text-primary mx-auto" size={32} />
                        </div>
                        <p className="text-sm text-muted-foreground">Чтение</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-muted rounded-lg p-4 mb-2">
                          <Icon name="Laptop" className="text-primary mx-auto" size={32} />
                        </div>
                        <p className="text-sm text-muted-foreground">Технологии</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-muted rounded-lg p-4 mb-2">
                          <Icon name="Dumbbell" className="text-primary mx-auto" size={32} />
                        </div>
                        <p className="text-sm text-muted-foreground">Спорт</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-muted rounded-lg p-4 mb-2">
                          <Icon name="Camera" className="text-primary mx-auto" size={32} />
                        </div>
                        <p className="text-sm text-muted-foreground">Фотография</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Достижения
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Поступление в КубГАУ
                </h3>
                <p className="text-muted-foreground">
                  Успешно прошел конкурсный отбор и поступил на бюджетное место 
                  в один из ведущих аграрных вузов России
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-accent" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Активная студенческая жизнь
                </h3>
                <p className="text-muted-foreground">
                  Участвую в студенческих мероприятиях, конференциях и проектах, 
                  развиваю лидерские качества и навыки командной работы
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-accent" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Академические успехи
                </h3>
                <p className="text-muted-foreground">
                  Показываю высокие результаты в учебе, активно изучаю 
                  профильные дисциплины и дополнительные материалы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Свяжитесь со мной</h3>
          <p className="text-primary-foreground/80 mb-6">
            Открыт для интересных проектов и сотрудничества
          </p>
          <a href="mailto:vadik272007@gmail.com">
            <Button variant="secondary" className="font-semibold px-8 py-6">
              <Icon name="Mail" className="mr-2" size={20} />
              vadik272007@gmail.com
            </Button>
          </a>
          <div className="mt-8 text-sm text-primary-foreground/60">
            © 2024 Саров Вадим Васильевич
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
