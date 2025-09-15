import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Code",
      title: "Веб-разработка",
      description: "Создание современных веб-приложений и сайтов с использованием передовых технологий"
    },
    {
      icon: "Smartphone",
      title: "Мобильные решения", 
      description: "Разработка кроссплатформенных мобильных приложений для iOS и Android"
    },
    {
      icon: "Database",
      title: "Backend системы",
      description: "Проектирование и разработка масштабируемых серверных архитектур"
    },
    {
      icon: "Cloud",
      title: "Облачные технологии",
      description: "Внедрение и настройка облачных решений для бизнеса"
    }
  ];

  const experience = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "TechCorp",
      description: "Руководство командой разработки, архитектура микросервисов"
    },
    {
      year: "2022",
      title: "Frontend Team Lead", 
      company: "InnoSoft",
      description: "Управление фронтенд командой, внедрение современных практик"
    },
    {
      year: "2020",
      title: "JavaScript Developer",
      company: "StartupLab", 
      description: "Разработка SPA приложений на React и Vue.js"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/7fb10c92-29b3-4ca3-b31a-45528af3b975.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-inter text-5xl md:text-7xl font-bold text-rodogingGons mb-6 animate-fade-in">
            Технологичные<br/>
            <span className="text-techBlue">Решения</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Создаем современные веб-приложения и цифровые продукты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-techBlue hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Начать проект
            </Button>
            <Button variant="outline" size="lg" className="border-techBlue text-techBlue hover:bg-techBlue hover:text-white px-8 py-3 text-lg transition-all duration-300">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-rodogingGons mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на разработке высокопроизводительных веб-приложений 
              и цифровых решений, используя современные технологии и лучшие практики индустрии.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-techBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="w-8 h-8 text-techBlue" />
                </div>
                <h3 className="font-inter text-xl font-semibold mb-2">Точность</h3>
                <p className="text-gray-600">Внимание к деталям и высокое качество кода</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-techBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-techBlue" />
                </div>
                <h3 className="font-inter text-xl font-semibold mb-2">Скорость</h3>
                <p className="text-gray-600">Быстрая разработка и оптимизированная производительность</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-techBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-techBlue" />
                </div>
                <h3 className="font-inter text-xl font-semibold mb-2">Надежность</h3>
                <p className="text-gray-600">Стабильные и масштабируемые решения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-lightGray/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-rodogingGons mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по разработке цифровых продуктов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-techBlue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-techBlue/20 transition-colors">
                    <Icon name={service.icon} className="w-6 h-6 text-techBlue" />
                  </div>
                  <h3 className="font-inter text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl font-bold text-rodogingGons mb-4">Опыт работы</h2>
            <p className="text-xl text-gray-600">Наш путь в области технологий</p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-lightGray/30 transition-all duration-300">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-techBlue rounded-lg flex items-center justify-center text-white font-inter font-bold">
                    {exp.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-xl font-semibold text-rodogingGons mb-1">{exp.title}</h3>
                  <p className="text-techBlue font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-rodogingGons text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-inter text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-xl text-gray-300 mb-12">Готовы обсудить ваш проект? Свяжитесь с нами!</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-techBlue/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" className="w-8 h-8 text-techBlue" />
              </div>
              <h3 className="font-inter text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@techsolutions.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-techBlue/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" className="w-8 h-8 text-techBlue" />
              </div>
              <h3 className="font-inter text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-techBlue/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" className="w-8 h-8 text-techBlue" />
              </div>
              <h3 className="font-inter text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">Москва, Тверская 1</p>
            </div>
          </div>
          <Button size="lg" className="bg-techBlue hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
            <Icon name="MessageSquare" className="w-5 h-5 mr-2" />
            Написать нам
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;