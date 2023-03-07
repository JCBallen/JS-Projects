import React from 'react' // documentation says this
import ReactDOM from 'react-dom/client' // we specify we are developing for web

const rootElement = document.getElementById('root') // we select the root element in the html file
const root = ReactDOM.createRoot(rootElement) // creates a root element

// root.render(<h1>Hello Mundo</h1>) // specting child tags for rendering

// ! COMPONENTS
// components are reusable pieces of code for ui, represented as functions that returns an ui

// between {} we can execute js code
function Greeting(name) { // component
    const isBig = false
    return <div>
        <h1>Hello {name}</h1>
        <h2>Hello {10 + 15}</h2>
        <h2>{isBig ? 'Ta grande' : 'Toy chiquito'}</h2>
        <h3>Esta re op</h3>
    </div>
}

// render only show the last result
// root.render(Greeting())
root.render(
    <div>
        {/* three ways of calling a component */}
        {Greeting('')}
        <Greeting></Greeting>
        <Greeting />
    </div>
)