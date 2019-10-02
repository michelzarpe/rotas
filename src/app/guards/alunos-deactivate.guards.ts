import { IFormCanDeativate } from './form-candeactivate';
import { AlunoFormularioComponent } from './../alunos/aluno-formulario/aluno-formulario.component';

import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// guard para formularios ontem está sendo preenchido informações e por um acaso é clicado em um link, pra não perder tudo é utilizado este guard
@Injectable()
export class AlunosCanDeactivateGuard implements CanDeactivate<IFormCanDeativate> {
    
    constructor(){}

    canDeactivate(component: IFormCanDeativate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        console.log("AlunosCanDeactivateGuard");
        return component.podeDesativar();
    }
}
