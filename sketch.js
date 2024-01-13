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
  // background(111);
  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return (
        celda.opciones.length == celdasDisponibles[0].opciones.length
      );
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];
    
    //print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          //print(reglasActuales);
          image(
            azulejos[indiceDeAzulejo],
            x = ancho,
            y = alto,
            ancho,
            alto,
          );
           //Cambiar entropia UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
             cambiarEntropia(celdaUP, reglasActuales['UP'], 'DOWN');
            }

          }
         // Cambiar entropia RIGTH
          if (x < RETICULA - 1) {
            const indiceRIGHT = x + 1 + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarEntropia(celdaRIGTH, reglasActuales['RIGTH'], 'LEFT'); 
            }
          }
          // Cambiar entropia DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales['DOWN'], 'UP');  
            }
          }
          // Cambiar entropia LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales['LEFT'], 'RIGHT'); 
            }

          }
        } else {
          strokeWeight(6);
          rect(x * ancho, y * alto, ancho, alto);
        }

      }
      // noLoop(); 

    }
      
  }
  
}
function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones =[];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesta]){
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  // print(nuevasOpciones);
}
