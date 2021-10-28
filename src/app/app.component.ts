import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appNews';
  titulo: string;

  constructor() {
    this.titulo = 'Buscador de noticias'
  }

  ngOnInit() {

  }
}
