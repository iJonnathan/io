import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { AboutMe } from '../../components/about-me/about-me';
import { Portafolio } from '../../components/portafolio/portafolio';
import { Skills } from '../../components/skills/skills';
import { ContactMe } from '../../components/contact-me/contact-me';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, AboutMe, Portafolio, Skills, ContactMe, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
