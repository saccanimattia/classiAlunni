import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizioProva/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit{
  persona: any
  persone: any
  constructor(private servizioProva: ServizioProvaService){}

  ngOnInit(): void{
    this.persone = this.servizioProva.getPersone()
  }
}
