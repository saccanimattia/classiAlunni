import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible =true;
  title = 'classiAlunni';
  persone = [
    {nome:"luca", cognome:"rosi", isOnline:true},
    {nome:"marco", cognome:"verdi", isOnline:true},
    {nome:"daniele", cognome:"neri", isOnline:false},
    {nome:"luca", cognome:"rosi", isOnline:false},
    {nome:"marco", cognome:"verdi", isOnline:false},
    {nome:"daniele", cognome:"neri", isOnline:true}
  ];
  onClick(event : Event){
    this.title = "ho cliccato sul bottone";
  }
  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value;
  }
}
