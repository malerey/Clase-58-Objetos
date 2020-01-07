// OBJETOS 
// los objetos tienen propiedades
// de la forma clave: valor
// las propiedades se separan por coma 

// Si queremos acceder a una propiedad, lo hacemos con la siguiente sintaxis:
// nombreDelObjeto.nombreDeLaPropiedad

// por ejemplo

// persona.nombre --> "Ada"

const persona = {
  nombre: "Ada", 
  edad: 12,
  email: "ada@lovelace.com",
  sabeProgramar: true, 
  listaDeLenguajesConocidos: ["Javascript", "C++", "Java"],
  direccion: {
    calle: "Anzorena",
    numero: 100, 
    "CP": 1425,
    provincia: {
      nombre: "Buenos Aires", 
      id: 1, 
      localidades: ["San Martin", "Caseros", "Olivos"]
    }
  },
  hijos: [
    {
      nombre: "Sonny", 
      edad: 10
    },
    {
      nombre: "Ladislao", 
      edad: 5
    },
    {
      nombre: "Maicol", 
      edad: 2
    },
  ]
}

// Cualquier tipo de dato puede ser una propiedad de un objeto
// Por ejemplo, persona.listaDeLenguajesConocidos es un array
// Para acceder a uno de sus elementos, escribimos
// persona.listaDeLenguajesConocidos[0] --> "Javascript"

// persona.direccion es un objeto
// para acceder a "Anzorena", escribimos
// persona.direccion.calle --> "Anzorena"


// persona.hijos es un array de objetos
// para acceder al nombre "Ladislao" escribimos
// persona.hijos[1].nombre

// Para verlos a todos en consola, podemos hacer un codigo asi:

let hijos = ""

for (let i = 0; i < persona.hijos.length; i++) {
  hijos = hijos.concat(persona.hijos[i].nombre, ", ")
}


console.log(`Los hijos de Ada son: ${hijos}`)


