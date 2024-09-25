import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  
  toggleTheme(event: any) {
    const isChecked = event.detail ? event.detail.checked : !document.body.hasAttribute('color-theme');
    if (isChecked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

}
