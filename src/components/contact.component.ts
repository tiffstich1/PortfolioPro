import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">\\ Contactez-moi</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>
              Je suis toujours intéressé par de nouveaux défis et opportunités. 
              N'hésitez pas à me contacter pour discuter de vos besoins en développement.
            </p>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:gerardtiffano01&#64;gmail.com" title="Envoyer un email">gerardtiffano01&#64;gmail.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div class="contact-details">
                  <h4>Téléphone</h4>
                  <a href="tel:+33329424401" title="Appeler">03 29 42 44 01</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">💼</div>
                <div class="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/tiffano-belalahy" target="_blank" rel="noopener noreferrer" title="Voir le profil LinkedIn">Tiffano BELALAHY</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🐙</div>
                <div class="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/tiffstich1" target="_blank" rel="noopener noreferrer" title="Voir le profil GitHub">tiffstich1</a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name" 
                  required
                  #nameInput="ngModel"
                  [class.error]="nameInput.invalid && nameInput.touched"
                >
                <div class="error-message" *ngIf="nameInput.invalid && nameInput.touched">
                  Le nom est requis
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required
                  email
                  #emailInput="ngModel"
                  [class.error]="emailInput.invalid && emailInput.touched"
                >
                <div class="error-message" *ngIf="emailInput.invalid && emailInput.touched">
                  <span *ngIf="emailInput.errors?.['required']">L'email est requis</span>
                  <span *ngIf="emailInput.errors?.['email']">L'email n'est pas valide</span>
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject" 
                  required
                  #subjectInput="ngModel"
                  [class.error]="subjectInput.invalid && subjectInput.touched"
                >
                <div class="error-message" *ngIf="subjectInput.invalid && subjectInput.touched">
                  Le sujet est requis
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  [(ngModel)]="formData.message" 
                  required
                  #messageInput="ngModel"
                  [class.error]="messageInput.invalid && messageInput.touched"
                ></textarea>
                <div class="error-message" *ngIf="messageInput.invalid && messageInput.touched">
                  Le message est requis
                </div>
              </div>
              <button type="submit" class="btn btn-primary" [disabled]="!contactForm.form.valid">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .contact-info p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(30, 41, 59, 0.5);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      opacity: 0.6;
    }

    .contact-item:hover {
      transform: translateY(-2px);
      border-color: rgba(59, 130, 246, 0.4);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
      opacity: 10;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
    }

    .contact-details h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .contact-details a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
      word-break: break-word;
    }

    .contact-details a:hover {
      color: var(--primary-color);
      text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
    }

    .contact-form {
      background: transparent;
      backdrop-filter: blur(10px);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid rgba(51, 65, 85, 0.8);
      border-radius: 8px;
      font-size: 1rem;
      background: rgba(15, 23, 42, 0.8);
      color: var(--text-primary);
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }

    .form-group input.error,
    .form-group textarea.error {
      border-color: #ef4444;
      box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // Créer le lien mailto avec les données du formulaire
      const subject = encodeURIComponent(`Portfolio Contact: ${this.formData.subject}`);
      const body = encodeURIComponent(
        `Bonjour Tiffano,\n\n` +
        `Nom: ${this.formData.name}\n` +
        `Email: ${this.formData.email}\n\n` +
        `Message:\n${this.formData.message}\n\n` +
        `Cordialement,\n${this.formData.name}`
      );
      
      const mailtoLink = `mailto:gerardtiffano01@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      alert('Votre client email va s\'ouvrir avec le message pré-rempli. Merci pour votre message !');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email && this.formData.subject && this.formData.message);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}