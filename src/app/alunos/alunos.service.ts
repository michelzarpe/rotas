import { Aluno } from './aluno.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Aluno[] = [
    {id:1, nome:'Michel Zarpelon',email:'michelzarpe@gmail.com'},
    {id:2, nome:'Douglas Mitidao',email:'douglas@gmail.com'},
    {id:3, nome:'Bazzo Nerdizao', email:'bazzo@gmail.com'},
    {id:4, nome:'Scheilla Artifon',email:'scheilla@gmail.com'},
    {id:5, nome:'Ariana TAoTao',  email:'ariana@gmail.com'},
  ];
  constructor() { }



  getAlunos() {
    return this.alunos;
  }
  
  getAluno(id: number) {
    let aluno = this.getAlunos();
    for (let i = 0; i < aluno.length; i++) {
      if (aluno[i].id == id) {
        return aluno[i];
      }
    }
    return null;
  }


}


