import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="section-title">\\ Mes projets</h2>
    <section id="projects" class="section">
      <div class="project-container">
        <div class="project-card fade" [ngClass]="fadeClass">
          <div class="card-background"
              [ngStyle]="{'background-image': 'url(' + projects[currentProject].image + ')'}">
          </div>
          <div class="project-content">
            <h2 class="project-title">{{ projects[currentProject].title }}</h2>
            <p class="project-description">{{ projects[currentProject].description }}</p>
            <div class="project-tech">{{ projects[currentProject].tech }}</div>
            <div class="project-links">
              <a [href]="projects[currentProject].github" target="_blank" class="project-link">GitHub</a>
              <a [href]="projects[currentProject].demo" target="_blank" class="project-link">Live Demo</a>
            </div>
          </div>

          <!-- Flèches -->
          <button class="nav-arrow left" (click)="prevProject()">&#10094;</button>
          <button class="nav-arrow right" (click)="nextProject()">&#10095;</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 4rem 2rem;
      background-color: transparent;
      display: flex;
      justify-content: center;
    }

    .project-container {
      max-width: 1000px;
      width: 100%;
      text-align: center;
    }

    .project-card {
      position: relative;
      height: 400px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    }

    .card-background {
      background-color: #7f8b9fff;
      opacity: 0.3;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: 1;
      transition: background-image 0.5s ease-in-out;
    }

    .project-content {
      position: relative;
      z-index: 2;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .project-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #60a5fa;
      text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
    }

    .project-description {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      color: #e2e8f0;
    }

    .project-tech {
      font-weight: bold;
      color: #38bdf8;
      margin-bottom: 1rem;
    }

    .project-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .project-link {
      background-color: rgba(96, 165, 250, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      color: white;
      transition: background-color 0.3s;
    }

    .project-link:hover {
      background-color: rgba(96, 165, 250, 0.4);
    }

    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      color: white;
      font-size: 2rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      z-index: 3;
      transition: background-color 0.3s;
    }

    .nav-arrow:hover {
      background-color: transparent;
      font-size: 2.3rem;
      transition: 0.5s;
    }

    .nav-arrow.left {
      left: 1rem;
    }

    .nav-arrow.right {
      right: 1rem;
    }

    /* 👇 Ajoute l'effet de transition */
    .fade {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }

    .fade-out {
      opacity: 0;
    }

    .fade-in {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .project-content {
        padding: 1.5rem;
      }

      .project-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class ProComponent {
  currentProject = 0;
  fadeClass = '';

  projects = [
    {
      title: "Labyrinthe Game",
      description: "C'est un jeu où le joueur doit trouver son chemin à travers un dédale complexe pour atteindre un objectif ou une sortie.",
      tech: "Angular",
      github: "https://github.com/tiffstich1/MazeGame",
      demo: "https://labyrinthe01.netlify.app/",
      image: "/assets/labyrintGame.png"
    },
    {
      title: "CasquettesShop",
      description: "Une boutique en ligne spécialisée dans la vente de casquettes de différents styles, marques et designs.",
      tech: "Angular",
      github: "https://github.com/tiffstich1/AppStore",
      demo: "https://tiffappstore.netlify.app/",
      image: "/assets/CasquetteShop.png"
    },
    {
      title: "Echec",
      description: "un jeu de stratégie opposant deux joueurs qui déplacent des pièces sur un plateau quadrillé dans le but de mettre le roi adverse en échec et mat",
      tech: "Angular",
      github: "https://github.com/tiffstich1/EchecJeu",
      demo: "https://mgechec.netlify.app/",
      image: "/assets/echec.png"
    },
    {
      title: "ChatApp",
      description: "une application permettant aux utilisateurs d’échanger des messages en temps réel via internet.",
      tech: "Angular/Asp.Net",
      github: "https://github.com/tiffstich1/ChatApp",
      demo: "#",
      image: "/assets/chatApp.png"
    },
    {
      title: "Mon Portfolio",
      description: "Support physique regroupant mes travaux, projets ou réalisations afin de mettre en valeur mes compétences et mon expérience.",
      tech: "Asp.Net",
      github: "#",
      demo: "#",
      image: "/assets/Portfolio.png"
    }
  ];

  nextProject() {
    this.fadeOutAndChange(() => {
      this.currentProject = (this.currentProject + 1) % this.projects.length;
    });
  }

  prevProject() {
    this.fadeOutAndChange(() => {
      this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
    });
  }

  private fadeOutAndChange(callback: () => void) {
    this.fadeClass = 'fade-out';
    setTimeout(() => {
      callback();
      this.fadeClass = 'fade-in';
    }, 300); // durée du fondu
  }
}
