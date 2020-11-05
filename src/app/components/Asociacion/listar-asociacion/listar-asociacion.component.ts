import { Component, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/models/asociacion';
import { AsociacionService } from 'src/app/services/asociacion.service';

@Component({
  selector: 'app-listar-asociacion',
  templateUrl: './listar-asociacion.component.html',
  styleUrls: ['./listar-asociacion.component.css']
})
export class ListarAsociacionComponent implements OnInit {
asociaciones: Asociacion[];
displayedColumns : string[] = ['ID_ASOCIACION','NOMBRE_ASOCIACION','IMFORMACION_ADICIONAL','DENOMINACION_ID_DENOMINACION','NUMERO_MIENBROS','UBICACION_ID_UBI_HIJO','FECHA_CONSTITUCION','JUNTA_VECINAL_ID_JD','ID_SOLICITANTE'];
  constructor(private asociacionService: AsociacionService) { }

  ngOnInit(): void {
    this.asociacionService.getAsociacion().subscribe(
      (data)=>{
        this.asociaciones = data['cursor_asociacion'];
        alert(this.asociaciones);
      }
    )
  }
}
