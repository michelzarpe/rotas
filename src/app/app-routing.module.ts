import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth-guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina404Component } from './pagina404/pagina404.component';


// fazendo carregar cmo lazy loading os modulos
const routes: Routes = [
  {
    path:'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard], //verifica se está logado
    canActivateChild:[CursosGuard], //verifica se está logado
    canLoad: [AuthGuard] //verifica se tem autorizacao para carregar os arquivos da pagina

  },
  {
    path:'alunos', 
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard], //verifica se está logado
    canActivateChild:[AlunosGuard], //verifica se está logado
    canLoad: [AuthGuard] //verifica se tem autorizacao para carregar os arquivos da pagina
  },
  { path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  { path:'', redirectTo:'/home', pathMatch: 'full'},
  { path:'**',component:Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], // forRoots conten as rotas raiz da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule { }
