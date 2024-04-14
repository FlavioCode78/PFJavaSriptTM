// Arreglos para inicializar valores de Ingresos y Egresos


const ingresos = [
  new Ingreso("Sueldo", 10000.00)
];

const egresos = [
  new Egreso ("Vacaciones", 3500.00)
];


// Función cargarCabecero

let cargarCabecero = () => {
      
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos());
  document.getElementById("egreso").innerHTML = formatoMoneda(totalEgresos());
}


// Función totalIngresos

let totalIngresos = () => {
  let totalIngreso = 0;
  for (const ingreso of ingresos) {
    totalIngreso += ingreso;
  }
  return totalIngreso;
}


let totalEgresos = () => {
  let totalEgreso = 0;
  for(let egreso of egresos) { 
    totalEgreso += egreso;
  }
  return totalEgreso;
}

// Formato moneda

const formatoMoneda = (valor) =>{
  return valor.toLocaleString("es-MX", {style: "currency", currency: "MXN", minimumFractionDigits:2});
}
// Formato porcentaje

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {style: "percent", minimumFractionDigits:2});
}

// Funciones para los Ingresos

const cargarIngresos = () =>{
  let ingresosHtml = "";
  for (ingreso of ingresos){
      ingresosHtml += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
}

const crearIngresoHTML = (ingreso) =>{
  let ingresoHTML = `
      <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">${ingreso.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
              <div class="elemento_eliminar">
                  <button type="button" class="elemento_eliminar--btn">
                      <ion-icon name="close-circle-outline" onclick=eliminarIngresos(${ingreso.id})"></ion-icon>
                  </button>
              </div>
          </div>
      </div>`
  return ingresoHTML;
}

const eliminarIngreso = (id) => {
  let ingresoEliminar = ingresos.findIndex(ingresos => ingresos.id === id);
  ingresos.splice(ingresoEliminar, 1);
  cargarCabecero();
  cargarIngresos();
}

// Funciones para los Egresos van en esta otra sección

const cargarEgresos = () =>{
  let egresosHtml = "";
  for (egreso of egresos){
      egresosHtml += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHtml;
}

const crearEgresoHTML = (egreso) =>{
  let egresoHTML = `
      <div class="elemento limpiarEstilos">
          <div class="elemento_descripcion">${egreso.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
              <div class="elemento_eliminar">
                  <button type="button" class="elemento_eliminar--btn">
                      <ion-icon name="close-circle-outline" onclick=eliminarIngresos(${egreso.id})"></ion-icon>
                  </button>
              </div>
          </div>
      </div>`
  return egresoHTML;
}

const eliminarEgreso = (id) => {
  let egresoEliminar = egresos.findIndex(egresos => egresos.id === id);
  egresos.splice(egresoEliminar, 1);
  cargarCabecero();
  cargarEgresos();
}




// Función para agregarDato

const agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if(descripcion.value !== "" &&  valor.value !== ""){
      if(tipo.value === 'ingreso'){
          ingresos.push(new Ingresos(descripcion.value, valor.value)) // Forma corta
          cargarCabecero();
          cargarIngresos();
      }else if(tipo.value === 'egreso'){
          let nuevoEgresos = new Egresos(descripcion.value, valor.value) // Forma larga
          egresos.push(nuevoEgresos);
          cargarCabecero();
          cargarEgresos();
      }
  }else{
      alert("Favor de llenar todos los campos");
  }
}

// Función para cargar la app 

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
}