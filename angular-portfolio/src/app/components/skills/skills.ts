import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
    { name: 'JavaScript', level: 5, color: 'rgba(255, 153, 0, 0.85)' },
    { name: 'Java', level: 5, color: 'rgba(12, 39, 161, 0.75)' },
    { name: 'HTML', level: 4, color: 'rgba(227, 79, 38, 0.85)' },
    { name: 'Vue / Angular', level: 4, color: 'rgba(65, 184, 131, 0.85)' },
    { name: 'CSS', level: 3, color: 'rgba(70, 165, 168, 0.8)' },
    { name: 'C', level: 3, color: 'rgba(80, 80, 168, 0.8)' },
    { name: 'Python', level: 2, color: 'rgba(138, 19, 69, 0.8)' },
    { name: 'Photoshop', level: 2, color: 'rgba(49, 168, 255, 0.8)' }
  ];
}
