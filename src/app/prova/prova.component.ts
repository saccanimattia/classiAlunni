import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnChanges{

  @Input() data: any;
  nome = 'LUCA'

  @Output() mandaDatiEvento = new EventEmitter<string>()

  constructor(){
    console.log("costruttore");
  }
  ngOnInit(): void{
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }
  mandaDati(){
    this.mandaDatiEvento.emit(this.nome);
  }


}

