import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asociacion } from 'src/app/models/asociacion';
import { AsociacionService } from 'src/app/services/asociacion.service';
import swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-asociacion',
  templateUrl: './add-asociacion.component.html',
  styleUrls: ['./add-asociacion.component.css']
})
export class AddAsociacionComponent implements OnInit {
  asociacionModel:Asociacion = new Asociacion();
  constructor(private asociacionService:AsociacionService,private router: Router, private activatedRoute:ActivatedRoute) { }
 

  
  ngOnInit(): void {
  }

  
  public create():void{       
    this.asociacionService.addAsociacion(this.asociacionModel).subscribe(        
      response=>{
      swal.fire('Nuevo Asociacion', `Asociacion ${this.asociacionModel.nombre_asociacion,this.asociacionModel.imformacion_adicional,this.asociacionModel.denominacion_id_denominacion,this.asociacionModel.numero_mienbros,this.asociacionModel.ubicacion_id_ubi_hijo ,this.asociacionModel.fecha_constitucion,this.asociacionModel.junta_vecinal_id_jd,this.asociacionModel.id_solicitante} creado con exito`,"success")})  
      this.router.navigate(['/listar'])

    }
}
