import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  

  constructor(
    public _usuarioServer: UsuarioService
  ) {
   let nombreUsuario = localStorage.getItem('usuario');
   }

  ngOnInit(): void {
   
  }

  

}
