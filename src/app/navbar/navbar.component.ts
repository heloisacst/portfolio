import { Component, ElementRef, HostListener} from '@angular/core';

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

  isMenuOpen: boolean = window.innerWidth > 767;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.isMenuOpen = window.innerWidth > 767;
  }

  isMobile(): boolean {
    return window.innerWidth <= 1200;
  }

}
