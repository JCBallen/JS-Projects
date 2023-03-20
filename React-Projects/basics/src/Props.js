// when reading props we recieve an object,
// so we can call it general (props) or specifically ( {name, address, married} )

//? exists a npm package called 'PropTypes' that brings a method for the component
//? to specify the datatype we are expecting

export function Greet(props) {
    console.log(props)
    return <>
        <h2>
            Hi, It's me {props.name}
            , My age is {props.age ? props.age : 'no'}
        </h2>
        <ol>
            <li> My street is {props.address ? props.address.street : 'no'}</li>
            <li> My city is {props.address ? props.address.city : 'no'}</li>
        </ol>
    </>
}


export function SimpleGreet({ name, surname }) {
    return <h1>
        Waving at {name} {surname}
    </h1>
}