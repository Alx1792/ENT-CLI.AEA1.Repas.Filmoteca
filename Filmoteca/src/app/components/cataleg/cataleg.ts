import { Component } from '@angular/core';
import { Pellicula } from '../../interficies/pellicula';
import { Pelicules } from '../../pelicula';

@Component({
  selector: 'app-cataleg',
  imports: [],
  templateUrl: './cataleg.html',
  styleUrl: './cataleg.css',
})
export class Cataleg {
  pelicules: Pellicula[] = Pelicules;

  get totalP(): number{
    return this.pelicules.length;
  }
  get disponibles():number{
     let n=0;
     for(let p of this.pelicules){
      if(p.disponible){
        n++;
      }
     }
     return n;
  }


}
