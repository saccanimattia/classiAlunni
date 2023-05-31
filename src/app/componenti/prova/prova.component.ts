import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizioProva/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent {



  constructor(private servizioProva: ServizioProvaService){

  }
  ngOnInit(): void{

  }



}

