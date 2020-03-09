import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  usuarioGit: string;
  user : Usuario;
  gitRepo: string = 'https://api.github.com/users/PauloRenato98/repos';


  APIGIT = `https://api.github.com/users/${this.usuarioGit}`
  "https://api.github.com/users/PauloRenato98/repos"
  APITGITREPO = `https://api.github.com/users/${this.usuarioGit}/${this.gitRepo}`

  constructor(private http: HttpClient) { }




reqapi(){
    return this.http.get<Usuario>(this.APIGIT);
    console.log(this.usuarioGit);

  //#29lqcpyv0 clashofclans
}

reqapirepo(){
  return this.http.get(this.APITGITREPO);

}

getNome(valor){
  this.usuarioGit = valor;
  console.log('estou no service ---------*---------');
  this.APIGIT = `https://api.github.com/users/${this.usuarioGit}`

  }

}
