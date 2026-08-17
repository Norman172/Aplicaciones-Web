// ====== DATOS DEL PROYECTO ======
const datosProyecto = {
  nombre: "CIBERCORE",
  presentacion: {
    titulo: "Presentación del proyecto",
    parrafo1: "desarrollamos software, aplicaciones web y herramientas tecnológicas diseñadas para optimizar procesos, mejorar la productividad y acelerar el crecimiento de empresas y organizaciones.",
    parrafo2: "Combinamos innovación, tecnología y experiencia para ofrecer soluciones seguras, eficientes y adaptadas a las necesidades de cada cliente."
  },
  contacto: [
    { tipo: "Correo electrónico", valor: "contacto@cibercore.com", url: "mailto:contacto@cibercore.com", icono: "📧" },
    { tipo: "Teléfono", valor: "+593 99 233 6174", url: "tel:+593 99 233 6174", icono: "📞" },
    { tipo: "Dirección", valor: "11 de Noviembre y Ricardo Descalzi, Riobamba", url: "https://maps.google.com/?q=11+de+Noviembre+y+Ricardo+Descalzi,+Riobamba", icono: "📍" }
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  // Cargar datos de presentación
  const presTitulo = document.getElementById("presentacion-titulo");
  if (presTitulo) presTitulo.textContent = datosProyecto.presentacion.titulo;

  const presNombre = document.getElementById("presentacion-nombre");
  if (presNombre) presNombre.textContent = datosProyecto.nombre;

  const presP1 = document.getElementById("presentacion-p1");
  if (presP1) presP1.textContent = datosProyecto.presentacion.parrafo1;

  const presP2 = document.getElementById("presentacion-p2");
  if (presP2) presP2.textContent = datosProyecto.presentacion.parrafo2;

  // Cargar datos de contacto como tabla dinámica
  const contactoLista = document.getElementById("contacto-lista");
  if (contactoLista) {
    const tabla = document.createElement("table");
    tabla.className = "table table-dark table-borderless table-hover align-middle bg-transparent mb-4";
    
    const tbody = document.createElement("tbody");
    
    datosProyecto.contacto.forEach(item => {
      const tr = document.createElement("tr");
      
      const tdIcono = document.createElement("td");
      tdIcono.className = "fs-4 text-center bg-transparent";
      tdIcono.style.width = "50px";
      tdIcono.textContent = item.icono;
      
      const tdInfo = document.createElement("td");
      tdInfo.className = "bg-transparent";
      
      const titulo = document.createElement("strong");
      titulo.className = "d-block text-white mb-1";
      titulo.textContent = item.tipo;
      
      const enlace = document.createElement("a");
      enlace.href = item.url;
      enlace.className = "text-white text-decoration-none opacity-75";
      enlace.target = "_blank";
      enlace.textContent = item.valor;
      
      tdInfo.appendChild(titulo);
      tdInfo.appendChild(enlace);
      
      tr.appendChild(tdIcono);
      tr.appendChild(tdInfo);
      tbody.appendChild(tr);
    });
    
    tabla.appendChild(tbody);
    contactoLista.appendChild(tabla);
  }
});

const redesData = [
  { texto: "Facebook",  href: "https://www.facebook.com",  clase: "btn btn-outline-primary btn-sm" },
  { texto: "Instagram", href: "https://www.instagram.com", clase: "btn btn-outline-danger btn-sm" },
  { texto: "LinkedIn",  href: "https://www.linkedin.com",  clase: "btn btn-outline-info btn-sm" },
];

const redesLista = document.getElementById("redes-lista");
redesData.forEach(function (red) {
  const li = document.createElement("li");
  li.className = "list-inline-item";
  const a = document.createElement("a");
  a.href = red.href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = red.clase;
  a.textContent = red.texto;
  li.appendChild(a);
  redesLista.appendChild(li);
});

const asideData = [
  {
    titulo: "⏰ Horarios de Atención",
    items: ["Lunes - Viernes: 8:00 AM - 6:00 PM", "Sábado: 9:00 AM - 1:00 PM", "Domingo: Cerrado"],
  },
  {
    titulo: "🎁 Promociones Especiales",
    items: ["Descuento 15% en proyectos de desarrollo web", "Consultoría gratuita para empresas nuevas", "Soporte 24/7 en paquetes premium"],
  },
  {
    titulo: "✅ Garantía de Calidad",
    items: ["Código 100% personalizado", "Soporte técnico incluido por 3 meses", "Actualizaciones y mantenimiento garantizado"],
  },
  {
    titulo: "🏆 Certificaciones",
    items: ["Expertos en tecnologías web modernas", "Seguridad y protección de datos", "Metodologías ágiles de desarrollo"],
  },
];

const asideGrid = document.getElementById("aside-grid");
asideData.forEach(function (bloque) {
  const section = document.createElement("section");
  section.className = "col-md-6 col-lg-3";

  const card = document.createElement("div");
  card.className = "card p-3 m-3 h-100 border-0 shadow-sm text-center";

  const h4 = document.createElement("h4");
  h4.className = "h5 fw-bold mb-3 text-primary";
  h4.textContent = bloque.titulo;

  const ul = document.createElement("ul");
  ul.className = "list-unstyled mb-0";

  bloque.items.forEach(function (texto) {
    const li = document.createElement("li");
    li.className = "mb-2";
    li.textContent = texto;
    ul.appendChild(li);
  });

  card.appendChild(h4);
  card.appendChild(ul);
  section.appendChild(card);
  asideGrid.appendChild(section);
});

const footerData = [
  { etiqueta: null,          valor: "Cibercore - Soluciones Tecnológicas" },
  { etiqueta: "Estudiante:", valor: "Norman Vladimir Eras Peña" },
  { etiqueta: "Asignatura:", valor: "Desarrollo de Aplicaciones Web" },
  { etiqueta: "Año:",        valor: "2026" },
];

const footerGrid = document.getElementById("footer-grid");
footerData.forEach(function (dato) {
  const col = document.createElement("div");
  col.className = "col-md-3";

  const p = document.createElement("p");
  p.className = "mb-0";

  if (dato.etiqueta) {
    const strong = document.createElement("strong");
    strong.textContent = dato.etiqueta + " ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(dato.valor));
  } else {
    const strong = document.createElement("strong");
    strong.textContent = dato.valor;
    p.appendChild(strong);
  }

  col.appendChild(p);
  footerGrid.appendChild(col);
});

const navItems = [
  { texto: "Inicio",        href: "#inicio" },
  { texto: "Qui\u00e9nes somos", href: "#quienessomos" },
  { texto: "Servicios",     href: "#servicios" },
  { texto: "Proyectos",     href: "#proyectos" },
  { texto: "Blog",          href: "#blog" },
  { texto: "Cotizaci\u00f3n",  href: "#cotizacion" },
  { texto: "Contacto",      href: "#contacto" },
];

const navLista = document.getElementById("nav-lista");
navItems.forEach(function (item) {
  const li = document.createElement("li");
  li.className = "nav-item";
  const a = document.createElement("a");
  a.className = "nav-link";
  a.href = item.href;
  a.textContent = item.texto;
  li.appendChild(a);
  navLista.appendChild(li);
});

const blogData = [
  {
    titulo: "Tendencias en desarrollo web 2026",
    fecha: "15 de junio, 2026",
    resumen: "Exploramos las tecnolog\u00edas y frameworks que est\u00e1n marcando el rumbo del desarrollo web este a\u00f1o.",
    categoria: "Tecnolog\u00eda",
  },
  {
    titulo: "C\u00f3mo elegir el software ideal para tu empresa",
    fecha: "28 de mayo, 2026",
    resumen: "Gu\u00eda pr\u00e1ctica para evaluar, comparar y seleccionar soluciones de software adaptadas a tu negocio.",
    categoria: "Consejos",
  },
  {
    titulo: "Transformaci\u00f3n digital: por d\u00f3nde empezar",
    fecha: "10 de mayo, 2026",
    resumen: "Los primeros pasos para digitalizar procesos en empresas peque\u00f1as y medianas sin grandes inversiones.",
    categoria: "Empresas",
  },
];

const blogGrid = document.getElementById("blog-grid");
blogData.forEach(function (post) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";

  const card = document.createElement("div");
  card.className = "card h-100 shadow-sm border-0";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column p-4";

  const badge = document.createElement("span");
  badge.className = "badge bg-primary text-white mb-3 align-self-start";
  badge.textContent = post.categoria;

  const titulo = document.createElement("h3");
  titulo.className = "card-title h5 fw-bold mb-2";
  titulo.textContent = post.titulo;

  const fecha = document.createElement("p");
  fecha.className = "text-muted small mb-3";
  fecha.textContent = post.fecha;

  const resumen = document.createElement("p");
  resumen.className = "card-text flex-grow-1";
  resumen.textContent = post.resumen;

  const btn = document.createElement("a");
  btn.href = "#";
  btn.className = "btn btn-primary mt-3 fw-bold";
  btn.textContent = "Leer m\u00e1s";

  cardBody.appendChild(badge);
  cardBody.appendChild(titulo);
  cardBody.appendChild(fecha);
  cardBody.appendChild(resumen);
  cardBody.appendChild(btn);
  card.appendChild(cardBody);
  col.appendChild(card);
  blogGrid.appendChild(col);
});

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
  badge.className = "badge bg-primary text-white position-absolute top-0 start-0 m-3 shadow-sm rounded-pill";
  badge.style.zIndex = "2";
  badge.textContent = datos.icono + " " + datos.categoria;

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

  // ====== MODAL DE BOOTSTRAP (SERVICIOS) ======
  function abrirModal(indice) {
    const datos = serviciosData[indice];
  
    document.getElementById("modal-icono").textContent = datos.icono;
    document.getElementById("modalServicioLabel").textContent = datos.titulo;
    document.getElementById("modal-descripcion").textContent = datos.descripcion;
  
    const lista = document.getElementById("modal-lista");
    lista.innerHTML = "";
    datos.detalle.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      li.className = "mb-1";
      lista.appendChild(li);
    });
  
    const modalElement = document.getElementById("modalServicio");
    const modalServicio = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalServicio.show();
  }
  
  botonesVerMas.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.classList.contains("disabled")) {
        const id = parseInt(this.getAttribute("data-servicio-id"), 10);
        abrirModal(id);
      }
    });
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
const campoNombre      = document.getElementById("cot-nombre");
const campoEmail       = document.getElementById("cot-email");
const campoEmpresa     = document.getElementById("cot-empresa");
const campoServicio    = document.getElementById("cot-servicio");
const campoPresupuesto = document.getElementById("cot-presupuesto");
const campoDescripcion = document.getElementById("cot-descripcion");
const contadorChars    = document.getElementById("cot-contador");
const plazoError       = document.getElementById("plazo-error");
const confirmacion     = document.getElementById("cot-confirmacion");
const btnCotizar       = document.getElementById("btn-cotizar");
const btnLimpiar       = document.getElementById("btn-limpiar");
const radiosPlayzo     = document.querySelectorAll("input[name='cot-plazo']");

const MAX_CHARS     = 500;
const MIN_CHARS_DESC = 20;
const MIN_NOMBRE     = 3;
const MIN_NOMBRE_TOTAL = 5;
const REGEX_EMAIL    = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const REGEX_SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
const REGEX_NOMBRE_EMPRESA = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.&\-,()]+$/;

var formularioTocado = false;

function marcarValido(campo) {
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  var feedback = campo.parentNode.querySelector(".invalid-feedback");
  if (feedback) feedback.style.display = "none";
  var errorSpan = campo.parentNode.querySelector(".error-campo");
  if (errorSpan) errorSpan.remove();
}

function marcarInvalido(campo, mensaje) {
  campo.classList.remove("is-valid");
  campo.classList.add("is-invalid");
  var feedback = campo.parentNode.querySelector(".invalid-feedback");
  if (feedback) {
    feedback.textContent = mensaje;
    feedback.style.display = "block";
  }
  var errorAnterior = campo.parentNode.querySelector(".error-campo");
  if (errorAnterior) errorAnterior.remove();
}

function marcarNeutro(campo) {
  campo.classList.remove("is-valid", "is-invalid");
  var feedback = campo.parentNode.querySelector(".invalid-feedback");
  if (feedback) feedback.style.display = "none";
  var errorSpan = campo.parentNode.querySelector(".error-campo");
  if (errorSpan) errorSpan.remove();
}

function validarNombre() {
  var valor = campoNombre.value.trim();
  if (valor === "") {
    marcarInvalido(campoNombre, "El nombre es obligatorio.");
    return false;
  }
  if (valor.length < MIN_NOMBRE_TOTAL) {
    marcarInvalido(campoNombre, "Debe tener al menos " + MIN_NOMBRE_TOTAL + " caracteres.");
    return false;
  }
  if (!REGEX_NOMBRE_EMPRESA.test(valor)) {
    marcarInvalido(campoNombre, "Contiene caracteres no permitidos.");
    return false;
  }
  var esNombrePersonal = REGEX_SOLO_LETRAS.test(valor);
  if (esNombrePersonal) {
    var palabras = valor.split(/\s+/).filter(function (p) { return p.length > 0; });
    if (palabras.length < 2) {
      marcarInvalido(campoNombre, "Ingresa nombre y apellido, o el nombre de tu empresa.");
      return false;
    }
  }
  marcarValido(campoNombre);
  return true;
}

function validarEmail() {
  var valor = campoEmail.value.trim();
  if (valor === "") {
    marcarInvalido(campoEmail, "El correo electrónico es obligatorio.");
    return false;
  }
  if (!REGEX_EMAIL.test(valor)) {
    marcarInvalido(campoEmail, "Ingresa un correo electrónico válido (ej: nombre@correo.com).");
    return false;
  }
  marcarValido(campoEmail);
  return true;
}

function validarEmpresa() {
  var valor = campoEmpresa.value.trim();
  if (valor === "") {
    marcarNeutro(campoEmpresa);
    return true;
  }
  if (valor.length < 2) {
    marcarInvalido(campoEmpresa, "El nombre de la empresa debe tener al menos 2 caracteres.");
    return false;
  }
  marcarValido(campoEmpresa);
  return true;
}

function validarServicio() {
  if (campoServicio.value === "") {
    marcarInvalido(campoServicio, "Selecciona un servicio de interés.");
    return false;
  }
  marcarValido(campoServicio);
  return true;
}

function validarPresupuesto() {
  if (campoPresupuesto.value === "") {
    marcarInvalido(campoPresupuesto, "Selecciona un rango de presupuesto.");
    return false;
  }
  marcarValido(campoPresupuesto);
  return true;
}

function validarPlazo() {
  var alguno = Array.from(radiosPlayzo).some(function (r) { return r.checked; });
  if (!alguno) {
    plazoError.style.display = "block";
    plazoError.textContent = "Selecciona un plazo deseado.";
    radiosPlayzo.forEach(function (r) {
      r.classList.add("is-invalid");
    });
    return false;
  }
  plazoError.style.display = "none";
  radiosPlayzo.forEach(function (r) {
    r.classList.remove("is-invalid");
    r.classList.add("is-valid");
  });
  return true;
}

function validarDescripcion() {
  var valor = campoDescripcion.value.trim();
  var longitud = valor.length;
  if (valor === "") {
    marcarInvalido(campoDescripcion, "La descripción del proyecto es obligatoria.");
    return false;
  }
  if (longitud < MIN_CHARS_DESC) {
    marcarInvalido(campoDescripcion, "La descripción debe tener al menos " + MIN_CHARS_DESC + " caracteres (" + longitud + "/" + MIN_CHARS_DESC + ").");
    return false;
  }
  marcarValido(campoDescripcion);
  return true;
}

function actualizarContador() {
  var cantidad = campoDescripcion.value.length;

  if (cantidad > MAX_CHARS) {
    campoDescripcion.value = campoDescripcion.value.substring(0, MAX_CHARS);
    cantidad = MAX_CHARS;
  }

  contadorChars.textContent = cantidad;

  if (cantidad >= MAX_CHARS * 0.9) {
    contadorChars.style.color = "#dc3545";
    contadorChars.style.fontWeight = "700";
  } else if (cantidad >= MIN_CHARS_DESC) {
    contadorChars.style.color = "#198754";
    contadorChars.style.fontWeight = "600";
  } else if (cantidad > 0) {
    contadorChars.style.color = "#fd7e14";
    contadorChars.style.fontWeight = "600";
  } else {
    contadorChars.style.color = "";
    contadorChars.style.fontWeight = "";
  }
}

function actualizarBotonEnviar() {
  var nombreTrim = campoNombre.value.trim();
  var nombreOk = nombreTrim.length >= MIN_NOMBRE_TOTAL && REGEX_NOMBRE_EMPRESA.test(nombreTrim);
  if (nombreOk && REGEX_SOLO_LETRAS.test(nombreTrim)) {
    var palabrasNombre = nombreTrim.split(/\s+/).filter(function (p) { return p.length > 0; });
    nombreOk = palabrasNombre.length >= 2;
  }
  var emailOk       = REGEX_EMAIL.test(campoEmail.value.trim());
  var servicioOk    = campoServicio.value !== "";
  var presupuestoOk = campoPresupuesto.value !== "";
  var plazoOk       = Array.from(radiosPlayzo).some(function (r) { return r.checked; });
  var descripcionOk = campoDescripcion.value.trim().length >= MIN_CHARS_DESC;

  var todosValidos = nombreOk && emailOk && servicioOk && presupuestoOk && plazoOk && descripcionOk;

  btnCotizar.disabled = !todosValidos;

  if (todosValidos) {
    btnCotizar.style.opacity = "1";
    btnCotizar.style.cursor = "pointer";
  } else {
    btnCotizar.style.opacity = "0.6";
    btnCotizar.style.cursor = "not-allowed";
  }
}

campoNombre.addEventListener("input", function () {
  if (formularioTocado || this.value.trim().length > 0) {
    validarNombre();
  }
  actualizarBotonEnviar();
});

campoNombre.addEventListener("blur", function () {
  formularioTocado = true;
  validarNombre();
  actualizarBotonEnviar();
});

campoEmail.addEventListener("input", function () {
  var valor = this.value.trim();
  if (valor === "") {
    if (formularioTocado) marcarInvalido(campoEmail, "El correo electrónico es obligatorio.");
  } else if (REGEX_EMAIL.test(valor)) {
    marcarValido(campoEmail);
  } else {
    marcarInvalido(campoEmail, "Ingresa un correo electrónico válido (ej: nombre@correo.com).");
  }
  actualizarBotonEnviar();
});

campoEmail.addEventListener("blur", function () {
  formularioTocado = true;
  validarEmail();
  actualizarBotonEnviar();
});

campoEmpresa.addEventListener("input", function () {
  validarEmpresa();
});

campoEmpresa.addEventListener("blur", function () {
  validarEmpresa();
});

campoServicio.addEventListener("change", function () {
  validarServicio();
  actualizarBotonEnviar();
});

campoPresupuesto.addEventListener("change", function () {
  validarPresupuesto();
  actualizarBotonEnviar();
});

radiosPlayzo.forEach(function (radio) {
  radio.addEventListener("change", function () {
    validarPlazo();
    actualizarBotonEnviar();
  });
});

campoDescripcion.addEventListener("input", function () {
  actualizarContador();
  if (formularioTocado || this.value.trim().length > 0) {
    validarDescripcion();
  }
  actualizarBotonEnviar();
});

campoDescripcion.addEventListener("blur", function () {
  formularioTocado = true;
  validarDescripcion();
  actualizarBotonEnviar();
});

function limpiarEstadosValidacion() {
  var todosLosCampos = formCotizacion.querySelectorAll(".form-control, .form-select, .form-check-input");
  todosLosCampos.forEach(function (campo) {
    campo.classList.remove("is-valid", "is-invalid");
  });
  formCotizacion.querySelectorAll(".error-campo").forEach(function (e) {
    e.remove();
  });
  formCotizacion.querySelectorAll(".invalid-feedback").forEach(function (f) {
    f.style.display = "none";
  });
  plazoError.style.display = "none";
  var alertaCot = formCotizacion.querySelector(".alert-danger");
  if (alertaCot) alertaCot.remove();
  contadorChars.textContent = "0";
  contadorChars.style.color = "";
  contadorChars.style.fontWeight = "";
  formularioTocado = false;
  btnCotizar.disabled = true;
  btnCotizar.style.opacity = "0.6";
  btnCotizar.style.cursor = "not-allowed";
}

btnLimpiar.addEventListener("click", function () {
  formCotizacion.reset();
  limpiarEstadosValidacion();
});

function mostrarError(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  if (!campo) return;
  var errorAnterior = campo.parentNode.querySelector(".error-campo");
  if (errorAnterior) errorAnterior.remove();

  var error = document.createElement("span");
  error.className = "error-campo text-danger small d-block mt-1";
  var icono = document.createElement("span");
  icono.textContent = "⚠️ ";
  var texto = document.createTextNode(mensaje);
  error.appendChild(icono);
  error.appendChild(texto);
  campo.parentNode.appendChild(error);
}

function limpiarErrores() {
  document.querySelectorAll(".error-campo").forEach(function (e) {
    e.remove();
  });
}

var nombresServicios = {
  software:   "Desarrollo de software a medida",
  web:        "Aplicaciones web modernas y responsivas",
  gestion:    "Diseño de plataformas de gestión",
  soluciones: "Soluciones tecnológicas personalizadas",
  otro:       "Otro / No estoy seguro",
};

var contadorServicios = {
  software:   0,
  web:        0,
  gestion:    0,
  soluciones: 0,
  otro:       0,
};

function renderContador() {
  var panel = document.getElementById("panel-contador");

  if (!panel) {
    panel = document.createElement("div");
    panel.id = "panel-contador";
    panel.className = "bg-white border border-2 border-primary rounded-3 p-4 mt-4 shadow-sm";

    var titulo = document.createElement("h4");
    titulo.textContent = "Solicitudes por servicio";
    titulo.className = "text-primary fw-bold mb-3 h6";
    panel.appendChild(titulo);

    var tabla = document.createElement("table");
    tabla.id = "tabla-contador";
    tabla.className = "table table-sm table-borderless mb-0";
    panel.appendChild(tabla);

    var cardForm = document.querySelector("#cotizacion .card.border-0.shadow");
    cardForm.appendChild(panel);
  }

  var tabla = document.getElementById("tabla-contador");
  tabla.innerHTML = "";

  Object.keys(contadorServicios).forEach(function (clave) {
    var fila = document.createElement("tr");

    var tdNombre = document.createElement("td");
    tdNombre.textContent = nombresServicios[clave];
    tdNombre.className = "border-bottom py-2 text-dark";

    var tdCount = document.createElement("td");
    tdCount.textContent = contadorServicios[clave];
    tdCount.className = "border-bottom py-2 fw-bold text-primary text-end";

    fila.appendChild(tdNombre);
    fila.appendChild(tdCount);
    tabla.appendChild(fila);
  });
}

formCotizacion.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formularioTocado = true;
  limpiarErrores();

  var v1 = validarNombre();
  var v2 = validarEmail();
  var v3 = validarEmpresa();
  var v4 = validarServicio();
  var v5 = validarPresupuesto();
  var v6 = validarPlazo();
  var v7 = validarDescripcion();

  if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7) {
    var alertaAnterior = formCotizacion.querySelector(".alert-danger");
    if (alertaAnterior) alertaAnterior.remove();
    var alertaError = document.createElement("div");
    alertaError.className = "alert alert-danger mt-3 fw-semibold text-center";
    alertaError.textContent = "⚠️ Por favor corrige los campos marcados en rojo antes de enviar.";
    btnCotizar.parentNode.insertBefore(alertaError, btnCotizar.parentNode.nextSibling);
    var primerInvalido = formCotizacion.querySelector(".is-invalid");
    if (primerInvalido) {
      primerInvalido.scrollIntoView({ behavior: "smooth", block: "center" });
      primerInvalido.focus();
    }
    return;
  }

  var alertaDanger = formCotizacion.querySelector(".alert-danger");
  if (alertaDanger) alertaDanger.remove();

  var nombre      = campoNombre.value.trim();
  var email       = campoEmail.value.trim();
  var servicio    = campoServicio.value;
  var presupuesto = campoPresupuesto.value;
  var descripcion = campoDescripcion.value.trim();
  var plazoRadio  = document.querySelector("input[name='cot-plazo']:checked");
  var plazo       = plazoRadio ? plazoRadio.value : "";

  console.log("Nombre:",      nombre);
  console.log("Email:",       email);
  console.log("Servicio:",    servicio);
  console.log("Presupuesto:", presupuesto);
  console.log("Plazo:",       plazo);
  console.log("Descripción:", descripcion);

  var resumen = document.createElement("div");
  resumen.className = "alert alert-light border border-start-0 border-end-0 border-top-0 border-bottom-0 border-start border-4 border-primary shadow-sm mt-4 p-3 text-dark";

  var tituloResumen = document.createElement("p");
  tituloResumen.textContent = "Resumen de tu solicitud:";
  tituloResumen.className = "fw-bold mb-2 text-primary";

  var campos = [
    { etiqueta: "Nombre",      valor: nombre },
    { etiqueta: "Email",       valor: email },
    { etiqueta: "Servicio",    valor: servicio },
    { etiqueta: "Presupuesto", valor: presupuesto },
    { etiqueta: "Plazo",       valor: plazo },
    { etiqueta: "Descripci\u00f3n", valor: descripcion },
  ];

  campos.forEach(function (c) {
    var fila = document.createElement("p");
    fila.className = "mb-1 small";
    var etiqueta = document.createElement("strong");
    etiqueta.textContent = c.etiqueta + ": ";
    fila.appendChild(etiqueta);
    fila.appendChild(document.createTextNode(c.valor));
    resumen.appendChild(fila);
  });

  var btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn btn-outline-danger btn-sm mt-2";
  btnEliminar.setAttribute("data-servicio", servicio);
  resumen.appendChild(btnEliminar);

  resumen.insertBefore(tituloResumen, resumen.firstChild);

  // Simular carga con Spinner de Bootstrap
  var textoCotizarOriginal = btnCotizar.innerHTML;
  btnCotizar.disabled = true;
  btnCotizar.style.opacity = "1";
  btnCotizar.style.cursor = "wait";
  btnCotizar.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Procesando...';

  setTimeout(function () {
    btnCotizar.innerHTML = textoCotizarOriginal;
    btnCotizar.style.cursor = "pointer";

    formCotizacion.parentNode.insertBefore(resumen, formCotizacion.nextSibling);

    formCotizacion.reset();
    limpiarEstadosValidacion();

    var mensajeExito = document.createElement("div");
    mensajeExito.textContent = "✅ Envío de formulario exitoso.";
    mensajeExito.className = "alert alert-success mt-3 fw-bold text-center shadow-sm";

    contadorServicios[servicio] = (contadorServicios[servicio] || 0) + 1;
    renderContador();

    resumen.parentNode.insertBefore(mensajeExito, resumen.nextSibling);
    mensajeExito.scrollIntoView({ behavior: "smooth", block: "center" });

    btnEliminar.addEventListener("click", function () {
      var serv = this.getAttribute("data-servicio");
      if (contadorServicios[serv] > 0) {
        contadorServicios[serv] = contadorServicios[serv] - 1;
      }
      renderContador();
      if (mensajeExito.parentNode) mensajeExito.remove();
      resumen.remove();
    });
  }, 1500);
});

var camposTexto = document.querySelectorAll(
  "#form-cotizacion input[type='text'], " +
  "#form-cotizacion input[type='email'], " +
  "#form-cotizacion select, " +
  "#form-cotizacion textarea"
);

camposTexto.forEach(function (campo) {
  campo.addEventListener("focus", function () {
    if (!this.classList.contains("is-invalid")) {
      this.style.borderColor  = "#0000FF";
      this.style.boxShadow    = "0 0 0 0.2rem rgba(0, 0, 255, 0.20)";
    }
  });
  campo.addEventListener("blur", function () {
    if (!this.classList.contains("is-valid") && !this.classList.contains("is-invalid")) {
      this.style.borderColor = "";
      this.style.boxShadow   = "";
    }
  });
});

actualizarBotonEnviar();

var formContacto       = document.getElementById("form-contacto");
var contNombre         = document.getElementById("cont-nombre");
var contEmail          = document.getElementById("cont-email");
var contAsunto         = document.getElementById("cont-asunto");
var contMensaje        = document.getElementById("cont-mensaje");
var contConfirmacion   = document.getElementById("cont-confirmacion");
var btnContacto        = document.getElementById("btn-contacto");
var contAsuntoContador = document.getElementById("cont-asunto-contador");
var contMensajeContador = document.getElementById("cont-mensaje-contador");
var contactoTocado     = false;

var CONT_ASUNTO_MIN  = 20;
var CONT_ASUNTO_MAX  = 100;
var CONT_MENSAJE_MIN = 20;
var CONT_MENSAJE_MAX = 1000;

function contMarcarValido(campo) {
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  var feedback = campo.parentNode.querySelector(".invalid-feedback");
  if (feedback) feedback.style.display = "none";
}

function contMarcarInvalido(campo, mensaje) {
  campo.classList.remove("is-valid");
  campo.classList.add("is-invalid");
  var feedback = campo.parentNode.querySelector(".invalid-feedback");
  if (feedback) {
    feedback.textContent = mensaje;
    feedback.style.display = "block";
  }
}

function contValidarNombre() {
  var valor = contNombre.value.trim();
  if (valor === "") {
    contMarcarInvalido(contNombre, "El nombre es obligatorio.");
    return false;
  }
  if (valor.length < MIN_NOMBRE_TOTAL) {
    contMarcarInvalido(contNombre, "Debe tener al menos " + MIN_NOMBRE_TOTAL + " caracteres.");
    return false;
  }
  if (!REGEX_NOMBRE_EMPRESA.test(valor)) {
    contMarcarInvalido(contNombre, "Contiene caracteres no permitidos.");
    return false;
  }
  var esNombrePersonal = REGEX_SOLO_LETRAS.test(valor);
  if (esNombrePersonal) {
    var palabras = valor.split(/\s+/).filter(function (p) { return p.length > 0; });
    if (palabras.length < 2) {
      contMarcarInvalido(contNombre, "Ingresa nombre y apellido, o el nombre de tu empresa.");
      return false;
    }
  }
  contMarcarValido(contNombre);
  return true;
}

function contValidarEmail() {
  var valor = contEmail.value.trim();
  if (valor === "") {
    contMarcarInvalido(contEmail, "El correo electrónico es obligatorio.");
    return false;
  }
  if (!REGEX_EMAIL.test(valor)) {
    contMarcarInvalido(contEmail, "Ingresa un correo electrónico válido (ej: nombre@correo.com).");
    return false;
  }
  contMarcarValido(contEmail);
  return true;
}

function contValidarAsunto() {
  var valor = contAsunto.value.trim();
  var longitud = valor.length;
  if (valor === "") {
    contMarcarInvalido(contAsunto, "El asunto es obligatorio.");
    return false;
  }
  if (longitud < CONT_ASUNTO_MIN) {
    contMarcarInvalido(contAsunto, "El asunto debe tener al menos " + CONT_ASUNTO_MIN + " caracteres (" + longitud + "/" + CONT_ASUNTO_MIN + ").");
    return false;
  }
  contMarcarValido(contAsunto);
  return true;
}

function contValidarMensaje() {
  var valor = contMensaje.value.trim();
  var longitud = valor.length;
  if (valor === "") {
    contMarcarInvalido(contMensaje, "El mensaje es obligatorio.");
    return false;
  }
  if (longitud < CONT_MENSAJE_MIN) {
    contMarcarInvalido(contMensaje, "El mensaje debe tener al menos " + CONT_MENSAJE_MIN + " caracteres (" + longitud + "/" + CONT_MENSAJE_MIN + ").");
    return false;
  }
  contMarcarValido(contMensaje);
  return true;
}

function actualizarContadorAsunto() {
  var cantidad = contAsunto.value.length;
  if (cantidad > CONT_ASUNTO_MAX) {
    contAsunto.value = contAsunto.value.substring(0, CONT_ASUNTO_MAX);
    cantidad = CONT_ASUNTO_MAX;
  }
  contAsuntoContador.textContent = cantidad;
  if (cantidad >= CONT_ASUNTO_MAX * 0.9) {
    contAsuntoContador.style.color = "#dc3545";
    contAsuntoContador.style.fontWeight = "700";
  } else if (cantidad >= CONT_ASUNTO_MIN) {
    contAsuntoContador.style.color = "#198754";
    contAsuntoContador.style.fontWeight = "600";
  } else if (cantidad > 0) {
    contAsuntoContador.style.color = "#fd7e14";
    contAsuntoContador.style.fontWeight = "600";
  } else {
    contAsuntoContador.style.color = "";
    contAsuntoContador.style.fontWeight = "";
  }
}

function actualizarContadorMensaje() {
  var cantidad = contMensaje.value.length;
  if (cantidad > CONT_MENSAJE_MAX) {
    contMensaje.value = contMensaje.value.substring(0, CONT_MENSAJE_MAX);
    cantidad = CONT_MENSAJE_MAX;
  }
  contMensajeContador.textContent = cantidad;
  if (cantidad >= CONT_MENSAJE_MAX * 0.9) {
    contMensajeContador.style.color = "#dc3545";
    contMensajeContador.style.fontWeight = "700";
  } else if (cantidad >= CONT_MENSAJE_MIN) {
    contMensajeContador.style.color = "#198754";
    contMensajeContador.style.fontWeight = "600";
  } else if (cantidad > 0) {
    contMensajeContador.style.color = "#fd7e14";
    contMensajeContador.style.fontWeight = "600";
  } else {
    contMensajeContador.style.color = "";
    contMensajeContador.style.fontWeight = "";
  }
}

function actualizarBtnContacto() {
  var nombreTrim = contNombre.value.trim();
  var nombreOk = nombreTrim.length >= MIN_NOMBRE_TOTAL && REGEX_NOMBRE_EMPRESA.test(nombreTrim);
  if (nombreOk && REGEX_SOLO_LETRAS.test(nombreTrim)) {
    var palabrasNombre = nombreTrim.split(/\s+/).filter(function (p) { return p.length > 0; });
    nombreOk = palabrasNombre.length >= 2;
  }
  var emailOk   = REGEX_EMAIL.test(contEmail.value.trim());
  var asuntoOk  = contAsunto.value.trim().length >= CONT_ASUNTO_MIN && contAsunto.value.trim().length <= CONT_ASUNTO_MAX;
  var mensajeOk = contMensaje.value.trim().length >= CONT_MENSAJE_MIN && contMensaje.value.trim().length <= CONT_MENSAJE_MAX;
  var todosOk   = nombreOk && emailOk && asuntoOk && mensajeOk;

  btnContacto.disabled = !todosOk;
  btnContacto.style.opacity = todosOk ? "1" : "0.6";
  btnContacto.style.cursor = todosOk ? "pointer" : "not-allowed";
}

contNombre.addEventListener("input", function () {
  if (contactoTocado || this.value.trim().length > 0) contValidarNombre();
  actualizarBtnContacto();
});
contNombre.addEventListener("blur", function () {
  contactoTocado = true;
  contValidarNombre();
  actualizarBtnContacto();
});

contEmail.addEventListener("input", function () {
  var valor = this.value.trim();
  if (valor === "") {
    if (contactoTocado) contMarcarInvalido(contEmail, "El correo electrónico es obligatorio.");
  } else if (REGEX_EMAIL.test(valor)) {
    contMarcarValido(contEmail);
  } else {
    contMarcarInvalido(contEmail, "Ingresa un correo electrónico válido (ej: nombre@correo.com).");
  }
  actualizarBtnContacto();
});
contEmail.addEventListener("blur", function () {
  contactoTocado = true;
  contValidarEmail();
  actualizarBtnContacto();
});

contAsunto.addEventListener("input", function () {
  actualizarContadorAsunto();
  if (contactoTocado || this.value.trim().length > 0) contValidarAsunto();
  actualizarBtnContacto();
});
contAsunto.addEventListener("blur", function () {
  contactoTocado = true;
  contValidarAsunto();
  actualizarBtnContacto();
});

contMensaje.addEventListener("input", function () {
  actualizarContadorMensaje();
  if (contactoTocado || this.value.trim().length > 0) contValidarMensaje();
  actualizarBtnContacto();
});
contMensaje.addEventListener("blur", function () {
  contactoTocado = true;
  contValidarMensaje();
  actualizarBtnContacto();
});

formContacto.addEventListener("submit", function (evento) {
  evento.preventDefault();
  contactoTocado = true;

  var v1 = contValidarNombre();
  var v2 = contValidarEmail();
  var v3 = contValidarAsunto();
  var v4 = contValidarMensaje();

  if (!v1 || !v2 || !v3 || !v4) {
    var alertaAnterior = formContacto.querySelector(".alert-danger");
    if (alertaAnterior) alertaAnterior.remove();
    var alertaError = document.createElement("div");
    alertaError.className = "alert alert-danger mt-3 fw-semibold text-center";
    alertaError.textContent = "⚠️ Por favor corrige los campos marcados en rojo antes de enviar.";
    btnContacto.parentNode.insertBefore(alertaError, btnContacto.nextSibling);
    var primerInvalido = formContacto.querySelector(".is-invalid");
    if (primerInvalido) {
      primerInvalido.scrollIntoView({ behavior: "smooth", block: "center" });
      primerInvalido.focus();
    }
    return;
  }

  var alertaDanger = formContacto.querySelector(".alert-danger");
  if (alertaDanger) alertaDanger.remove();

  console.log("Contacto - Nombre:", contNombre.value.trim());
  console.log("Contacto - Email:", contEmail.value.trim());
  console.log("Contacto - Asunto:", contAsunto.value.trim());
  console.log("Contacto - Mensaje:", contMensaje.value.trim());

  // NUEVO: Simular carga con Spinner de Bootstrap
  var textoOriginal = btnContacto.innerHTML;
  btnContacto.disabled = true;
  btnContacto.style.opacity = "1";
  btnContacto.style.cursor = "wait";
  btnContacto.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...';

  setTimeout(function () {
    btnContacto.innerHTML = textoOriginal;
    btnContacto.style.cursor = "not-allowed";

    contConfirmacion.style.display = "block";
    contConfirmacion.scrollIntoView({ behavior: "smooth", block: "center" });

    if (typeof testimoniosData !== "undefined") {
        testimoniosData.unshift({
            nombre: contNombre.value.trim(),
            asunto: contAsunto.value.trim(),
            mensaje: contMensaje.value.trim()
        });
        renderizarTestimonios();
    }

    formContacto.reset();
    var camposContacto = formContacto.querySelectorAll(".form-control");
    camposContacto.forEach(function (c) {
      c.classList.remove("is-valid", "is-invalid");
    });
    contAsuntoContador.textContent = "0";
    contAsuntoContador.style.color = "";
    contAsuntoContador.style.fontWeight = "";
    contMensajeContador.textContent = "0";
    contMensajeContador.style.color = "";
    contMensajeContador.style.fontWeight = "";
    contactoTocado = false;
    btnContacto.disabled = true;
    btnContacto.style.opacity = "0.6";

    setTimeout(function () {
      contConfirmacion.style.display = "none";
    }, 5000);
  }, 1500);
});

var camposContactoFocus = formContacto.querySelectorAll(".form-control");
camposContactoFocus.forEach(function (campo) {
  campo.addEventListener("focus", function () {
    if (!this.classList.contains("is-invalid")) {
      this.style.borderColor = "#0000FF";
      this.style.boxShadow = "0 0 0 0.2rem rgba(0, 0, 255, 0.20)";
    }
  });
  campo.addEventListener("blur", function () {
    if (!this.classList.contains("is-valid") && !this.classList.contains("is-invalid")) {
      this.style.borderColor = "";
      this.style.boxShadow = "";
    }
  });
});

actualizarBtnContacto();

// ====== NOVEDADES DINÁMICAS ======
const novedadesData = [
  {
    titulo: "Lanzamiento de nueva API",
    descripcion: "Hemos lanzado nuestra nueva API REST para integración con sistemas de terceros.",
    fecha: "20 de Julio, 2026",
    imagen: "./public/img/novedades_api.png"
  },
  {
    titulo: "Alianza Estratégica",
    descripcion: "Cibercore se asocia con líderes tecnológicos para mejorar la infraestructura en la nube.",
    fecha: "12 de Julio, 2026",
    imagen: "./public/img/novedades_alliance.png"
  },
  {
    titulo: "Certificación de Seguridad",
    descripcion: "Obtuvimos la certificación ISO 27001 garantizando la máxima seguridad en nuestros desarrollos.",
    fecha: "05 de Julio, 2026",
    imagen: "./public/img/novedades_security.png"
  }
];

const novedadesGrid = document.getElementById("novedades-grid");
if (novedadesGrid) {
  novedadesData.forEach(function (item) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm border-0 text-center";
    card.style.overflow = "hidden";

    const imagenContenedor = document.createElement("div");
    imagenContenedor.className = "ratio ratio-16x9";
    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.titulo;
    img.className = "card-img-top object-fit-cover";
    imagenContenedor.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-4 d-flex flex-column";

    const titulo = document.createElement("h3");
    titulo.className = "h5 fw-bold text-primary mb-2";
    titulo.textContent = item.titulo;

    const fecha = document.createElement("p");
    fecha.className = "text-muted small mb-3";
    fecha.textContent = item.fecha;

    const descripcion = document.createElement("p");
    descripcion.className = "text-secondary mb-0 flex-grow-1";
    descripcion.textContent = item.descripcion;

    cardBody.appendChild(titulo);
    cardBody.appendChild(fecha);
    cardBody.appendChild(descripcion);

    card.appendChild(imagenContenedor);
    card.appendChild(cardBody);
    col.appendChild(card);
    novedadesGrid.appendChild(col);
  });
}

// ====== SERVICIOS DINÁMICOS (Estructura Repetitiva FOR) ======
const listadoServicios = [
  {
    titulo: "Desarrollo de software a medida",
    descripcion: "Desarrollo de soluciones personalizadas adaptadas a las necesidades específicas de tu empresa.",
    imagen: "./public/img/servicio1.jpg",
    estado: "popular"
  },
  {
    titulo: "Aplicaciones web modernas y responsivas",
    descripcion: "Creación de sitios web dinámicos, seguros y adaptables a cualquier tamaño de pantalla.",
    imagen: "./public/img/servicio2.jpg",
    estado: "nuevo"
  },
  {
    titulo: "Diseño de plataformas de gestión",
    descripcion: "Diseño de sistemas y plataformas para optimizar la administración y procesos de tu negocio.",
    imagen: "./public/img/servicio3.jpg",
    estado: "normal"
  },
  {
    titulo: "Soluciones tecnológicas personalizadas",
    descripcion: "Implementación de herramientas tecnológicas innovadoras diseñadas para resolver tus desafíos.",
    imagen: "./public/img/servicio4.jpg",
    estado: "mantenimiento"
  }
];

const serviciosGrid = document.getElementById("servicios-grid");
if (serviciosGrid) {
  // Implementación explícita de estructura repetitiva FOR para mostrar varios registros
  for (let i = 0; i < listadoServicios.length; i++) {
    const servicio = listadoServicios[i];

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm border-1 position-relative";

    const img = document.createElement("img");
    img.src = servicio.imagen;
    img.alt = servicio.titulo;
    img.className = "card-img-top img-fluid";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column p-3";
    
    // CONDICIONAL: Mostrar mensaje según el estado de los datos
    if (servicio.estado === "nuevo") {
      const badge = document.createElement("span");
      badge.className = "badge bg-success mb-2 align-self-start text-uppercase";
      badge.textContent = "¡Nuevo Servicio!";
      cardBody.appendChild(badge);
    } else if (servicio.estado === "popular") {
      const badge = document.createElement("span");
      badge.className = "badge bg-warning text-dark mb-2 align-self-start text-uppercase";
      badge.textContent = "Más Solicitado";
      cardBody.appendChild(badge);
    } else if (servicio.estado === "mantenimiento") {
      const badge = document.createElement("span");
      badge.className = "badge bg-danger mb-2 align-self-start text-uppercase";
      badge.textContent = "Temporalmente Inactivo";
      cardBody.appendChild(badge);
    }

    const titulo = document.createElement("h3");
    titulo.className = "card-title h5 fw-bold mb-3";
    titulo.style.color = "#0000FF";
    titulo.textContent = servicio.titulo;

    const desc = document.createElement("p");
    desc.className = "card-text text-muted mb-4 fs-6";
    desc.textContent = servicio.descripcion;

    const btn = document.createElement("a");
    btn.href = "#contacto";
    btn.className = "btn btn-primary mt-auto fw-bold shadow-sm";
    btn.textContent = "Saber más";
    
    // Si está en mantenimiento, deshabilitamos el botón
    if (servicio.estado === "mantenimiento") {
       btn.className = "btn btn-secondary disabled mt-auto fw-bold";
       btn.textContent = "No disponible";
    }

    cardBody.appendChild(titulo);
    cardBody.appendChild(desc);
    cardBody.appendChild(btn);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    
    serviciosGrid.appendChild(col);
  }
}

// ====== TESTIMONIOS DINÁMICOS ======
const testimoniosData = [
  {
    nombre: "Juan Pérez",
    asunto: "Excelente servicio",
    mensaje: "El equipo es muy profesional. Totalmente recomendados.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

function renderizarTestimonios() {
  const grid = document.getElementById("testimonios-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  if (testimoniosData.length === 0) {
      grid.innerHTML = "<p class='text-center text-muted fs-5'>Aún no hay mensajes. ¡Sé el primero en contactarnos!</p>";
      return;
  }
  
  for (let i = 0; i < testimoniosData.length; i++) {
    const item = testimoniosData[i];
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    
    // Si hay foto, mostramos imagen redonda, si no un avatar por defecto basado en sus iniciales
    const imagenUrl = item.foto || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.nombre)}&background=0000FF&color=fff&size=100`;
    
    col.innerHTML = `
        <div class="card h-100 shadow-sm border-0 p-4 text-center" style="background-color: #f8f9fa; border-radius: 12px;">
            <div class="mb-3">
                <img src="${imagenUrl}" alt="Foto de ${item.nombre}" class="rounded-circle shadow-sm" style="width: 80px; height: 80px; object-fit: cover; border: 3px solid #DAE021;">
            </div>
            <h4 class="h5 fw-bold mb-1" style="color: #0000FF;">${item.nombre}</h4>
            <p class="small text-muted mb-3 fw-semibold text-uppercase">${item.asunto}</p>
            <p class="text-secondary mb-0 fst-italic">"${item.mensaje}"</p>
        </div>
    `;
    grid.appendChild(col);
  }
}

document.addEventListener("DOMContentLoaded", renderizarTestimonios);

// ====== OPCIONES DE FORMULARIO DE COTIZACIÓN (Generación Dinámica) ======
document.addEventListener("DOMContentLoaded", function () {
  const opcionesServicio = [
    { valor: "software", etiqueta: "Desarrollo de software a medida" },
    { valor: "web", etiqueta: "Aplicaciones web modernas y responsivas" },
    { valor: "gestion", etiqueta: "Diseño de plataformas de gestión" },
    { valor: "soluciones", etiqueta: "Soluciones tecnológicas personalizadas" },
    { valor: "otro", etiqueta: "Otro / No estoy seguro" }
  ];
  const selectServicio = document.getElementById("cot-servicio");
  if (selectServicio) {
    opcionesServicio.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.valor;
      option.textContent = opt.etiqueta;
      selectServicio.appendChild(option);
    });
  }

  const opcionesPresupuesto = [
    { valor: "menos500", etiqueta: "Menos de $500" },
    { valor: "500-1500", etiqueta: "$500 – $1.500" },
    { valor: "1500-5000", etiqueta: "$1.500 – $5.000" },
    { valor: "5000-10000", etiqueta: "$5.000 – $10.000" },
    { valor: "mas10000", etiqueta: "Más de $10.000" }
  ];
  const selectPresupuesto = document.getElementById("cot-presupuesto");
  if (selectPresupuesto) {
    opcionesPresupuesto.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.valor;
      option.textContent = opt.etiqueta;
      selectPresupuesto.appendChild(option);
    });
  }

  const opcionesPlazo = [
    { id: "plazo-urgente", valor: "menos1mes", etiqueta: "Menos de 1 mes", requerido: true },
    { id: "plazo-corto", valor: "1-3meses", etiqueta: "1 – 3 meses" },
    { id: "plazo-medio", valor: "3-6meses", etiqueta: "3 – 6 meses" },
    { id: "plazo-flexible", valor: "flexible", etiqueta: "Flexible" }
  ];
  const contenedorPlazo = document.getElementById("cot-plazo-group");
  if (contenedorPlazo) {
    opcionesPlazo.forEach(opt => {
      const div = document.createElement("div");
      div.className = "form-check";
      
      const input = document.createElement("input");
      input.className = "form-check-input";
      input.type = "radio";
      input.name = "cot-plazo";
      input.id = opt.id;
      input.value = opt.valor;
      if (opt.requerido) input.required = true;
      
      const label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = opt.id;
      label.textContent = opt.etiqueta;
      
      div.appendChild(input);
      div.appendChild(label);
      contenedorPlazo.appendChild(div);
    });
  }
});

