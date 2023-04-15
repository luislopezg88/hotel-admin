import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  token: string = ''
  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
    
  ) { }

  ngOnInit(): void {
  }

  ingresar(forma: NgForm) {

    if(forma.invalid) {
      return
    }

    
    console.log(forma.valid);

    console.log( forma.value );

    this._usuarioService.loginUser(forma.value.email, forma.value.password).pipe().subscribe((response: any) => {


      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('usuario', response.email);
      localStorage.setItem('usuario', response.userName);
     
      
      this.router.navigate(['/hoteles'])
    },
    (error: any) => {
      console.log(error);
    });
  }

}
