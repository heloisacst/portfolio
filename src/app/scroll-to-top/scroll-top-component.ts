import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top-component.html',
  styleUrls: ['./scroll-top-component.css']
})

export class ScrollTopComponent {
  mostrarBotao = false;
  pontoDeExibicao = 300; // Defina o ponto de exibição conforme necessário

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.pontoDeExibicao) {
      this.mostrarBotao = true;
    } else {
      this.mostrarBotao = false;
    }
  }

  scrollToTop() {
    // Rola suavemente para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
