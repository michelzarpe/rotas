
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursosComponent, 
    CursoDetalheComponent, 
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [CursosService],
  exports:[
    CursosComponent, 
    CursoDetalheComponent, 
    CursoNaoEncontradoComponent
  ]
})
export class CursosModule { }
