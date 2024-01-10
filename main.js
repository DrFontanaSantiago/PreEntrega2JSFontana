class Vuelos_Venta {
    constructor(codigo, pais, ciudad, equipaje, precio) {
      this.CODIGO = codigo;
      this.PAIS = pais;
      this.CIUDAD = ciudad;
      this.EQUIPAJE = equipaje;
      this.PRECIO = precio;
    }
  }
  
  const vuelos = [
    new Vuelos_Venta(1, 'Uruguay', 'Montevideo', 'No', 300000),
    new Vuelos_Venta(2, 'Ecuador', 'Quito', 'Si', 2300000),
    new Vuelos_Venta(3, 'Brasil', 'Río de Janeiro', 'no', 5500000),
    new Vuelos_Venta(4, 'Colombia', 'Bogota', 'Si', 5500000),
    new Vuelos_Venta(5, 'Perú', 'Lima', 'No', 5500000),
    new Vuelos_Venta(6, 'Bolivia', 'La Paz', 'Si', 5500000),
  ];
  
  const vuelosSeleccionados = [];
  
  function mostrarVuelosEnVenta() {
    alert("Vuelos en venta:");
    for (let i = 0; i < vuelos.length; i++) {
      const vuelo = vuelos[i];
      alert(`Código: ${vuelo.CODIGO}, Pais: ${vuelo.PAIS}, Ciudad: ${vuelo.CIUDAD}, Equipaje: ${vuelo.EQUIPAJE}, Precio: $${vuelo.PRECIO}`);
    }
    console.table(vuelos);
  }
  
  function calcularCuotas(vuelo, cuotas) {
    const precioTotal = vuelo.PRECIO;
    const interes = 0.90;
    const precioConInteres = precioTotal + (precioTotal * interes);
    const montoCuota = (precioConInteres / cuotas).toFixed(2);
    return montoCuota;
  }
  
  function seleccionarVuelosParaComparar() {
    let seleccionados = [];
    let seguirSeleccionando = true;
  
    while (seguirSeleccionando) {
      let codigo = parseInt(prompt("Selecciona el código de los vuelos que deseas comparar (0 para dejar de seleccionar):"));
  
      if (codigo === 0) {
        seguirSeleccionando = false;
      } else {
        let vuelo = vuelos.find((a) => a.CODIGO === codigo);
  
        if (vuelo) {
          seleccionados.push(vuelo);
          console.log("Vuelo seleccionado:", vuelo);
        } else {
          alert("Código de vuelo incorrecto o no válido.⛔");
          console.warn("Código de vuelo incorrecto o no válido.");
        }
      }
    }
    console.table(seleccionados);
    return seleccionados;
  }
  
  function compararVuelosSeleccionados(precio) {
    const vuelosFiltrados = vuelosSeleccionados.filter((vuelo) => vuelo.PRECIO <= precio);
    return vuelosFiltrados;
  
    console.log("Vuelos Seleccionados Comparados:", vuelosComparados);  
  }
  
  function cotizar() {
    let verVuelos = confirm("¿Deseas ver los vuelos en venta?");
    if (verVuelos) {
      mostrarVuelosEnVenta();
    }
  
    let vuelosAComparar = seleccionarVuelosParaComparar();
  
    if (vuelosAComparar.length > 0) {
      vuelosSeleccionados.push(...vuelosAComparar);
  
      console.log("Vuelos Seleccionados:", vuelosSeleccionados);
  
      let cuotas = parseInt(prompt("¿En cuántas cuotas deseas financiar? (hasta 24 cuotas con interés del 90%)"));
  
      if (cuotas > 0 && cuotas <= 24) {
        vuelosAComparar.forEach(vuelo => {
          const montoCuota = calcularCuotas(vuelo, cuotas);
          alert(`El monto de cada cuota para ${vuelo.PAIS} ${vuelo.CIUDAD} será de $${montoCuota} para ${cuotas} cuotas.`);
        });
      } else {
        alert("⛔️ La cantidad de cuotas ingresada no es válida.");
      }
   
    }
  }
  
  function iniciarCotizacion() {
    let realizarCotizacion = true;
    while (realizarCotizacion) {
      cotizar();
      realizarCotizacion = confirm("¿Deseas realizar otra cotización?");
    }
    alert("Gracias por hacer tu cotización en TU VUELO EN CUOTAS!");
  }
  
  // Se llama a la función iniciarCotizacion para comenzar el proceso
  iniciarCotizacion();