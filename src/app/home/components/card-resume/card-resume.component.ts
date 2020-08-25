import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resume',
  templateUrl: './card-resume.component.html',
  styleUrls: ['./card-resume.component.sass']
})
export class CardResumeComponent implements OnInit {

  tasks : any = [
    {class: 'first', phone: 15, messages: '15', items: 30, description: 'Leads de primer contacto'},
    {class: 'second', phone: 20, messages: '15', items: 20 ,description: 'Leads por confirmar cita'},
    {class: 'last', phone: 15, messages: '30', items: 45 ,description: 'Leads de ultimo intento'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
