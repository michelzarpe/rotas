import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormsModule } from '@angular/forms';
import { AlunosCanDeactivateGuard } from '../guards/alunos-deactivate.guards';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  exports:[
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ], 
  providers:[AlunosService,AlunosCanDeactivateGuard]
})
export class AlunosModule { }
