import { Component , Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizioProva/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit{
  id: any
  persona: any

  constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService){}
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    if(this.route.snapshot.paramMap.get('id')){
      this.persona = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.id = +params.get('id')!
        this.persona = this.servizioProva.getPersona(this.id)
      })
    }
  }

}
