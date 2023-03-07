
// ! FUNCTIONS ON JS
// ; not neccessary

function hello() {
    console.log('hola mundo')
}

function say_hello(name = 'Tu nombre') {
    return 'Hello ' + name
}

const sayHelloButArrow = (name = 'Tu Flecha xd') => {
    // all logic of func
    return 'Hello ' + name
}
const add = (x = 0, y = 0) => x + y // Insta-Return

function returning_a_func() {
    return function func2() {
        return 'usado bastante en programacion funcional'
    }
}

console.log('FUNCIONES')
hello()
// function with parameters
const ans = say_hello('Juan')
console.log(ans)
// Defautl parameters == to python
console.log(say_hello())
console.log(sayHelloButArrow())
// calling functions inside functions
console.log(returning_a_func())
console.log(returning_a_func()())
console.log(function () {
    return 'Funcion Anonima! Creada y Ejecutada :0'
}())











// ! Datatypes
// const, var, let
var bool = true
var integer = 34
var float = 3.14
var string = 'hola que pex'
var listas = [1, 2, 3, 'uy', false]

// ! Objects != Dicts in python, in JS are exactly like objects, called like objects,
// ! can have methods and attributes, but can be writen like 'Py Dicts'

const obj = {
    nombre: 'Raul',
    apellido: 'Rojas',
    edad: 5,
    direccion: {
        carrera: '79',
        calle: '19a',
        num: '56'
    },
    amigos: ['Calos', 'Daniel'],
    enviarCorreo: function () {
        return 'Enviando Correo...'
    },
    shortFunc() {
        return 'forma abreviada de poner una funcion como metodo'
    }
}

console.log('OBJETOS')
console.log(obj.edad)
console.log(obj.direccion)
console.log(obj.direccion.calle)
console.log(obj.amigos[1])
console.log(obj.enviarCorreo())
console.log(obj.shortFunc())


const product = 'pc'
const price = 2500

const masLargo = {
    product: product,
    price: price
}
// its the same but shorter
const masCorto = {
    product,
    price
}
console.log(masLargo, masCorto)












// ! DOM MANIPULATION WITH JS (CREATING FULL HTML AND CSS WITH JS)

const title = document.createElement('h1') // create tags
title.innerText = 'Hola desde JS'  // insert text of tags
console.log(title) // show const (our h1 tag) in console

const boton = document.createElement('button')
boton.innerText = 'Dame Click Bro'
// adding event handler to button, all tags can have listeners
var i = 0
boton.addEventListener('click', function () {
    title.innerText = 'Kepaso bro? ' + i
    alert('Ojo, aparecio un modal')
    i++
})


// ! Deconstructing HTML, inserting a string in the body that can be interpreted as html code
// in the parameter we are saying that we expect an Object ({ }), but we just want to use the "direccion" property
function printInfo({ direccion }, user) {
    const { nombre, apellido } = user // Deconstructing the object (like py unpacking)
    console.log(nombre, apellido)
    return '<h1>Hola ' + direccion.calle + ', que pex?<h1>'
}


document.body.innerHTML = printInfo(obj, obj) // ? Carefull, innerHTML overwrites the whole body
document.body.append(title)
document.body.append(boton)




// ! Fstring in JS, called String Literals (using `${}`)
const color = 'red'
const bg = '#010101'
const mySubtitle = document.createElement('h2')
mySubtitle.innerText = 'Soy Subtitle'

mySubtitle.style = `background: ${bg}; color: ${color};` // string literal and style property

document.body.append(mySubtitle)


// ! In-Line if statement ( condition ? if code : else code)

mySubtitle.style = `background: ${bg == '#111111' ? 'blue' : 'yellow'}; color: ${color}` // else is applying



// ! Array methods
console.log('ARRAY METHODS')

const names = ['Juan', 'Maria', 'Helida', 'Pedro']
const new_names = ['John', 'Carl', 'Alex', 'Lina']

// like typical 'for item in items' in python, not returns
const respuestaxd = names.forEach((name) => console.log(name))
// return a new array without changing the original
const mapp = names.map((name) => `Hola ${name}`)
// returns the firt value that its true
const nameFound = names.find((name) => {
    if (name === 'Helida') {
        return name
    }
})
// returns new array of elements that pass the filter
const nameFilter = names.filter(function (name) {
    if (name !== 'Juan') {
        return name
    }
})

console.log(mapp)
console.log(nameFound)
console.log(nameFilter)
// it works like extend method in python, adds the new array in the end
console.log(names.concat(new_names))

// ! SPREAD OPERATOR, alternative to concat
// the three dots says return the iterable items one by one, return a new iterable that can be stored in a variable
console.log(...names)
console.log([...names, ...new_names]) // same result as concat

// works with all iterables
const user = {
    name: 'Karen',
    lastname: 'Schneider'
}
const address = {
    street: 'main street 123',
    city: 'NY'
}

const user_info = {
    ...user,
    ...address
}
console.log(user_info)






// ! ECMASCRIPT MODULES
console.log('ECMASCRIPT MODULES')
// we can import funcs and variables from other files using import/export
// firts we have to enable this feature in the HTML, adding in the script tag type="module"
import { suma, multiplicar, mi_lista, mi_titulo, num } from './modules.js'

// console.log(xd)
console.log('suma:', suma(4, 6))
console.log('multiplicacion:', multiplicar(4, 6))
console.log(mi_lista, mi_titulo, num)






// ! OPTIONAL CHAINING
console.log('OPTIONAL CHAINING')
// frecuently use when getting data from a backend,
// when whe are not sure about some property in an object,
// we can prevent the error with optional chaining

const persona = {
    nombre: 'Daniel',
    direccion: {
        ciudad: 'Bogota'
    }
}
// ex. we are not sure about an attribute, we just put it optional, return undefined insted of error
console.log(persona.adress?.ciudad)






// ! ASYNCHRONY
console.log('ASYNCHRONY')
const unolis = document.createElement('ul')
unolis.style.color = 'white'
// Used in most cases when asking data in databases, apis, urls, servers, internet in general

// ? OLD
// fetch is asking data from web, returns a promise (something not inmediate)

const lol = fetch('https://jsonplaceholder.typicode.com/albums')
console.log(lol) // like we were asking inmediately, the return says "Promise<pending>"

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(
        (res) => {  // using the method 'then' awaits till we get a response and then do something, returns the response
            console.log(res)
            return res.json()  // parsing the response to json is also async, so we need to wait using other 'then'
        }
    ).then(
        (json_data) => {
            console.log(json_data)
            json_data.map(
                (element) => { // we want to show the info in the frontend
                    const element_list_id = document.createElement('li')
                    const element_list_title = document.createElement('li')
                    element_list_id.innerText = element.id
                    element_list_title.innerText = element.title
                    unolis.append(element_list_id)
                    unolis.append(element_list_title)
                }
            )
            document.body.append(unolis)
        }
    )


// ? MODERN
// we use async/await
// async enables await, we need to use await inside an async func always, otherway doesnt work
async function load_data() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums') // 'await' awaits for a response from 'fetch', without stopping the code, stills reads the lines below
    const data = await response.json() // just remember, '.json()' is also async
    console.log(data)
    data.forEach((element) => console.log(element.title)) // shows the titles but in console xd
    console.log(...data) // just testing...
}
load_data()

console.log("Este comentario esta despues todo ASYNC") // this comment is executed first because its inmediate (not async), then the fetch code
