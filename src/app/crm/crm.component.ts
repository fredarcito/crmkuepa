import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.sass']
})
export class CrmComponent implements OnInit {

  idUser = environment.api.idUser;
  user:any = {avatar : ''};
  users = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getUser(this.idUser);
    this.getUsers();
  }

  getUser(id){
    this.homeService.getUser(id).subscribe(res => {
      this.user = res;
    })
  }

  getUsers(){
    this.homeService.getPlayers().subscribe( res => {

      this.users = res.map((user:any) => {
        return {name: user.name, type: user.team_name }
      })
      
    })
  }

}
