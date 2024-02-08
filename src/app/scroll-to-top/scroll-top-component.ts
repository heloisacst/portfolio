import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top-component.html',
  styleUrls: ['./scroll-top-component.css']
})

export class ScrollTopComponent {
  mostrarBotao = false;
  pontoDeExibicao = 300;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.pontoDeExibicao) {
      this.mostrarBotao = true;
    } else {
      this.mostrarBotao = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
