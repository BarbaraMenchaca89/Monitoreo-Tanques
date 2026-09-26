/*Funcion para redirigir a pag registro, estatus y menu*/
document.addEventListener("DOMContentLoaded", function() {
//Boton Registro
const btnRegistro = document.getElementById("btnRegistro");
if(btnRegistro){
    btnRegistro.addEventListener("click", function() {
        window.location.href = "registro.html";
    });
}

  // Boton Estatus
  const btnEstatus = document.getElementById("btnEstatus");
  if (btnEstatus) {
    btnEstatus.addEventListener("click", function() {
      window.location.href = "estatus.html";
    });
  }

  // Boton Menu (en registro.html)
  const btnMenu = document.getElementById("btnMenu");
  if (btnMenu) {
    btnMenu.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const btnMenu = document.getElementById("btnMenu");
  if (btnMenu) {
    btnMenu.addEventListener("click", () => window.location.href = "index.html");
  }

  // Simulacion de datos - reemplazar por fetch y luego QUITARLOS
  const datos = {
    temperatura: [25, 32, 28, 30],
    ph: [6.8, 7.2, 7.0, 6.9],
    salinidad: [30, 35, 33, 32],
    oxigeno: [7.5, 8.0, 7.8, 7.6]
  };

  // Actualizar valores actuales
  document.getElementById("tempActual").textContent = "32.4 °C";
  document.getElementById("phActual").textContent = "7.2 pH";
  document.getElementById("salActual").textContent = "35 ppt";
  document.getElementById("oxiActual").textContent = "8.0 mg/L";

  // Crear graficas
  crearGrafica("grafTemp", "Grados Celsius", datos.temperatura);
  crearGrafica("grafPh", "Nivel de pH", datos.ph);
  crearGrafica("grafSal", "Salinidad (ppt)", datos.salinidad);
  crearGrafica("grafOxi", "Oxígeno (mg/L)", datos.oxigeno);
});

function crearGrafica(idCanvas, etiqueta, valores) {
  new Chart(document.getElementById(idCanvas), {
    type: "line",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [{
        label: etiqueta,
        data: valores,
        borderColor: "#2b89a0",
        backgroundColor: "rgba(43,137,160,0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}


/*Funcion para buscar tanque y redirigir a monitoreo.html con el id del tanque*/
document.addEventListener("DOMContentLoaded", () => {
  const btnBuscar = document.getElementById("btnBuscar");
  const inputBuscar = document.getElementById("buscarTanque");
  const resultado = document.getElementById("resultadoBusqueda");

  if (btnBuscar) {
    btnBuscar.addEventListener("click", () => {
      const codigo = inputBuscar.value.trim();
      if (codigo) {
        // Simulacion - usar fetch a la API en produccion
        resultado.innerHTML = `
          <p>Tanque encontrado: ${codigo}</p>
          <button class="btn-monitor" onclick="window.location.href='monitoreo.html?id=${codigo}'">
            Monitorear
          </button>
        `;
      } else {
        resultado.innerHTML = "<p>Ingrese un código válido.</p>";
      }
    });
  }
});
