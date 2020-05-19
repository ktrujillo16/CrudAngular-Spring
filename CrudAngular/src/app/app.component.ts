import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './Modelo/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudAngular';

  constructor(private router:Router){}

  persona: Persona = new Persona ();

  
  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  } 
}
