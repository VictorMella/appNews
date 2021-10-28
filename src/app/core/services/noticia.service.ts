import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { AjaxError } from 'rxjs/ajax'

import { catchError, map, pluck, tap } from 'rxjs/operators'
import { ICategorias } from '../interfaces/categorias.interface'
import { IPaises } from '../interfaces/paises.interface'
import { IDtoBusqueda } from '../interfaces/dto-busqueda.interface'
import { environment } from 'src/environments/environment'
import { INoticias } from '../interfaces/noticias.intreface'

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  imagesDefault = './assets/images/images_default.jpg'
  categorias: ICategorias[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},
]

paises: IPaises[] = [
  { value: 'ar', nombre: 'Argentina'},
  { value: 'br', nombre: 'Brasil'},
  { value: 'fr', nombre: 'Francia'},
  { value: 'hu', nombre: 'Hungria'},
  { value: 'mx', nombre: 'Mexico'},
  { value: 'gb', nombre: 'Reino Unido'},
]

  constructor( private http: HttpClient ) { }

  getCategorias():ICategorias[] {
    return this.categorias
  }

  getPaises():IPaises[] {
    return this.paises
  }

  getError(err: AjaxError) {
    console.warn('error en:', err.message)
    return of([])
}

  getNoticias(parametros: IDtoBusqueda): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${parametros.paisSeleccionado}&category=${parametros.categoriaSeleccionada}&apiKey=${environment.apiKey}`).pipe(
      pluck('articles'),
      catchError(err => this.getError(err))
    )
  }
}
