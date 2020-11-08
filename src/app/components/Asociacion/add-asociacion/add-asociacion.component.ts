import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asociacion } from 'src/app/models/asociacion';
import { AsociacionService } from 'src/app/services/asociacion.service';

@Component({
  selector: 'app-add-asociacion',
  templateUrl: './add-asociacion.component.html',
  styleUrls: ['./add-asociacion.component.css']
})
export class AddAsociacionComponent implements OnInit {

 
  constructor(private asociacionService:AsociacionService,private router: Router) { }
  ngOnInit(): void {
  }

  asociacionModel:Asociacion = new Asociacion();

  onSubmit(){

  }
  public create():void{
    this.asociacionService.addAsociacion(this.asociacionModel).subscribe(
      response=>this.router.navigate(['/asociacion'])
    )
}
}
