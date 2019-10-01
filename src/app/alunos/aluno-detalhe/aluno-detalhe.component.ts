import { AlunosService } from './../alunos.service';
import { CursosService } from './../../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {


  id:string;
  inscricao: Subscription;
  aluno:any;


  constructor(private routerActivate: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService) {
   }

   ngOnInit() {
    // via tela
    this.inscricao = this.routerActivate.params.subscribe((params:any) => {
      this.id = params['id']
      this.aluno = this.alunoService.getAluno(parseInt(this.id));
      if(this.aluno==null){
        this.router.navigate(['/cursoNaoEncontrado']);
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id,'editar']);
  }


}
