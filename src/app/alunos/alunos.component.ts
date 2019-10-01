import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  private alunos : any [] = [];

  constructor(private alunosService:AlunosService) { }

  ngOnInit() {
    this.alunos =  this.alunosService.getAlunos();
  }

}
