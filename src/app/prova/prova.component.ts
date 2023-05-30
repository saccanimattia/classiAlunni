import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent {

  immagine1 = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  immagine2 = "https://images.alphacoders.com/546/546607.jpg";
  immagine = "";

  constructor(){
    console.log("costruttore");
  }
  ngOnInit(): void{
    let counter = 0;
    setInterval(()=>{
      if(counter%2 != 0)
        this.immagine = this.immagine2;
      else
        this.immagine = this.immagine1;
      counter++;
    }, 1000);
  };
}

