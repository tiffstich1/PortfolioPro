import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Tiffano Belalahy</h3>
            <p>Ingénieur Logiciel spécialisé en .NET & Angular</p>
            <div class="social-links">
              <a href="https://linkedin.com/in/tiffano-belalahy" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn"><img src="/assets/03.png" width="20px"></a>
              <a href="https://github.com/tiffstich1" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub"><img src="/assets/04.png" width="20px"></a>
              <a href="mailto:gerardtiffano01@gmail.com" class="social-link" title="Email"><img src="/assets/02.png" width="20px"></a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Navigation</h4>
            <ul class="footer-links">
              <li><a href="#home" (click)="scrollToSection('home', $event)">Accueil</a></li>
              <li><a href="#about" (click)="scrollToSection('about', $event)">À propos</a></li>
              <li><a href="#skills" (click)="scrollToSection('skills', $event)">Compétences</a></li>
              <li><a href="#projects" (click)="scrollToSection('projects', $event)">Projets</a></li>
              <li><a href="#contact" (click)="scrollToSection('contact', $event)">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Technologies</h4>
            <ul class="footer-links">
              <li>ASP.NET Core</li>
              <li>Angular</li>
              <li>SQL Server</li>
              <li>Entity Framework</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Tiffano Belalahy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: transparent;
      backdrop-filter: blur(10px);
      color: white;
      padding: 3rem 0 1rem;
      position: relative;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--secondary-color);
      text-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
    }

    .footer-section h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-section p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .social-link:hover {
      background: var(--secondary-color);
      border-color: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .footer-links a:hover {
      color: var(--secondary-color);
      text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
    }

    .footer-bottom {
      border-top: 1px solid rgba(59, 130, 246, 0.2);
      padding-top: 2rem;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .footer-bottom p {
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}