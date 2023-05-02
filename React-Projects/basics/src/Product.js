
function Product() {
    return <div>
        Este es un producto
    </div>
}

export function Navbar() {
    return <nav>
        Este es un nav
    </nav>

}

export const App = () => {
    const now = new Date()
    const a = 10
    const b = 20

    return (
        <div>
            <p>Hello world, it is {now.toString()}</p>
            <p>
                {a} plus {b} is {a + b}
            </p>
        </div>
    )
}

// export something by default, see the index to see how can we read it
// we can only set 1 component to default
export default Product