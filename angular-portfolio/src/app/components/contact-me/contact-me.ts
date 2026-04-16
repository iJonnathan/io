import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export class ContactMe {
  name = signal('');
  email = signal('');
  message = signal('');

  isSending = signal(false);
  notification = signal<{ show: boolean, type: 'success' | 'error', text: string }>({ show: false, type: 'success', text: '' });

  sendMessage(event: Event) {
    event.preventDefault();

    if (this.name() && this.email() && this.message()) {
      this.isSending.set(true);

      // Simulated API Call
      setTimeout(() => {
        this.isSending.set(false);
        this.name.set('');
        this.email.set('');
        this.message.set('');
        this.showNotification('success', '¡Mensaje enviado con éxito! Te contactaré pronto.');
      }, 1500);

    } else {
      this.showNotification('error', 'Por favor completa todos los campos.');
    }
  }

  showNotification(type: 'success' | 'error', text: string) {
    this.notification.set({ show: true, type, text });
    setTimeout(() => {
      this.notification.set({ show: false, type, text: '' });
    }, 4000);
  }
}
