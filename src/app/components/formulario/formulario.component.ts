import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategorias } from 'src/app/core/interfaces/categorias.interface'
import { IDtoBusqueda } from 'src/app/core/interfaces/dto-busqueda.interface'
import { IPaises } from 'src/app/core/interfaces/paises.interface'
import { NoticiaService } from 'src/app/core/services/noticia.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() handleBusquedaSeleccionada = new EventEmitter<IDtoBusqueda>()
  lsCategorias: ICategorias[];
  lsPaises: IPaises[];
  categoriaSeleccionada : string
  paisSeleccionado : string


  constructor( private noticiasService: NoticiaService ) {
    this.lsCategorias = noticiasService.getCategorias()
    this.lsPaises = noticiasService.getPaises()
    this.paisSeleccionado = 'ar'
    this.categoriaSeleccionada = 'general'
  }

  ngOnInit(): void {
  }

  buscarNoticia(): void {
    this.handleBusquedaSeleccionada.emit({ categoriaSeleccionada: this.categoriaSeleccionada, paisSeleccionado: this.paisSeleccionado})
  }
}
