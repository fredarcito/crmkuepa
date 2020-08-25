import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  
  @Input() user:any = {avatar : ''};

  ngOnInit(): void { }

  

}
