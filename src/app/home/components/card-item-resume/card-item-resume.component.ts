import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-resume',
  templateUrl: './card-item-resume.component.html',
  styleUrls: ['./card-item-resume.component.sass']
})
export class CardItemResumeComponent implements OnInit {

  @Input() item : any = {class: 'first', phone: 0, messages: 0, items: 0, description: 'description'}

  constructor() { }

  ngOnInit(): void {
  }

}
