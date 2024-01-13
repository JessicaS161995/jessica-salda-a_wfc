const celdas = []; 
const RETICULA = 5;

let ancho; //anchura de celda
let alto; //altura de celda

const azulejos = [];
const NA = 17; // numero de azulejos

const reglas = [
  // reglas de los bordes de cada azulejo
  {
      // tile 0
      UP: 0,
      RIGHT: 0,
      DOWN: 0,
      LEFT: 0,
  },
  {
    // tile 1
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 1,
  },
  {
  // tile 3
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 1,
  },
  {
  // tile 4
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 5
  UP: 0,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 6
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 1,
  },
  {
  // tile 7
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 1,
  },
  {
  // tile 8
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 9
  UP: 0,
  RIGHT: 0,
  DOWN: 2,
  LEFT: 0,
  },
  {
  // tile 10
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
    // tile 11
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 12
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    // tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    // tile 14
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
},
{
  // tile 15
  UP: 0,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 0,
  },
  {
    // tile 16
    UP: 2,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 17
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
},
];

function preload() {
  for (let i = 0; i < NA; i++){
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}


function setup() {
  createCanvas(1080, 1080);
  
  ancho = width / RETICULA;
  alto = height / RETICULA; 

  let opcionesI = [];
  for (let i = o; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = o; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  celdas[8].colapsada = true;
  celdas[3].colapsada = true;

  //celdas[12].opciones = [5, 6, 8];
  //celdas[4].opciones = [4, 7, 12];
  //celdas[6].opciones = [9, 7, 12];
  //celdas[1].opciones = [6, 4, 8, 10];
  //celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  circle(mouseX, mouseY, 20);
}
