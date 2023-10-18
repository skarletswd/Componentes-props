import Hijo from "./Hijo"

function Padre() {

    const nombre = "Juan"

    return <Hijo name={nombre} />;
}

export default Padre;