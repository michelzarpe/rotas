import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const alunosRoutes: Routes = [
  {path:'',component:AlunosComponent, children:[
    {path:'novo',component:AlunoFormularioComponent},
    {path:':id',component:AlunoDetalheComponent},
    {path:':id/editar',component:AlunoFormularioComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)], // forRoots conten as rotas raiz da aplicação
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
