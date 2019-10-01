import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth-guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// fazendo carregar cmo lazy loading os modulos
const routes: Routes = [
  {
    path:'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild:[CursosGuard]
  },
  {
    path:'alunos', 
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild:[AlunosGuard]
  },
  { path:'login',component:LoginComponent},
  { path:'',component:HomeComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoots conten as rotas raiz da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule { }
