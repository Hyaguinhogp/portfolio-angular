import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  ngOnInit() {
    const root = document.documentElement;
    let width = window.innerWidth;

    if (width < 1200) {
      root.style.setProperty('--column-width', (((width - 40) - (5 * 20)) / 6) + 'px');
    }
    else {
      root.style.setProperty('--column-width', (((1200) - (11 * 20)) / 12) + 'px');
    }
  }
}
