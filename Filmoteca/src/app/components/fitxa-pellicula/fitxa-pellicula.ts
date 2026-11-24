import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pellicula } from '../../interficies/pellicula';

@Component({
  selector: 'app-fitxa-pellicula',
  imports: [],
  templateUrl: './fitxa-pellicula.html',
  styleUrl: './fitxa-pellicula.css',
})
export class FitxaPellicula {
  @Input() pellicula!: Pellicula;
  @Input() ordre!:number;
  @Output() llogar = new EventEmitter<Pellicula>();
@Output() retornar = new EventEmitter<Pellicula>();

clickLlogar(): void {
  this.llogar.emit(this.pellicula);
}

clickRetornar(): void {
  this.retornar.emit(this.pellicula);
}

}
