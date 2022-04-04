import React from 'react'

export function Greetings(props) {
    let message;
    switch(props.lang) {
        case "en":
            message = <p>Hello {props.children}</p>;
            break;
        case "de":
            message = <p>Hallo {props.children}</p>;
            break;
        case "fr":
            message = <p>Bonjour {props.children}</p>;
            break;
        case "es":
            message = <p>Hola {props.children}</p>;
            break;
        case "it":
            message = <p>Ciao {props.children}</p>;
            break;
        default:
            message = <p>I don't know your language sorry T.T</p>
    }

    return (
        <div>
            {message}
        </div>
    )
} 

export default Greetings