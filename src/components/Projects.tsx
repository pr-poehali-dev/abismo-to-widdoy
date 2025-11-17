import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Современная платформа для онлайн-торговли с интеграцией платежных систем',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: 'ShoppingCart',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Приложение для управления задачами с real-time синхронизацией',
    tags: ['TypeScript', 'Firebase', 'Tailwind'],
    icon: 'CheckSquare',
    link: '#'
  },
  {
    title: 'Portfolio Builder',
    description: 'Конструктор портфолио для творческих специалистов',
    tags: ['Next.js', 'Prisma', 'Vercel'],
    icon: 'Palette',
    link: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Дашборд для визуализации бизнес-метрик и аналитики',
    tags: ['React', 'D3.js', 'Express'],
    icon: 'BarChart3',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Избранные проекты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подборка моих последних работ — от веб-приложений до сложных систем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-accent/50 transition-all group cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon name={project.icon as any} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
              >
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
