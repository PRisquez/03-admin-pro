import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private DEFAULT_THEME = './assets/css/colors/default-dark.css';
  private themeLink = document.querySelector('#theme')!;

  constructor() {
    const url = localStorage.getItem('theme') || this.DEFAULT_THEME;
    this.themeLink.setAttribute('href',url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.themeLink.setAttribute('href',url);
    localStorage.setItem('theme', url);
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    
    const themeLinks: NodeListOf<Element> = document.querySelectorAll('.selector')!;

    themeLinks.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeLink.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        element.classList.add('working');
      }
  })
}
  
}
