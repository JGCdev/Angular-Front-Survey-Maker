import { Injectable } from '@angular/core';
import { Field } from '../interfaces/field';
import { Encuesta } from '../interfaces/encuesta';
import { HttpClient } from '@angular/common/http';
import { services } from '../../environments/services';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  plantilla: Array<Field>;
  encuesta: Encuesta;
  encuestaAux: Encuesta = {
    id: 1,
    config: [],
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    autor: '',
    creationDate: new Date('2015-03-25'),
    votosTotales: 4,
    fields: [
      {
        id: 0,
        tipo: 0,
        texto: 'Plato principal',
        respuestas: ['Solomillo', 'Rodaballo'],
        votos: [14, 20],
        resTotales: 34,
        porcentajes: [41, 59]
      },
      {
        id: 1,
        tipo: 1,
        texto: 'Alérico a alguno de los elementos',
        respuestas: ['Gluten', 'Lactosa', 'Otros'],
        votos: [2, 1, 0],
        resTotales: 3,
        porcentajes: [67, 33, 0]
      },
      {
        id: 2,
        tipo: 2,
        texto: 'Si es alérgico especificar a qué',
        votos: [],
        resTotales: 4,
        porcentajes: [],
        respuestas: [
          {
            usuario: 'jgimenez@gmail.com',
            respuesta: 'Mi presupeusta Jesús'
          },
          {
            usuario: 'jorge@gmail.com',
            respuesta: 'Mi presupeusta Jesús'
          },
          {
            usuario: 'pedro@gmail.com',
            respuesta: 'Mi presupeusta Jesús'
          },
          {
            usuario: 'luis@gmail.com',
            respuesta: 'Mi presupeusta Jesús'
          }
        ]
      },
      {
        id: 3,
        tipo: 3,
        texto: 'Comentarios adicionales',
        votos: [],
        resTotales: 4,
        porcentajes: [],
        respuestas: [
          {
            usuario: 'jgimenez@gmail.com',
            respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
          },
          {
            usuario: 'jorge@gmail.com',
            respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
          },
          {
            usuario: 'pedro@gmail.com',
            respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
          },
          {
            usuario: 'luis@gmail.com',
            respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
          }
        ]
      }
    ]
  };

  constructor(private http: HttpClient) { }

  setPlantilla(item) {
    this.plantilla = item;
  }
  getPlantilla() {
    return this.plantilla;
  }
  setEncuesta(item) {
    this.encuesta = item;
    // Seteamos plantilla para poder recuperar formulario
    this.plantilla = item.fields;
  }
  getEncuesta() {
    return this.encuesta;
  }
  getEncuestaById(id) {
    return this.http.get('http://localhost:3000/' + services.GET_ENCUESTA_BY_ID + id);
  }

  // Continuar con esta llamada
  crearEncuesta(encuesta: Encuesta) {
    console.log(encuesta);
    console.log('http://localhost:3000' + services.CREAR_ENCUESTA);
    return this.http.post('http://localhost:3000/' + services.CREAR_ENCUESTA, encuesta);
  }
}
