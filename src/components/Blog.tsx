import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'Оптимизация производительности React приложений',
    excerpt: 'Практические советы по улучшению скорости работы и рендеринга компонентов',
    date: '15 ноября 2024',
    readTime: '5 мин',
    category: 'Frontend'
  },
  {
    title: 'Современные паттерны API архитектуры',
    excerpt: 'Обзор подходов к проектированию масштабируемых REST и GraphQL API',
    date: '8 ноября 2024',
    readTime: '7 мин',
    category: 'Backend'
  },
  {
    title: 'TypeScript: продвинутые типы на практике',
    excerpt: 'Разбираем сложные типы и их применение в реальных проектах',
    date: '1 ноября 2024',
    readTime: '10 мин',
    category: 'TypeScript'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Блог</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Делюсь опытом, находками и размышлениями о веб-разработке
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-accent/50 transition-all group cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs bg-accent/10 text-accent rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
                >
                  Читать далее
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all"
          >
            Все статьи
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
