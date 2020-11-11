import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asociacion } from 'src/app/models/asociacion';
import { AsociacionService } from 'src/app/services/asociacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-asociacion',
  templateUrl: './update-asociacion.component.html',
  styleUrls: ['./update-asociacion.component.css']
})
export class UpdateAsociacionComponent implements OnInit {

  asociaciones: any;  
  asociacion:Asociacion=new Asociacion();
  constructor(private asociacionService:AsociacionService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.cargarAsociacion();
  }
cargarAsociacion():void{
  this.activatedRoute.params.subscribe(params=>{
    let id = params['id']
    if(id){
      this.asociacionService.getAsociacion(id).subscribe(
        (data)=>{
        this.asociaciones=data['cursor_asociacion'] 
        this.asociacion.NOMBRE_ASOCIACION=this.asociaciones[0].NOMBRE_ASOCIACION;
        this.asociacion.ID_ASOCIACION=this.asociaciones[0].ID_ASOCIACION;
        this.asociacion.NUMERO_MIENBROS=this.asociaciones[0].NUMERO_MIENBROS;
        this.asociacion.FECHA_CONSTITUCION=this.asociaciones[0].FECHA_CONSTITUCION;
        this.asociacion.ID_SOLICITANTE=this.asociaciones[0].ID_SOLICITANTE;
        this.asociacion.IMFORMACION_ADICIONAL=this.asociaciones[0].IMFORMACION_ADICIONAL;
        this.asociacion.UBICACION_ID_UBI_HIJO=this.asociaciones[0].UBICACION_ID_UBI_HIJO;
        this.asociacion.JUNTA_VECINAL_ID_JD=this.asociaciones[0].ID_JUNTA_VECINAL_ID_JDOL;
        this.asociacion.DENOMINACION_ID_DENOMINACION=this.asociaciones[0].DENOMINACION_ID_DENOMINACION;

      })
    }
  })
}
modificarAsociacion():void{
  this.asociacionService.updateAsociacion(this.asociacion).subscribe(
    response=>{
      swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/listar'])
          swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success'
          )
        }
      })    
  })
}

}
