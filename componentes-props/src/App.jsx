import Saludar from "./Saludar";

function App () {
    return (
    <>
        <h1>App</h1>
        <Saludar nombre= "Juan" datos={{uno: 1, dos: 2}}/>
        <Saludar nombre= "Maria"/>
    </>
    );
}

export default App;