import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  plantillas = [
    [ ],
    [
      {
        id: 0,
        tipo: 1,
        texto: 'Selección única',
        respuestas: ['Opción 1', 'Opción 2'],
        votos: [],
        resTotales: 34,
        porcentajes: [41, 59]
      },
    ],
    [
      {
        id: 0,
        tipo: 2,
        texto: 'Opción de selección múltiple',
        respuestas: ['Opción 1', 'Opción 2', 'Opción 3'],
        votos: [],
        resTotales: 3,
        porcentajes: [67, 33, 0]
      }
    ],
    [
      {
        id: 0,
        tipo: 1,
        texto: 'Plato principal',
        respuestas: ['Solomillo', 'Rodaballo'],
        votos: [],
        resTotales: 34,
        porcentajes: [41, 59]
      },
      {
        id: 1,
        tipo: 2,
        texto: 'Alérico a alguno de los elementos',
        respuestas: ['Gluten', 'Lactosa', 'Otros'],
        votos: [],
        resTotales: 3,
        porcentajes: [67, 33, 0]
      },
      {
        id: 2,
        tipo: 3,
        texto: 'Si es alérgico especificar a qué',
        votos: [],
        resTotales: 4,
        porcentajes: [],
        respuestas: []
      },
      {
        id: 3,
        tipo: 4,
        texto: 'Comentarios adicionales',
        votos: [],
        resTotales: 4,
        porcentajes: [],
        respuestas: []
      }
    ],
  ];

  constructor( private router: Router, private es: EncuestasService) { }

  ngOnInit() { }

  elegirPlantilla(num) {
    this.es.setPlantilla(this.plantillas[num]);
    this.router.navigate(['encuestas/crear-encuesta/campos']);
  }
}
