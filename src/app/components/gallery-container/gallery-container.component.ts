import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'gallery-container-component',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryContainerComponent implements OnInit {

  personas: Persona[];
  personaSelected: Persona;
  showModal: boolean = false;

  constructor(private personasService: PersonasService) {
    this.personasService.fetchPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }

  ngOnInit(): void {
    
  }

  onShowModal(event: boolean) {
    this.showModal = event;
  }

  onSelectPersona(persona) {
    this.showModal = true;
    this.personaSelected = persona;
  }

}
