import { CardServiceService } from './../card-service.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  getrepositorios: any = [];
  user : Usuario;
  inputNomePlayer: string;

  constructor(private cardservice : CardServiceService) { }

  ngOnInit() {

  }

  chamarApi(){
    this.cardservice.reqapi().subscribe((dados) => {
      this.user= dados;
      console.log(dados);
      console.log(this.user.avatar_url);
    });
    this.chamarApiRepo();


  }


  inputUser(usuarioGit){
    this.cardservice.getNome(usuarioGit);
  }


  chamarApiRepo(){
    this.cardservice.reqapirepo().subscribe((dadosretorno) => {
      this.getrepositorios = dadosretorno;
      console.log(this.getrepositorios);
    })
  }

 /* inputPlayer(e){
    const pegarvalor = e;
    this.inputNomePlayer = pegarvalor;

  }*/
}
