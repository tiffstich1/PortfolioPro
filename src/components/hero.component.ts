import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title fade-in-up">
              Bonjour, je suis <span class="highlight">Tiffano Belalahy</span>
              <span class="blink">|</span>
            </h1>
            <h2 class="hero-subtitle fade-in-up">
              Ingénieur Logiciel et je crée des trucs parfois
            </h2>
            <p class="hero-description fade-in-up">
              Passionné par le développement d'applications web modernes et
              performantes. Chaque projet est pour
               moi l’occasion d’apprendre, d’innover et de relever de nouveaux défis.
            </p>
            <div class="hero-buttons fade-in-up">
              <a href="https://cvdesignr.com/p/6810a611896a9" target="_blank" class="btn btn-primary">Mon CV</a>
              <a href="#projects" class="btn btn-outline">Voir mes projets</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-image-container float-animation">
              <img
                src="assets/01.jpg"
                alt="Tiffano Belalahy"
                class="profile-image"
              />
              <div class="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 8rem 0 6rem;
        background: transparent;
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
      }

      .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .hero-title {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: var(--text-primary);
        overflow: hidden;
        white-space: nowrap;

        animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
      }
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      /* Curseur qui clignote */
      @keyframes blink-caret {
        50% {
          border-color: transparent;
        }
      }

      .highlight {
        color: var(--primary-color);
        background: linear-gradient(
          135deg,
          var(--primary-color),
          var(--secondary-color)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
      }
      .blink {
        color: rgba(59, 130, 246, 0.5);
        animation: blink-animation 1s steps(2, start) infinite;
      }

      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
      }

      .hero-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      .hero-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile-image-container {
        width: 350px;
        height: 350px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 50px rgba(59, 130, 246, 0.4),
          inset 0 0 50px rgba(255, 255, 255, 0.1);
        border: 4px solid rgba(59, 130, 246, 0.3);
        transition: all 0.3s ease;
      }

      .profile-image-container:hover {
        transform: scale(1.05);
        box-shadow: 0 0 70px rgba(59, 130, 246, 0.6),
          inset 0 0 50px rgba(255, 255, 255, 0.1);
      }

      .profile-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: brightness(1.1) contrast(1.1);
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(59, 130, 246, 0.2),
          rgba(96, 165, 250, 0.1)
        );
        mix-blend-mode: overlay;
        pointer-events: none;
      }

      @media (max-width: 768px) {
        .hero {
          padding: 6rem 0 4rem;
        }

        .hero-content {
         display: flex;
         flex-direction: column-reverse;
         text-align: center;
         gap: 2rem;
        }

        .hero-title {
          font-size: 1.5rem;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid var(--text-primary);
          animation: typing 3s steps(30, end),
            blink-caret 0.75s step-end infinite;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .profile-image-container {
          width: 150px;
          height: 150px;
        }

        .hero-buttons {
          justify-content: center;
        }
        .hero-description{
          font-size: 1.0em
        }
      }

      @media (max-width: 768px) {
        .hero-title {
          white-space: normal; /* autorise retour à la ligne */
          overflow: visible; /* ne cache plus le texte */
          border-right: none; /* retire le curseur */
          animation: none; /* désactive l’animation */
        }
      }
    `,
  ],
})
export class HeroComponent {}
