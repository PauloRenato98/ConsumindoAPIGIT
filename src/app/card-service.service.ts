import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  usuarioGit: string;
  user : Usuario;
  username:string ='Gabriel1Aguiar';

  APIGIT = `https://api.github.com/users/${this.username}`

  constructor(private http: HttpClient) { }




reqapi(){
    return this.http.get<Usuario>(this.APIGIT);
    console.log(this.usuarioGit);
  
  //#29lqcpyv0 clashofclans
}


getNome(valor){
  this.usuarioGit = valor;
  console.log('estou no service ---------*---------');
 
  }

}
