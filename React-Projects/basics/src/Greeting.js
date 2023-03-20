// between {} we can execute js code
export function Greeting() { // component
    const isBig = false
    const name = 'Jack'
    return <div>
        <h1>Hello {name}</h1>
        <h2>Hello {10 + 15}</h2>
        <h2>{isBig ? 'Ta grande' : 'Toy chiquito'}</h2>
        <h3>Esta re op</h3>
    </div>
}


export function Tarjeta() {
    return <h1>Esta tajeta esta god</h1>
}