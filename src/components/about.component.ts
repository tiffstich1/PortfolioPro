import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">\\ À propos de moi</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="lead">
              Ingénieur logiciel passionné avec une expertise approfondie en développement d'applications web modernes.
            </p>
            <p>
              Fort de plusieurs années d'expérience dans le développement logiciel, je me spécialise dans les technologies 
              Microsoft .NET et Angular. J'aime créer des solutions élégantes et performantes qui résolvent des problèmes 
              complexes tout en offrant une expérience utilisateur exceptionnelle.
            </p>
            <p>
              Mon approche combine rigueur technique et créativité pour livrer des applications robustes, maintenables 
              et évolutives. Je suis constamment à la recherche de nouvelles technologies et méthodologies pour améliorer 
              mes compétences et apporter une valeur ajoutée aux projets sur lesquels je travaille.
            </p>
            <div class="stats">
              <div class="stat">
                <div class="stat-number">3+</div>
                <div class="stat-label">Années d'expérience</div>
              </div>
              <div class="stat">
                <div class="stat-number">20+</div>
                <div class="stat-label">Projets réalisés</div>
              </div>
              <div class="stat">
                <div class="stat-number">100%</div>
                <div class="stat-label">Satisfaction client</div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-container">
              <div class="profile-image-wrapper">
                <div class="tech-background">
                  <div class="tech-text">À PROPOS DE MOI</div>
                  <div class="tech-subtitle">
                    Ingénieur logiciel passionné avec une expertise approfondie en développement d'applications web modernes.
                  </div>
                  <div class="tech-icons">
                    <div class="tech-icon dotnet">.NET</div>
                    <div class="tech-icon angular">A</div>
                  </div>
                  <div class="circuit-pattern"></div>
                </div>
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

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .about-text {
      max-width: 600px;
    }

    .lead {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    .about-text p {
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    .stats {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .stat {
      text-align: center;
      padding: 1rem;
      background: rgba(59, 130, 246, 0.1);
      border-radius: 12px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      backdrop-filter: blur(10px);
      flex: 1;
    }

    .stat-number {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary-color);
      text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-top: 0.5rem;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-image-wrapper {
      width: 280px;
      height: 350px;
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 
        0 0 40px rgba(59, 130, 246, 0.4),
        inset 0 0 40px rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;
    }

    .profile-image-wrapper:hover {
      transform: scale(1.03);
      box-shadow: 
        0 0 50px rgba(59, 130, 246, 0.6),
        inset 0 0 40px rgba(255, 255, 255, 0.1);
    }

    .tech-background {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      text-align: center;
    }

    .tech-text {
      font-size: 1.2rem;
      font-weight: 700;
      color: #60a5fa;
      margin-bottom: 1rem;
      text-shadow: 0 0 15px rgba(96, 165, 250, 0.8);
      letter-spacing: 1px;
    }

    .tech-subtitle {
      font-size: 0.8rem;
      color: #cbd5e1;
      line-height: 1.4;
      margin-bottom: 1.5rem;
      max-width: 240px;
    }

    .tech-icons {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-icon {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1rem;
      color: white;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      border: 2px solid rgba(59, 130, 246, 0.3);
    }

    .tech-icon.dotnet {
      background: linear-gradient(135deg, #512bd4, #7c3aed);
      box-shadow: 0 0 15px rgba(124, 58, 237, 0.5);
    }

    .tech-icon.angular {
      background: linear-gradient(135deg, #dd0031, #c3002f);
      box-shadow: 0 0 15px rgba(221, 0, 49, 0.5);
      font-family: 'Arial', sans-serif;
    }

    .circuit-pattern {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 150px;
      height: 150px;
      background-image: 
        linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
        linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
      background-size: 15px 15px;
      opacity: 0.3;
    }

    .circuit-pattern::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      width: 3px;
      height: 3px;
      background: #60a5fa;
      border-radius: 50%;
      box-shadow: 
        30px 0 0 #60a5fa,
        60px 0 0 #60a5fa,
        0 30px 0 #60a5fa,
        30px 30px 0 #60a5fa,
        60px 30px 0 #60a5fa,
        0 60px 0 #60a5fa,
        30px 60px 0 #60a5fa,
        60px 60px 0 #60a5fa;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .stats {
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .stat {
        min-width: 120px;
      }

      .profile-image-wrapper {
        width: 250px;
        height: 320px;
      }

      .tech-icons {
        gap: 1rem;
      }

      .tech-icon {
        width: 50px;
        height: 50px;
        font-size: 0.9rem;
      }

      .tech-text {
        font-size: 1rem;
      }

      .tech-subtitle {
        font-size: 0.75rem;
      }
    }
  `]
})
export class AboutComponent {}