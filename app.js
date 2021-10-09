let margen;
// se define la funcion de ingreso de datos
function ingresoPrecio() {
  let precioCosto = prompt('Ingrece precio Costo por unidad de producto:');
  margen = prompt('Ingrece el margen que  quiere ganar:');
  let costoIva = parseInt(precioCosto);
  precioCostoIva(costoIva);
}

// se define la función de calculo del IVA
function precioCostoIva(calculoIva) {
  let precioIva = Math.round(calculoIva * 1.19);
  alert('el precio costo + Iva es: $' + precioIva);
  precioFinal(precioIva);
}

// se define la función del calculo precio final
function precioFinal(calculoVenta) {
  let precioFinal = Math.round(calculoVenta * (1 + margen / 100));
  alert('El precio venta es:  $' + precioFinal);
}
