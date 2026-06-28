const serviciosData = [
  {
    titulo: "Desarrollo de software a medida",
    descripcion: "Desarrollo de soluciones personalizadas adaptadas a las necesidades específicas de tu empresa.",
    categoria: "Desarrollo",
    icono: "💻",
    detalle: [
      "Análisis y diseño de requerimientos",
      "Desarrollo ágil con tecnologías modernas",
      "Pruebas de calidad y control de errores",
      "Despliegue y documentación técnica",
    ],
  },
  {
    titulo: "Aplicaciones web modernas y responsivas",
    descripcion: "Creación de sitios web dinámicos, seguros y adaptables a cualquier tamaño de pantalla.",
    categoria: "Web",
    icono: "🌐",
    detalle: [
      "Diseño responsivo para móvil, tablet y escritorio",
      "Interfaces modernas con HTML, CSS y JavaScript",
      "Optimización de rendimiento y SEO",
      "Integración con APIs y servicios externos",
    ],
  },
  {
    titulo: "Diseño de plataformas de gestión",
    descripcion: "Diseño de sistemas y plataformas para optimizar la administración y procesos de tu negocio.",
    categoria: "Gestión",
    icono: "⚙️",
    detalle: [
      "Paneles de control personalizados",
      "Gestión de usuarios y permisos",
      "Reportes y análisis en tiempo real",
      "Integración con sistemas existentes",
    ],
  },
  {
    titulo: "Soluciones tecnológicas personalizadas",
    descripcion: "Implementación de herramientas tecnológicas innovadoras diseñadas para resolver tus desafíos.",
    categoria: "Consultoría",
    icono: "🚀",
    detalle: [
      "Consultoría tecnológica empresarial",
      "Automatización de procesos",
      "Migración y modernización de sistemas",
      "Soporte técnico continuo",
    ],
  },
];

const seccionServicios = document.querySelector("#servicios");
const cards = seccionServicios.querySelectorAll(".card");
const botonesVerMas = seccionServicios.querySelectorAll(".card .btn");

cards.forEach(function (card, indice) {
  const datos = serviciosData[indice];

  const badge = document.createElement("span");
  badge.textContent = datos.icono + " " + datos.categoria;
  badge.style.cssText =
    "position:absolute; top:10px; left:10px; background:#0000FF; color:#fff;" +
    "font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:20px;" +
    "letter-spacing:0.5px; z-index:2; box-shadow:0 2px 6px rgba(0,0,255,0.3);";

  card.style.position = "relative";
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  card.insertBefore(badge, card.firstChild);

  const boton = botonesVerMas[indice];
  boton.removeAttribute("href");
  boton.style.cursor = "pointer";
  boton.setAttribute("data-servicio-id", indice);
});

cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
    this.style.boxShadow = "0 12px 32px rgba(0, 0, 255, 0.18)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "";
  });
});

const overlay = document.createElement("div");
overlay.id = "modal-overlay";
overlay.style.cssText =
  "display:none; position:fixed; inset:0; background:rgba(0,0,0,0.55);" +
  "z-index:9999; align-items:center; justify-content:center;" +
  "backdrop-filter:blur(4px); transition:opacity 0.3s;";

const modalCaja = document.createElement("div");
modalCaja.id = "modal-caja";
modalCaja.style.cssText =
  "background:#fff; border-radius:16px; padding:36px; max-width:480px; width:90%;" +
  "position:relative; box-shadow:0 20px 60px rgba(0,0,0,0.25);" +
  "animation:modalEntrada 0.3s ease;";

const estiloModal = document.createElement("style");
estiloModal.textContent =
  "@keyframes modalEntrada {" +
  "  from { opacity:0; transform:scale(0.85) translateY(30px); }" +
  "  to   { opacity:1; transform:scale(1)    translateY(0);     }" +
  "}";
document.head.appendChild(estiloModal);

const btnCerrar = document.createElement("button");
btnCerrar.textContent = "✕";
btnCerrar.style.cssText =
  "position:absolute; top:14px; right:18px; background:none; border:none;" +
  "font-size:1.4rem; cursor:pointer; color:#555; line-height:1;";
btnCerrar.setAttribute("aria-label", "Cerrar modal");

const modalContenido = document.createElement("div");
modalContenido.id = "modal-contenido";

modalCaja.appendChild(btnCerrar);
modalCaja.appendChild(modalContenido);
overlay.appendChild(modalCaja);
document.body.appendChild(overlay);

function abrirModal(indice) {
  const datos = serviciosData[indice];

  modalContenido.innerHTML = "";

  const encabezado = document.createElement("div");
  encabezado.style.cssText = "display:flex; align-items:center; gap:12px; margin-bottom:16px;";

  const icono = document.createElement("span");
  icono.textContent = datos.icono;
  icono.style.cssText = "font-size:2.2rem;";

  const tituloModal = document.createElement("h3");
  tituloModal.textContent = datos.titulo;
  tituloModal.style.cssText = "color:#0000FF; font-weight:700; font-size:1.1rem; margin:0;";

  encabezado.appendChild(icono);
  encabezado.appendChild(tituloModal);

  const descripcionModal = document.createElement("p");
  descripcionModal.textContent = datos.descripcion;
  descripcionModal.style.cssText = "color:#555; font-size:0.95rem; margin-bottom:18px; line-height:1.6;";

  const subtitulo = document.createElement("p");
  subtitulo.textContent = "¿Qué incluye este servicio?";
  subtitulo.style.cssText = "font-weight:700; color:#333; margin-bottom:10px; font-size:0.9rem;";

  const lista = document.createElement("ul");
  lista.style.cssText = "padding-left:18px; margin-bottom:24px;";

  datos.detalle.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.cssText = "color:#444; font-size:0.9rem; margin-bottom:7px; line-height:1.5;";
    lista.appendChild(li);
  });

  const btnContactar = document.createElement("a");
  btnContactar.href = "#contacto";
  btnContactar.textContent = "Contáctanos";
  btnContactar.style.cssText =
    "display:inline-block; background:#0000FF; color:#fff; font-weight:700;" +
    "padding:10px 28px; border-radius:8px; text-decoration:none; font-size:0.95rem;" +
    "transition:background 0.2s;";

  btnContactar.addEventListener("mouseenter", function () {
    this.style.background = "#0000cc";
  });
  btnContactar.addEventListener("mouseleave", function () {
    this.style.background = "#0000FF";
  });

  btnContactar.addEventListener("click", function () {
    cerrarModal();
  });

  modalContenido.appendChild(encabezado);
  modalContenido.appendChild(descripcionModal);
  modalContenido.appendChild(subtitulo);
  modalContenido.appendChild(lista);
  modalContenido.appendChild(btnContactar);

  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  overlay.style.display = "none";
  document.body.style.overflow = "";
}

botonesVerMas.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const id = parseInt(this.getAttribute("data-servicio-id"), 10);
    abrirModal(id);
  });
});

btnCerrar.addEventListener("click", cerrarModal);

overlay.addEventListener("click", function (evento) {
  if (evento.target === overlay) {
    cerrarModal();
  }
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

const observer = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = "1";
        entrada.target.style.transform = "translateY(0)";
        observer.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(function (card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease";
  observer.observe(card);
});

const formCotizacion   = document.getElementById("form-cotizacion");
const campoDescripcion = document.getElementById("cot-descripcion");
const contadorChars    = document.getElementById("cot-contador");
const plazoError       = document.getElementById("plazo-error");
const confirmacion     = document.getElementById("cot-confirmacion");
const btnCotizar       = document.getElementById("btn-cotizar");

const MAX_CHARS = 500;

campoDescripcion.addEventListener("input", function () {
  const cantidad = this.value.length;

  if (cantidad > MAX_CHARS) {
    this.value = this.value.substring(0, MAX_CHARS);
  }

  contadorChars.textContent = Math.min(cantidad, MAX_CHARS);

  if (cantidad >= MAX_CHARS * 0.9) {
    contadorChars.style.color = "#cc0000";
    contadorChars.style.fontWeight = "700";
  } else {
    contadorChars.style.color = "";
    contadorChars.style.fontWeight = "";
  }
});

function validarPlazo() {
  const radios = document.querySelectorAll("input[name='cot-plazo']");
  const alguno = Array.from(radios).some(function (r) { return r.checked; });
  plazoError.style.display = alguno ? "none" : "block";
  return alguno;
}

document.querySelectorAll("input[name='cot-plazo']").forEach(function (radio) {
  radio.addEventListener("change", function () {
    plazoError.style.display = "none";
  });
});

document.getElementById("form-cotizacion").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre      = document.getElementById("cot-nombre").value.trim();
  const email       = document.getElementById("cot-email").value.trim();
  const servicio    = document.getElementById("cot-servicio").value;
  const presupuesto = document.getElementById("cot-presupuesto").value;
  const descripcion = document.getElementById("cot-descripcion").value.trim();
  const plazoRadio  = document.querySelector("input[name='cot-plazo']:checked");
  const plazo       = plazoRadio ? plazoRadio.value : "";

  if (nombre === "" || email === "" || servicio === "" || presupuesto === "" || descripcion === "" || plazo === "") {
    alert("Por favor completa todos los campos antes de enviar la cotización.");
    return;
  }

  console.log("=== Solicitud de Cotización Recibida ===");
  console.log("Nombre:",      nombre);
  console.log("Email:",       email);
  console.log("Servicio:",    servicio);
  console.log("Presupuesto:", presupuesto);
  console.log("Plazo:",       plazo);
  console.log("Descripción:", descripcion);

  document.getElementById("form-cotizacion").reset();
  contadorChars.textContent = "0";
  document.getElementById("cot-confirmacion").style.display = "block";
  document.getElementById("cot-confirmacion").scrollIntoView({ behavior: "smooth", block: "center" });
});


const camposTexto = document.querySelectorAll(
  "#form-cotizacion input[type='text'], " +
  "#form-cotizacion input[type='email'], " +
  "#form-cotizacion select, " +
  "#form-cotizacion textarea"
);

camposTexto.forEach(function (campo) {
  campo.addEventListener("focus", function () {
    this.style.borderColor  = "#0000FF";
    this.style.boxShadow    = "0 0 0 0.2rem rgba(0, 0, 255, 0.20)";
  });
  campo.addEventListener("blur", function () {
    this.style.borderColor = "";
    this.style.boxShadow   = "";
  });
});
