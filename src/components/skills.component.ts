import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">\\ Compétences techniques</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="category-title">Langages</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of backendSkills">
                <div class="skill-icon">{{ skill.icon }}</div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">Bases de données</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of frontendSkills">
                <div class="skill-icon">{{ skill.icon }}</div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">Outils & DevOps</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of databaseSkills">
                <div class="skill-icon">{{ skill.icon }}</div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">Connaissances</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of toolsSkills">
                <div class="skill-icon">{{ skill.icon }}</div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .skill-category {
      background: rgba(30, 41, 59, 0.5);
      backdrop-filter: blur(10px);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      opacity: 0.7;
    }

    .skill-category:hover {
      transform: translateY(-5px);
      border-color: rgba(59, 130, 246, 0.4);
      box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
      opacity: 1;
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      text-align: center;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .skill-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
    }

    .skill-info {
      flex: 1;
    }

    .skill-info h4 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }

    .skill-bar {
      height: 8px;
      background: rgba(51, 65, 85, 0.8);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.25rem;
      border: 1px solid rgba(59, 130, 246, 0.2);
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 4px;
      transition: width 1s ease;
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }

    .skill-level {
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  backendSkills = [
    { name: 'HTML/CSS', level: 90, icon: '🌐' },
    { name: 'JS/TypeScript', level: 85, icon: '🟨' },
    { name: 'C#', level: 80, icon: '💠' },
    { name: 'Python/SQL', level: 88, icon: '🐍' }
  ];

  frontendSkills = [
    { name: 'MySQL', level: 85, icon: '🗄️' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'SQL Server/SQLite', level: 90, icon: '🧮' },
    { name: 'MongoDB', level: 75, icon: '🍃' }
  ];

  databaseSkills = [
    { name: 'Visual Studio/VSCode', level: 85, icon: '🖥️' },
    { name: 'Git/GitHub', level: 75, icon: '🔗' },
    { name: 'Figma/WordPress', level: 70, icon: '🎨' },
    { name: 'Docker/Azure', level: 65, icon: '🐳' }
  ];

  toolsSkills = [
    { name: 'Architecture MVC', level: 85, icon: '🏛️' },
    { name: 'APIs REST', level: 90, icon: '🔌' },
    { name: 'Dev full stack', level: 70, icon: '🧑‍💻' },
    { name: 'Gestion de projets agiles', level: 75, icon: '📈' }
  ];
}