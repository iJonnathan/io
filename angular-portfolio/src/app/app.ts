import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { LoadPage } from './components/load-page/load-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home, LoadPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  showLoadPage = signal(true);

  ngOnInit() {
    setTimeout(() => {
      this.showLoadPage.set(false);
    }, 3500);
  }
}
