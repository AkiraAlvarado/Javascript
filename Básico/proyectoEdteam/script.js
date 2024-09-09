// Aquí definimos el usuario
const usuario = {
    nombre: "Akira",
    edad: 30,
    deuda: 0
}


// Lo que hacemos es definir pedido como un array y costo Pedido como global
// Para que sea afectado por otras funciones
let pedido = []
let costoPedido= 0
const mostrarMenu = () =>{
    console.log("CODIGO - NOMBRE PRODUCTO - COSTO")
    for( let producto of productos){
        console.log(`${producto.codigo} - ${producto.nombre} - S/.${producto.costo}`)
    }
}


const verPedido = () => pedido


// Aquí pedimos el arrays de códigos de productos
const pedirProducto = cod => {
    let prodEncontrado
    for(let i=0; i<cod.length; i++){
        if (!cod[i]) return "Ingrese un codigo valido"
        prodEncontrado = productos.find(producto => producto.codigo === cod[i])
        if (prodEncontrado) {
            pedido.push(prodEncontrado);
            console.log("Su pedido ha sido agregado:", prodEncontrado.nombre);
        } else {
            console.log("Producto no encontrado para el código:", cod[i]);
        }
    }
    verPedido()
    console.log(pedido)
}

//Calculamos el costo del pedido 
const calcularCosto = () => {
    let costo = 0
    for (producto of pedido){
        costo = costo + producto.costo
    }
    costoPedido = costo
    return costoPedido
}

// Calculamos el costo y ponemos el usuario en 0 , despues de asignarle un valor
const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda=costoPedido
    pedido=[]
    costoPedido=0

    return usuario
}
mostrarMenu()
