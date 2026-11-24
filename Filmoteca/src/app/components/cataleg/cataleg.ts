import { Component } from '@angular/core';
import { Pellicula } from '../../interficies/pellicula';
import { Pelicules } from '../../pelicula';
import { FitxaPellicula } from '../fitxa-pellicula/fitxa-pellicula';

@Component({
  selector: 'app-cataleg',
  imports: [FitxaPellicula],
  templateUrl: './cataleg.html',
  styleUrl: './cataleg.css',
})
export class Cataleg {
  pelicules: Pellicula[] = Pelicules;
  cerca ='';
  ordre = 'titol';

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
    return hores+" h " + resta + " min"

  }
  get valoracioMitjana(): string{
      let suma = 0;
      for(let p of this.pelicules){
        suma += p.valoracio;
      }
      let mitjana = suma/this.pelicules.length;
      return mitjana.toFixed(1);
  }

  llogar(p: Pellicula): void {
  p.disponible = false;
}

retornar(p: Pellicula): void {
  p.disponible = true;
}
onCerca(event: Event): void {
  this.cerca = (event.target as HTMLInputElement).value;
}

onOrdena(event: Event): void {
  this.ordre = (event.target as HTMLSelectElement).value;
}

get peliculesVisibles(): Pellicula[] {
  const text = this.cerca.trim().toLowerCase();
  const llista = this.pelicules.filter(p => p.titol.toLowerCase().includes(text));
  // filter() ja crea una còpia, així que ordenar no toca l'array original
  switch (this.ordre) {
    case 'any':
      return llista.sort((a, b) => a.any - b.any);
    case 'valoracio':
      return llista.sort((a, b) => b.valoracio - a.valoracio);
    case 'durada':
      return llista.sort((a, b) => a.durada - b.durada);
    default:
      return llista.sort((a, b) => a.titol.localeCompare(b.titol));
  }
}



}
