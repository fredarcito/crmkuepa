import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-contacts',
  templateUrl: './bar-contacts.component.html',
  styleUrls: ['./bar-contacts.component.sass']
})
export class BarContactsComponent implements OnInit {

  @Input() users = [ 
    { name: '', type: '' }
  ]

  constructor() { }

  ngOnInit(): void {}

}
