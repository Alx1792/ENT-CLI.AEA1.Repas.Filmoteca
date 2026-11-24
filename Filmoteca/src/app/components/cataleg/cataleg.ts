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
  get duradaTotal(): string{
    let minuts =0;
    for(let p of this.pelicules){
      minuts += p.durada;
    }
    let hores = Math.floor(minuts/60);
    let resta= minuts % 60;
    return hores+" h " + resta + " min en total"

  }
  get valoracioMitjana(): string{
      let suma = 0;
      for(let p of this.pelicules){
        suma += p.valoracio;
      }
      let mitjana = suma/this.pelicules.length;
      return mitjana.toFixed(1);
  }



}
