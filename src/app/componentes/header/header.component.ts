import { Component,OnInit } from '@angular/core';
import { DatosPorftfolioService } from 'src/app/services/datos-porftfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
miporfolio:any;

  constructor(private datosportfolio:DatosPorftfolioService ){}

   ngOnInit(): void{
    this.datosportfolio.ObtenerDatos().subscribe(data =>{
      console.log(data);
      this.miporfolio=data;
    });
   }
  }
