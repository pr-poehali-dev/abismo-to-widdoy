import Icon from '@/components/ui/icon';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'Laptop',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 70 }
    ]
  },
  {
    title: 'Инструменты',
    icon: 'Wrench',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Figma', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Технологии и навыки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Стек технологий, с которыми я работаю для создания современных решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Icon name={category.icon as any} size={20} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
