import { Component,OnInit } from '@angular/core';
import { DatosPorftfolioService } from 'src/app/services/datos-porftfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  acercadelist:any;

    constructor(private datosportfolio:DatosPorftfolioService ){}

     ngOnInit(): void{
      this.datosportfolio.ObtenerDatos().subscribe(data =>{
        console.log(data);
        this.acercadelist=data.acerca_de;
      });
     }
    }
