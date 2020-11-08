import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarAsociacionComponent } from './components/Asociacion/listar-asociacion/listar-asociacion.component';
import { AsociacionService } from './services/asociacion.service';
import{HttpClientModule} from '@angular/common/http';
import { UpdateAsociacionComponent } from './components/Asociacion/update-asociacion/update-asociacion.component';
import { AddAsociacionComponent } from './components/Asociacion/add-asociacion/add-asociacion.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ListarAsociacionComponent,
    UpdateAsociacionComponent,
    AddAsociacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    AsociacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
