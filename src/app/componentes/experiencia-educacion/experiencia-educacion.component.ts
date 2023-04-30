import { Component, OnInit } from '@angular/core';
import { DatosPorftfolioService } from 'src/app/services/datos-porftfolio.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit{
  miporfolio:any;

    constructor(private datosportfolio:DatosPorftfolioService ){}

     ngOnInit(): void{
      this.datosportfolio.ObtenerDatos().subscribe(data =>{
        console.log(data);
        this.miporfolio=data;
      });
     }
    }
