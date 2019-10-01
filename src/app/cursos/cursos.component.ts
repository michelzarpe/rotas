import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos:any[];
  pagina:number;
  inscricao:Subscription;
  constructor(private cursoService: CursosService, 
     private router: Router,
     private routeActivate: ActivatedRoute) { }

  ngOnInit() {
  this.cursos = this.cursoService.getCursos();
  this.inscricao=this.routeActivate.queryParams.subscribe((queryParams) =>{
      this.pagina = queryParams['pagina'];
  });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    this.router.navigate(['/cursos'],{queryParams:{'pagina':++this.pagina}});
  }

}
