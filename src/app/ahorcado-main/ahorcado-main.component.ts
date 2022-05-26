import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado-main',
  templateUrl: './ahorcado-main.component.html',
  styleUrls: ['./ahorcado-main.component.scss']
})
export class AhorcadoMainComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
var ingresando_palabras = document.querySelector(".palabras");
var pantalla = document.querySelector("canvas") as HTMLCanvasElement;
var pincel = pantalla.getContext("2d") as CanvasRenderingContext2D;
var palabra = "";
var rand ;
var intentos = 6;
var ocultar = [];
var palabra_adivinar = document.querySelector(".palabras");
var eventoTecla = document.addEventListener("keydown",letraSeleccionadas)

//var palabrasSecretas: String[] = ["GUERRA", "GATO", "LUFFY", "AKAME", "CONDOMINIO", "RANAS"];



var tamanhoArreglo = palabrasSecretasAlmacenadas.length - 1;
var numeroAleatorio = Math.round(Math.random()*tamanhoArreglo);
var contador = 0;
var contadorHorca = 0;
var puntos = 0;
var letraDibujada: any = [];

//Funciones

function letraSeleccionadas(evento:any){
     console.log(letraSeleccionada);
    var letraSeleccionada = evento.key;
    if (evento.keyCode >= 65 && evento.keyCode <= 90){

        if(letraDibujada.includes(letraSeleccionada.toUpperCase())){
            alert("Letra repetida");
        }else{
            palabraCorrecta(letraSeleccionada.toUpperCase());
            letraDibujada.push(letraSeleccionada.toUpperCase());
        }

    }else{
        alert("Solo letras");
    }

  }

//Escoge una palabra al azar


//Funcion que pinta los guiones de la palabra
function dibujarGuion(){

    /* var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d"); */
    var numeroDeLetras = palabrasSecretasAlmacenadas[numeroAleatorio].length + 1;

    for (var i = 1; i < numeroDeLetras; i++){

        var x = 50 * i;
        pincel.strokeStyle = "red";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(x, 400); /* pocisionar el pincel (x,y)*/
        pincel.lineTo((x+40), 400); /* dibujar la linea */
        pincel.stroke();
    }

}

dibujarGuion();


function dibujarLetra(l:any, x:any){
    var pantalla = document.querySelector("canvas") as HTMLCanvasElement;
    var pincel = pantalla.getContext("2d") as CanvasRenderingContext2D;
    pincel.fillStyle = "blue";
    pincel.font = "30px arial";
    pincel.fillText(l, x, 395);
}


function dibujarLetraEquivocada(l:any, x:any){
    var pantalla = document.querySelector("canvas") as HTMLCanvasElement;
    var pincel = pantalla.getContext("2d") as CanvasRenderingContext2D;
    pincel.fillStyle = "red";
    pincel.font = "20px arial";
    pincel.fillText(l, x, 500);
}

function palabraCorrecta(l:any){
    var palabraSeleccionada = palabrasSecretasAlmacenadas[numeroAleatorio];
    /* console.log("dibujando letra") */
    var esLetra = false;

    for (var i = 0; i<palabraSeleccionada.length; i++){
        if(l === palabraSeleccionada[i]){
            var esLetra = true;
            if (i === 0){
                dibujarLetra(palabraSeleccionada[i], 65);
                puntos = puntos + 1;
            }
            if (i === 1){
                dibujarLetra(palabraSeleccionada[i], 110);
                puntos = puntos + 1;
            }
            if (i === 2){
                dibujarLetra(palabraSeleccionada[i], 160);
                puntos = puntos + 1;
            }
            if (i === 3){
                dibujarLetra(palabraSeleccionada[i], 210);
                puntos = puntos + 1;
            }
            if (i === 4){
                dibujarLetra(palabraSeleccionada[i], 260);
                puntos = puntos + 1;
            }
            if (i === 5){
                dibujarLetra(palabraSeleccionada[i], 310);
                puntos = puntos + 1;
            }
            if (i === 6){
              dibujarLetra(palabraSeleccionada[i], 360);
              puntos = puntos + 1;
            }
            if (i === 7){
              dibujarLetra(palabraSeleccionada[i], 410);
              puntos = puntos + 1;
            }
        }
    }

    if (esLetra == false){
        /* console.log("letra incorrecta"); */
        palabraIncorrecta(l);
    }
    if(puntos === palabraSeleccionada.length){
        alert("FELICIDADES GANASTE LA RONDA");
        setTimeout(() => {
          location.href = "#"
        }, 2000);
    }

}

function palabraIncorrecta(l:any){
    //letra_incorrecta();
    alert("letra incorrecta")
    contador = contador + 20;
    /* console.log(contador); */
    dibujarLetraEquivocada(l, contador);
    dibujarHorca();
}
/*
function letra_incorrecta(){
  var body = document.querySelector(".botones") as any;
  var incorrecta = document.createElement("div");
  incorrecta.classList.add("errores");
  incorrecta.textContent = "Letra incorrecta";
  incorrecta.appendChild(body) as any;
  return incorrecta;
}*/

function dibujarHorca(){
    /* console.log("dibujarHorca"); */
    contadorHorca = contadorHorca + 1;
    /* console.log(contadorHorca); */
/* Horca */
    if (contadorHorca === 1){
        /* console.log("Entrando para dibujar horca"); */
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(30, 350); /* pocisionar el pincel */
        pincel.lineTo(300, 350); /* dibujar la linea */
        pincel.moveTo(50, 350); /* pocisionar el pincel */
        pincel.lineTo(50, 50); /* dibujar la linea */
        pincel.lineTo(150, 50); /* dibujar la linea */
        pincel.lineTo(150, 80); /* dibujar la linea */
        pincel.stroke();
    }
/* Cabeza */
    if(contadorHorca === 2){
        pincel.fillStyle = "#cc00ff";
        pincel.beginPath(); /* comenzar camino */
        pincel.arc(150,110,30,0,2*3.14);
        pincel.fill();
    }
/* Tronco */
    if(contadorHorca === 3){
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 110);
        pincel.lineTo(150,230);
        pincel.stroke();
    }
/* Pierna izquierda */
    if(contadorHorca === 4){
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(120, 290);
        pincel.stroke();
    }
/* Pierna derecha */
    if(contadorHorca === 5){
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(170, 290);
        pincel.stroke();
    }
/* Brazo izquierdo */
    if(contadorHorca === 6){
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(120, 190);
        pincel.stroke();
    }
/* Brazo derecho */
    if(contadorHorca === 7){
        pincel.strokeStyle = "#cc00ff";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(175, 190);
        pincel.stroke();

        alert("Perdiste, intentalo de nuevo");
    }
  }
  //console.log(palabrasSecretas);
  console.log(palabrasSecretasAlmacenadas);
}
}

export const palabrasSecretas = ["GUERRA","AMOR", "PROGRAMA", "EDITOR"];
localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretas));
export var palabrasSecretasAlmacenadas = JSON.parse(localStorage.getItem("palabrasSecretas") || '{}');
