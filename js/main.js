function compra (cliente,doc_cliente,fecha,productos){
    //Propiedades públicas
    this.cliente = cliente;
    this.doc_cliente = doc_cliente;
    this.fecha = fecha;
    this.productos = productos;
    this.totalCompra=0;
    
    this.agregar = function(contenido){
        this.productos.push(contenido);
    }

    this.calcularTotal = function(){
        this.productos.forEach(prod => {
            this.totalCompra+=prod[3]*prod[4];
        });
    }

    this.mostrarCompra = function(){
        console.log("La compra ha sido exitosa " + this.cliente);
        console.log("Nro. Doc : " + this.doc_cliente);
        console.log("Fecha    : " + this.fecha);
        console.log("Productos: ");
        this.productos.forEach(prod => {
            console.log(`${prod[1]} Unidad: ${prod[2]} Cantidad: ${prod[4]} Precio c/u: ${prod[3]} `)
        });
        console.log(`El total de la compra es: ${this.totalCompra}`);
    }

}

let prod = [];

let array1=[
    [1,'Perrarina','1kg',30],
    [2,'Gatarina','500Grs',25],
    [3,'Vacunas','1 U',50],
    [4,'Vitaminas','20 U',45],
    [5,'Juguetes','1 U',15]
]

let nombreCliente = prompt("Ingrese su nombre para la compra");
let DocumentoCliente = prompt("Ingrese su documento para la compra");
let fechaActual=new Date();
let obj =new compra(nombreCliente,DocumentoCliente,fechaActual.toLocaleString(),prod);
let continuarCompra="si";
let prodSeleccionado= [];

do {
    let CantidadProd =0;
    Seleccion=parseInt(prompt("Indique el producto que desea llevar: 1- perrarina 2- gatarina 3-vacunas 4-vitaminas 5-jueguetes"));
    if (Seleccion>0 && Seleccion <=5) {
        if (obj.productos.find(element => element[0] ==Seleccion)==undefined) {
            prodSeleccionado=array1.find(element => element[0] ==Seleccion);
            //console.log(prodSeleccionado);
            CantidadProd = parseInt(prompt("Indique la cantidad del producto selccionado: "+prodSeleccionado[1] +' - Precio: '+ prodSeleccionado[3]));
            //console.log(prodSeleccionado);
            //console.log(CantidadProd);
            prodSeleccionado.push(CantidadProd);
            //console.log(prodSeleccionado);
            obj.agregar(prodSeleccionado);
        } else {
            Seleccion=Seleccion-1;
            CantidadProd = parseInt(prompt("Indique la cantidad del producto selccionado: "+prodSeleccionado[1] +' - Precio: '+ prodSeleccionado[3]));
            console.log(obj.productos[Seleccion]);
            obj.productos[Seleccion][4]=obj.productos[Seleccion][4]+CantidadProd;
            
        }
        
        console.log(obj);
    } else {
        alert('Debe seleccionar una opcion valida');
    }

    continuarCompra = prompt("Desea agregar otro producto? -si/-no");
    if (continuarCompra!='no'){
        if(continuarCompra!='si'){
            continuarCompra='no';
        }
    }
} while (continuarCompra=='si');

obj.calcularTotal();
obj.mostrarCompra();
