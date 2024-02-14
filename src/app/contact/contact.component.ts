import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submit(formulario: NgForm, event: Event) {
    event.preventDefault();

    const nome = formulario.value.name;
    const telefone = formulario.value.phone;
    const mensagem = formulario.value.message;
  }

}
