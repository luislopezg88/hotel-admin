import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ){

  }

  canActivate() {
    console.log("paso por el gard");

    if(this._usuarioService.estasLogeado()){
      console.log("paso por el gard");
      return true;
    }else {
      console.log("bloqueado por el gard");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
    
  }
  
  
}
