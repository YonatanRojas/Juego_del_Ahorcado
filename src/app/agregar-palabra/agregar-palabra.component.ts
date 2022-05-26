import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import  { AhorcadoMainComponent, palabrasSecretas, palabrasSecretasAlmacenadas } from  '../ahorcado-main/ahorcado-main.component'


@Component({
  selector: 'app-agregar-palabra',
  templateUrl: './agregar-palabra.component.html',
  styleUrls: ['./agregar-palabra.component.scss']
})
export class AgregarPalabraComponent implements OnInit {
  constructor() {

    }

  ngOnInit(): void {
    const boton_guardado = document.querySelector(".guardar") as any;
    console.log(palabrasSecretas)
      boton_guardado.addEventListener('click', guardar_palabra);
    //guardado de palabras y verificaciones
      function guardar_palabra(){
        var entrada_palabra = document.querySelector(".entrada_palabra") as any;
        localStorage.setItem("palabras", entrada_palabra.value);
        var palabras = localStorage.getItem("palabras") as any;
        var comparacion = palabras.value > 0;
        //CONDICION PARA VERIFICAR SI HAY UNA PALABRA
        if (comparacion = true){
          palabrasSecretas.push(palabras);
          palabrasSecretasAlmacenadas.push(palabras);
          localStorage.getItem(palabras) as any;
          //console.log(palabrasSecretas);
          //location.href = 'ahorcado-main';
        }else{
          console.log("ERROR");
        }
      }

  }

}
