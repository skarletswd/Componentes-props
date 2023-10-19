import Lista from "./Lista";
import Padre from "./Padre";
import Reloj from "./Reloj";
import Saludar from "./Saludar";

function App () {

    const lista1= ["item 1", "item 2", "item 3"];

    const dias= ["Lunes", "Miércoles", "Viernes"];

    return (
    <>
        <h1>App</h1>
        {/* <Saludar nombre= "Juan" datos={{uno: 1, dos: 2}}/> */}
        {/* <Saludar nombre= "Maria"/> */}
        {/* <Reloj /> */}

        {/* <Padre /> */}

        {/* <Saludar nombre={1}/> */}
        {/* <Saludar /> */}
        
        <Lista elementos={lista1}/>

        <Lista elementos={dias}/>
    </>
    );
}

export default App;