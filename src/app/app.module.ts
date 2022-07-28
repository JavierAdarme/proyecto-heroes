import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipeComponent } from './ejemplos-pipe/ejemplos-pipe.component';

@NgModule({
  //declarar componentes, Pipes y Directivas
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipeComponent
  ],
  //Importar las librerias
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Declarar nuestros servicios
  providers: [],
  //Cual es el componente que se va ejecutar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
