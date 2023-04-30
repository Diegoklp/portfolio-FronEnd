import { Component,OnInit } from '@angular/core';
import { DatosPorftfolioService } from 'src/app/services/datos-porftfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  miporfolio:any;

    constructor(private datosportfolio:DatosPorftfolioService ){}

     ngOnInit(): void{
      this.datosportfolio.ObtenerDatos().subscribe(data =>{
        console.log(data);
        this.miporfolio=data;
      });
     }
    }
