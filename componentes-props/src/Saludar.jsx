function Saludar (props) {
    console.log(props.datos, props.datos?.uno);
    return <h2>Hola {props.nombre}</h2>;
}

export default Saludar;