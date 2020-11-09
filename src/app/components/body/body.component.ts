
import { Component } from '@angular/core';


@Component ({ 
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{ 

  mostrar = true;

  frase: any = {
    mensaje: 'El mejor estadio de Mexico',
    autor: 'Monumentos Deportivos.'
  };
  Estadios: string[] = ['Azteca', 'BBVA', ' Caliente']
  i = 1; 
}