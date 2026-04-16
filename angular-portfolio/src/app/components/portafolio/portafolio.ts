import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
  rating: number;
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {
  currentSlide = signal(0);

  interests = [
    { name: 'UI/UX Design', icon: '/assets/ui-ux-icon.png' },
    { name: 'Responsive Web Design', icon: '/assets/rwd-icon.png' },
    { name: 'Development', icon: '/assets/dev-icon.png' }
  ];

  projects: Project[] = [
    {
      title: 'Hidromet',
      image: '/assets/hidromet.png',
      description: 'Hidromet es un sistema de transmisión y monitorización de información hidro-meteorológica captada de varias estaciones en la zona sur del país, cuya funcionalidad principal es mostrar a los usuarios gráficas y reportes en tiempo real de los datos captados de los distintos sensores. Además, el poder descargar estos datos crudos para su posterior análisis y corrección.',
      link: 'https://www.promas.ucuenca.edu.ec/hidromet',
      rating: 5
    },
    {
      title: 'Náufrago Sys',
      image: '/assets/naufrago2.png',
      description: 'Naufrago sys es una aplicación de escritorio escrita en Java para un restaurante, el cual permite gestionar y automatizar los procesos tales como pedidos, productos, caja y facturación.',
      rating: 5
    }
  ];

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.projects.length);
  }

  prevSlide() {
    this.currentSlide.set((this.currentSlide() - 1 + this.projects.length) % this.projects.length);
  }

  setSlide(index: number) {
    this.currentSlide.set(index);
  }
}
