import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }

  persona:Persona = new Persona();

  ngOnInit(): void {
    this.Editar();
    this.Actualiza(this.persona);
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonasId(+id).subscribe
    (data=>{this.persona=data;})
  }

   Actualiza(persona:Persona){
    this.service.updatePersona(persona).subscribe
    (data=>{this.persona=data;
    alert("Se actualizo con exito");
    this.router.navigate(["listar"])
  })
  }
  
}
