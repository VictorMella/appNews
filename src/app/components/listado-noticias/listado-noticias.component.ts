import { Component, Input, OnInit } from '@angular/core';
import { INoticias } from 'src/app/core/interfaces/noticias.intreface'

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {
  @Input() noticias: INoticias[];
  constructor() { }

  ngOnInit(): void {
  }

}
