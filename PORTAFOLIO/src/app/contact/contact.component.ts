import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  checkAdult: boolean;
  departament: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // este model puede ser una carga de una api
  model = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: '',
  };

  onSubmit(value: any): void {
    console.log('Form values', value);
  }
}
