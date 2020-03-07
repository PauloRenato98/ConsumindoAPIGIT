import { CardServiceService } from './../card-service.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  user : Usuario[];
  inputNomePlayer: string;

  constructor(private cardservice : CardServiceService) { }

  ngOnInit() {
  
  }

  chamarApi(){
    this.cardservice.reqapi().subscribe((dados) => {
      this.user = dados;
      console.log(this.user)
    });
  }
  
  
  inputUser(usuarioGit){
    this.cardservice.getNome(usuarioGit);
  }

 /* inputPlayer(e){
    const pegarvalor = e;
    this.inputNomePlayer = pegarvalor;
    
  }*/
}
