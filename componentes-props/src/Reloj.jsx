import { Component } from "react";

class Reloj extends Component {
    constructor (props) {
        super(props);
        this.state = { hora: new Date() };
    }

    render() {
        return(
            <div>
                <p>La hora actual es: {this.state.hora.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Reloj;