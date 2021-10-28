import { Component, OnInit } from '@angular/core';
import { IDtoBusqueda } from './core/interfaces/dto-busqueda.interface'
import { INoticias } from './core/interfaces/noticias.intreface'
import { NoticiaService } from './core/services/noticia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appNews';
  titulo: string;
  lsnoticias: INoticias[]
  loading: boolean;

  constructor(private noticiaService: NoticiaService) {
    this.titulo = 'Buscador de noticias'
    this.loading = false
  }

  ngOnInit() {
  }

  onHandleBusquedaSeleccionada(evento: IDtoBusqueda) {
    this.loading = true
    this.noticiaService.getNoticias(evento).pipe().subscribe((resp: INoticias[]) => {
      this.lsnoticias = resp
      this.loading = false
    })
  }
}
