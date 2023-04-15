import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-create-hoteles',
  templateUrl: './create-hoteles.component.html',
  styleUrls: ['./create-hoteles.component.css']
})
export class CreateHotelesComponent implements OnInit {
  formulari: FormGroup;
  constructor(
    public hotelService: HotelesService,
    public router: Router
  ) { 
    this.formulari = new FormGroup({
      code: new FormControl( null , Validators.required ),
      address: new FormControl(null , Validators.required )
    } );
  }

  ngOnInit(): void {
  }

  get h() { return this.formulari.controls; }

  crearHotel() {
    console.log('data:',this.h.code.value,this.h.address.value);
    if ( this.formulari.invalid ) {
      return;
    }

    this.hotelService.registerHotel(this.h.code.value,this.h.address.value).pipe().subscribe((response: any) => {
     
      swal.fire('Importante', 'Hotel creado correctamente', 'success');
      
    },
    (error: any) => {
      console.log(error);
    });
  }

}
