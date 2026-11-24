import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta-genere',
  imports: [],
  templateUrl: './etiqueta-genere.html',
  styleUrl: './etiqueta-genere.css',
})
export class EtiquetaGenere {
  // Rep el gènere del pare amb [genere]="..."
  @Input() genere!: string;

  // Color de fons segons el gènere
  get color(): string {
    switch (this.genere) {
      case 'Drama':
        return '#6a4c93';
      case 'Comèdia':
        return '#e09f3e';
      case 'Ciència-ficció':
        return '#1982c4';
      default:
        return '#6c757d';
    }
  }
}
