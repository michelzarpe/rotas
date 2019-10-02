import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [{ id: 1, nome: "angular2" }, { id: 2, nome: "NodeJS" }]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == id) {
        return cursos[i];
      }
    }
    return null;
  }

}
