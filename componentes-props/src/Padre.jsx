import { useState } from "react";
import Hijo from "./Hijo"

function Padre() {

    const [mensaje, setMensaje] = useState("");

    const clickHijo = () => {
        setMensaje("click en Hijo");
    }

    const nombre = "Juan";

    return (
        <>
            <Hijo name={nombre} onClick= {clickHijo}/>
            {mensaje}
        </>
    );
}

export default Padre;