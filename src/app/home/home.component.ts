import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarBotao = true;

  scrollTo(destination: string): void {
    const element = document.getElementById(destination);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  enviarMensagem() {
    let numeroTelefone = '5547997629625';
    let mensagem = 'Olá! Vi seu portfólio, podemos conversar?';

    window.open(`https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
  }


}

