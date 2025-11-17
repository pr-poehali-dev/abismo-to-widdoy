import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mx-auto">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Веб-разработчик
          <br />
          <span className="text-accent">& Креативный мыслитель</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Создаю современные веб-приложения с фокусом на производительность, 
          пользовательский опыт и чистый код
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
          >
            Связаться
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Code" size={16} />
            <span>Full-stack</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={16} />
            <span>Быстрая разработка</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={16} />
            <span>Качественный код</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;