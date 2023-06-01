import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome:"luca", cognome:"rosi", isOnline:true, colore:'blue'},
    {nome:"marco", cognome:"verdi", isOnline:true, colore:'yellow'},
    {nome:"daniele", cognome:"neri", isOnline:false, colore:'orange'},
    {nome:"luca", cognome:"rosi", isOnline:false, colore:'blue'},
    {nome:"marco", cognome:"verdi", isOnline:false, colore:'green'},
    {nome:"daniele", cognome:"neri", isOnline:true, colore:'blue'}
  ];

  constructor() { }

  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
}
