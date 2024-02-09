  import { Component, HostListener } from '@angular/core';

  @Component({
    selector: 'app-whatsapp',
    templateUrl: './whatsapp.component.html',
    styleUrls: ['./whatsapp.component.css']
  })
  export class WhatsappComponent {
    mostrarBotao = true;

    enviarMensagem() {
      let numeroTelefone = '5547997629625';
      let mensagem = 'Olá! Vi seu portfólio, podemos conversar?';

      window.open(`https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
    }
  }
