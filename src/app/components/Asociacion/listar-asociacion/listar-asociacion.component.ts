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
asociaciones: Asociacion[];
  constructor(private asociacionService: AsociacionService) { }

  ngOnInit(): void {
    this.asociacionService.getAsociaciones().subscribe(
      (data)=>{
        this.asociaciones = data['cursor_asociacion'];
        alert(this.asociaciones);
      }
    )
  }
  
  delAsociacion(num:number):void{
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }
}
