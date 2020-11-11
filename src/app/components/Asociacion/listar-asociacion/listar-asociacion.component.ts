import { Component, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/models/asociacion';
import { AsociacionService } from 'src/app/services/asociacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-asociacion',
  templateUrl: './listar-asociacion.component.html',
  styleUrls: ['./listar-asociacion.component.css']
})
export class ListarAsociacionComponent implements OnInit {
asociaciones: any;
  constructor(private asociacionService: AsociacionService) { }

  ngOnInit(): void {
 this.listar();
  }
  
  delLogica(num:number):void{
   
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      
    }).then((result) => {
      if (result.isConfirmed) {
        this.asociacionService.updateLogica(num).subscribe(
          response=>{
            console.log(result);
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
          })        
      }
    })  
  }
  listar():void{
    this.asociacionService.getAsociaciones().subscribe(
      (data)=>{        
        this.asociaciones = data['cursor_asociacion'];
        console.log("Asociaciones",this.asociaciones);        
      },(err)=>{
        console.log("Error en el listar-asociacion-component")
      }
    ) 
  }
}
