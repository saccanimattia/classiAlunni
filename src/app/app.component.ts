import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classiAlunni';
  persone = [
    {nome:"luca", cognome:"rosi", isOnline:true, colore:'blue'},
    {nome:"marco", cognome:"verdi", isOnline:true, colore:'yellow'},
    {nome:"daniele", cognome:"neri", isOnline:false, colore:'orange'},
    {nome:"luca", cognome:"rosi", isOnline:false, colore:'blue'},
    {nome:"marco", cognome:"verdi", isOnline:false, colore:'green'},
    {nome:"daniele", cognome:"neri", isOnline:true, colore:'blue'}
  ];
  onClick(){
    this.persone = [
      {nome:"t5rgh45", cognome:"rosi", isOnline:true, colore:'blue'},
      {nome:"mabr346thrco", cognome:"verdi", isOnline:true, colore:'yellow'},
      {nome:"$hgrf3", cognome:"neri", isOnline:false, colore:'blue'},
      {nome:"4grf3", cognome:"6h4rgf", isOnline:false, colore:'blue'},
      {nome:"marco", cognome:"ht4rge", isOnline:false, colore:'blue'},
      {nome:"daniele", cognome:"neri", isOnline:true, colore:'blue'}
    ];
  }
  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value;
  }
  riceviDati(value: string){
    console.log(value);
  }
}
