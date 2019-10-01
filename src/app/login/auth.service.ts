import { Usuario } from './usuario';
import { Injectable,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostraMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    this.usuarioAutenticado = ((usuario.email == "michelzarpe@gmail.com") && (usuario.senha == "123")) ? true : false;
    if (this.usuarioAutenticado) {
      this.mostraMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.mostraMenuEmitter.emit(false);
      this.router.navigate(['/login']);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }


}
