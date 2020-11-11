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
  constructor(private asociacionService:AsociacionService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
 

  
  ngOnInit(): void {
  }

  
  public create():void{       
    this.asociacionService.addAsociacion(this.asociacionModel).subscribe(        
      response=>{
        this.router.navigate(['/listar'])
      swal.fire('Nuevo Asociacion', `Asociacion ${this.asociacionModel.DENOMINACION_ID_DENOMINACION,this.asociacionModel.FECHA_CONSTITUCION,this.asociacionModel.ID_SOLICITANTE,this.asociacionModel.IMFORMACION_ADICIONAL,this.asociacionModel.JUNTA_VECINAL_ID_JD,this.asociacionModel.NOMBRE_ASOCIACION,this.asociacionModel.NUMERO_MIENBROS,this.asociacionModel.UBICACION_ID_UBI_HIJO} creado con exito`,"success")      
    })
   
}
}
