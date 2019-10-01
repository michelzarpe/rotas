import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id:string;
  inscricao: Subscription;
  curso:any;

  constructor(private routerActivate: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {
    //console.log(this.routerActivate.snapshot.params['id']);
    //this.id = this.routerActivate.snapshot.params['id'];
   }

   
  ngOnInit() {
    // via tela
    this.inscricao = this.routerActivate.params.subscribe((params:any) => {
      this.id = params['id']
      this.curso = this.cursoService.getCurso(parseInt(this.id));
      if(this.curso==null){
        this.router.navigate(['/cursos/cursoNaoEncontrado']);
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
