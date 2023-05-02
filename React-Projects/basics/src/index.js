// documentation says this
import React from 'react'
// we specify we are developing for web
import ReactDOM from 'react-dom/client'
// importing components from other file
import { Greeting, Tarjeta } from './Greeting'
// we can call it whatever we want and always imports the default
import X, { Navbar, App } from './Product'
import { Greet, SimpleGreet } from './Props'

// we select the root element in the html file
const rootElement = document.getElementById('root')
// creates a root element
const root = ReactDOM.createRoot(rootElement)

// root.render(<h1>Hello Mundo</h1>) // specting child tags for rendering

// ! COMPONENTS
// components are reusable pieces of code for ui, represented as functions that returns an ui

// render only show the last result
// root.render(Greeting())
root.render(
    <>  {/* fragment, void container,  to avoid divs */}

        {/* three ways of calling a component */}
        {Greeting()}
        <Greeting></Greeting>
        <Greeting />
        <Tarjeta />
        <X />
        <Navbar />
        <App />

        {/* React Props, how we pass props(parameters) to components(functions) */}
        <Greet name="Julia" />
        <Greet
            name="Patty"
            age={29}
            address={
                {
                    street: "Wingham 22",
                    city: "NY"
                }
            }
        />
        <SimpleGreet name="Maria" surname="Ballen" />
    </>
)