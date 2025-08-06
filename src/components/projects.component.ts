import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <div class="project-placeholder">
                <div class="project-icon">{{ project.icon }}</div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">
                  <span>Voir le projet</span>
                  <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      background: transparent;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
    }

    .project-card {
      background: rgba(30, 41, 59, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(59, 130, 246, 0.2);
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      opacity: 0.7;
    }

    .project-card:hover {
      transform: translateY(-10px);
      border-color: rgba(53, 96, 165, 0.4);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
      opacity: 1;
    }

    .project-image {
      height: 200px;
      background: rgba(111, 166, 247, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .project-placeholder {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .project-icon {
      font-size: 2rem;
      color: white;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .project-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-tag {
      background: rgba(59, 130, 246, 0.2);
      color: var(--primary-color);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.3);
      backdrop-filter: blur(5px);
    }

    .project-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .project-link:hover {
      color: var(--secondary-color);
      text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
    }

    .arrow {
      transition: transform 0.3s ease;
    }

    .project-link:hover .arrow {
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Système de gestion RH',
      description: 'Application web complète pour la gestion des ressources humaines avec tableau de bord analytique et gestion des congés.',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Entity Framework'],
      icon: '👥'
    },
    {
      title: 'Plateforme e-commerce',
      description: 'Solution e-commerce moderne avec gestion des commandes, paiements sécurisés et interface d\'administration.',
      technologies: ['.NET Core', 'Angular', 'Stripe API', 'Redis'],
      icon: '🛒'
    },
    {
      title: 'Application de suivi projet',
      description: 'Outil de gestion de projets avec suivi des tâches, collaboration en temps réel et reporting automatisé.',
      technologies: ['C#', 'Angular', 'SignalR', 'PostgreSQL'],
      icon: '📊'
    },
    {
      title: 'API de gestion documentaire',
      description: 'API RESTful pour la gestion de documents avec authentification, versioning et recherche avancée.',
      technologies: ['ASP.NET Core', 'JWT', 'ElasticSearch', 'Docker'],
      icon: '📄'
    }
  ];
}