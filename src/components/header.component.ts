import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="nav-container">
          <div class="nav-content-accueil">
            <div class="logo">
              <h2>TB</h2>
            </div>
            <nav class="nav" [class.nav-open]="isMenuOpen">
              <a href="#home" class="nav-link" (click)="scrollToSection('home', $event)">Accueil</a>
              <a href="#about" class="nav-link" (click)="scrollToSection('about', $event)">À propos</a>
              <a href="#skills" class="nav-link" (click)="scrollToSection('skills', $event)">Compétences</a>
              <a href="#projects" class="nav-link" (click)="scrollToSection('projects', $event)">Projets</a>
              <a href="#contact" class="nav-link" (click)="scrollToSection('contact', $event)">Contact</a>
            </nav>
            <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div class="nav-social-links">
            <a href="https://www.linkedin.com/in/tiffano-belalahy-64657b238/" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn"><img src="/assets/03.png" width="20px"></a>
            <a href="https://github.com/tiffstich1" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub"><img src="/assets/04.png" width="20px"></a>
            <a href="mailto:gerardtiffano01@gmail.com" class="social-link" title="Email"><img src="/assets/02.png" width="20px"></a>
            
          </div>
          
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background-color: var(--background-darker);
      background-image: 
      linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      background-attachment: fixed;
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(59, 130, 246, 0.1);
      transition: all 0.3s ease;
      padding: 1rem 0;
    }

    .header.scrolled {
      background-color: var(--background-darker);
      background-image: 
      linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      background-attachment: fixed;
      backdrop-filter: blur(20px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      padding: 0.5rem 0;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-content-accueil {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .logo h2 {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 1.5rem;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }

    .nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 0;
      cursor: pointer;
    }

    .nav-link:hover {
      color: var(--primary-color);
      text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
      box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: var(--primary-color);
      transition: all 0.3s ease;
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }

    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
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
      margin: 0px 5px 0px 5px
    }

    .social-link:hover {
      background: var(--secondary-color);
      border-color: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        border-bottom: 1px solid rgba(59, 130, 246, 0.2);
      }

      .nav.nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      .header .header.scrolled {
        background-size: 30px 30px;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

