import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  

  constructor(
   public _usuarioService: UsuarioService,
   public router: Router
  ) {
    

    this.forma = new FormGroup({
      userName: new FormControl( null , Validators.required ),
      email: new FormControl( null , [Validators.required, Validators.email] ),
      password: new FormControl( null , Validators.required ),
      password2: new FormControl( null , Validators.required ),
      condiciones: new FormControl( false )
    }, { validators: this.sonIguales( 'password', 'password2' )  } );

    
   }

  ngOnInit(): void {

    
  
  }


  sonIguales(campo1: string, campo2: string) {
    return (control: AbstractControl) => {

      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }

  get f() { return this.forma.controls; }

  registrarUsuario() {

    console.log('data:',this.f.userName.value,this.f.email.value,this.f.password.value);
    
    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
      swal.fire('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }
    

    this._usuarioService.registerUser(this.f.userName.value,this.f.email.value,this.f.password.value).pipe().subscribe((response: any) => {


      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('email', response.email);
      localStorage.setItem('usuario', response.userName);
     
      swal.fire('Importante', 'Usuario registrado correctamente', 'success');
      this.router.navigate(['/hoteles'])
    },
    (error: any) => {
      console.log(error);
    });

    
  }

}
