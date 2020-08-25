import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = environment.api.url;

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(`${ this.url }/proPlayers`) 
    .pipe(
      map( (resp:[]) => resp.filter((item, index) => index < 100 ))
    );
  }

  getUser(id){
    return this.http.get(`${ this.url }/players/${id}`) 
    .pipe(
      map( (resp:any) => resp.profile )
    );
  }


  
}
