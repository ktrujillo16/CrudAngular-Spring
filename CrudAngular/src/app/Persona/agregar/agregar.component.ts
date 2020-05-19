import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router,private Service:ServiceService) { }

  ngOnInit(): void {
  }

  persona:Persona = new Persona();
  Guardar(){
    this.Service.createPersonas(this.persona).subscribe(data=>{
      alert("Se ha agregado con exito a "+this.persona.name+" "+this.persona.apellidos);
      this.router.navigate(["listar"]);
  
    })
  }

  
}
