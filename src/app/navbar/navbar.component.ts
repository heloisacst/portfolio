import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  showLanguageMenu = false;

  constructor(private el: ElementRef) {}

  scrollTo(destination: string): void {
    const element = document.getElementById(destination);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleLanguageMenu(): void {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  selectLanguage(language: string): void {
    console.log(`Idioma selecionado: ${language}`);
    this.showLanguageMenu = false; // Oculta o menu após a seleção
  }

}
