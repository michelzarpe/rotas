import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
  {path:'',component:CursosComponent},
  {path:'cursoNaoEncontrado',component:CursoNaoEncontradoComponent},
  {path:':id',component:CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], // forRoots conten as rotas raiz da aplicação
  exports: [RouterModule]
})
export class CursosRoutingModule { }
3