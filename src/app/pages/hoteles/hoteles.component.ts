import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HotelesService } from 'src/app/services/hoteles.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styles: [
  ]
})
export class HotelesComponent implements OnInit {
  hoteles: any[] = [];
 
  constructor(
    public hotelesService: HotelesService,
    public router: Router
  ) { }

  ngOnInit(): void {


      this.cargarHoteles();
      

     
  }

  cargarHoteles() {
    this.hotelesService.listaHoteles().subscribe(data => {
      this.hoteles = data;
      console.log(this.hoteles);
    });
  }

  

  crearHotel() {
    this.router.navigate(['/crear-hotel'])
  }

  borrarElemento() {
    
   // this.hotelesService.borrarElemento(id).subscribe(
   //   (respuesta) => {
        // el objeto fue eliminado exitosamente
   //     swal.fire('Importante', 'Hotel creado correctamente', 'success');
    //  },
    //  (error) => {
    //    swal.fire('Importante', 'Error al eliminar el Hotel', 'warning');
    //  }
  //  );
  }
  borrarHotel(id: string) {
    console.log(id)
    this.hotelesService.deleteHotel(id).subscribe(
      (respuesta) => {
        // el objeto fue eliminado exitosamente
        swal.fire('Importante', 'Hotel a sido eliminado', 'success');
        this.router.navigate(['/hoteles'])
      },
      (error) => {
        swal.fire('Importante', 'Error el hotel no a sido eliminado', 'warning');
      }
    )
  }

  editarHotel(id:string) {
    console.log(id);
    this.router.navigate(['/editar-hotel', id]);
  }



}
