import { IFormCanDeativate } from './../../guards/form-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.scss']
})
export class AlunoFormularioComponent implements OnInit, IFormCanDeativate {

  inscricao: Subscription;
  aluno: any = {};
  private formMudou: boolean = false;

  constructor(private routerActivate: ActivatedRoute,
    private alunoService: AlunosService) { }

    ngOnInit() {
      // via tela
      this.inscricao = this.routerActivate.params.subscribe((params:any) => {
        this.aluno = this.alunoService.getAluno(parseInt(params['id']));
        if(this.aluno==null){
          this.aluno={};
        }
      });
    }

    onInput(){
      this.formMudou = true;
    }

    podeDesativar() {
      return this.podeMudarRota();
    }
  
    podeMudarRota() {
      if(this.formMudou){
        return confirm("DEseja Sair da pagina?");
       
      }
      return true;
    }

    ngOnDestroy(){
      this.inscricao.unsubscribe();
    }

}
