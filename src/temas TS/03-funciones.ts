let x=8
let y=2
function sumar(x:number,y:number,z:number=5):number {
    let a=6
    let b=7
    let res=a+b

console.log('La suma es:'+res)
return x + y + z
}

let resultados=sumar(x,y)
console.log(resultados)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?: string,
    vacunado: boolean,
    mostrar:()=>void
}

const nuevaMascota:Mascotas={
    nombre:'Firulais',
    edad:5,
    raza:'pastor aleman',
    vacunado: true,
    mostrar(){
        console.log(`La edad de $(this.nombre) es $(this.edad)`)
    }
}

function mostrarMascota(mascota:Mascotas,s:number):void{
    mascota.edad=s //mascota.edad=mascota.edad+x
    console.log(mascota)
    console.log(mascota.mostrar())
}

mostrarMascota(nuevaMascota,3)

//=> esta funcion se llama flecha y no regresa nada
//aqui simplemente se definieron las variables dandoles un 
//valor directamente
/* 
function sumar(x:number,y:number):number {
    let a=6
    let b=7
    let res=a+b

console.log('La suma es:'+res)
return x + y
}

let resultados=sumar(3,2)
console.log(resultados) */




//aqui no se define
/* function sumar():void {
    let a=6
    let b=7
    let res=a+b

console.log('La suma es:'+res)
}

let resultados=sumar()
console.log(resultados) */