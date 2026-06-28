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
  h4.className = "h5 fw-bold mb-3";
  h4.style.color = "#0000FF";
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
  badge.className = "badge mb-3";
  badge.textContent = post.categoria;
  badge.style.cssText = "background:#0000FF; color:#fff; font-size:0.75rem; width:fit-content;";

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
  btn.className = "btn mt-3 fw-bold";
  btn.textContent = "Leer m\u00e1s";
  btn.style.cssText = "background:#0000FF; color:#fff; border:none;";

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
const btnLimpiar       = document.getElementById("btn-limpiar");

const MAX_CHARS = 500;

btnLimpiar.addEventListener("click", function () {
  document.getElementById("form-cotizacion").reset();
  limpiarErrores();
  contadorChars.textContent = "0";
});

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

function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  const error = document.createElement("span");
  error.className = "error-campo";
  error.style.color = "red";
  error.style.fontSize = "0.85rem";
  error.style.display = "block";
  error.style.marginTop = "4px";

  const icono = document.createElement("span");
  icono.textContent = "⚠️ ";

  const texto = document.createTextNode(mensaje);

  error.appendChild(icono);
  error.appendChild(texto);
  campo.parentNode.appendChild(error);
}

function limpiarErrores() {
  document.querySelectorAll(".error-campo").forEach(function (e) {
    e.remove();
  });
}

document.getElementById("form-cotizacion").addEventListener("submit", function (evento) {
  evento.preventDefault();

  limpiarErrores();

  const nombre      = document.getElementById("cot-nombre").value.trim();
  const email       = document.getElementById("cot-email").value.trim();
  const servicio    = document.getElementById("cot-servicio").value;
  const presupuesto = document.getElementById("cot-presupuesto").value;
  const descripcion = document.getElementById("cot-descripcion").value.trim();
  const plazoRadio  = document.querySelector("input[name='cot-plazo']:checked");
  const plazo       = plazoRadio ? plazoRadio.value : "";

  let valido = true;

  if (nombre === "")     { mostrarError("cot-nombre",      "Campo vacío"); valido = false; }
  if (email === "")      { mostrarError("cot-email",       "Campo vacío"); valido = false; }
  if (servicio === "")   { mostrarError("cot-servicio",    "Campo vacío"); valido = false; }
  if (presupuesto === "") { mostrarError("cot-presupuesto", "Campo vacío"); valido = false; }
  if (descripcion === "") { mostrarError("cot-descripcion", "Campo vacío"); valido = false; }
  if (plazo === "")      { mostrarError("cot-plazo-group", "Campo vacío"); valido = false; }

  if (!valido) return;

  console.log("Nombre:",      nombre);
  console.log("Email:",       email);
  console.log("Servicio:",    servicio);
  console.log("Presupuesto:", presupuesto);
  console.log("Plazo:",       plazo);
  console.log("Descripción:", descripcion);

  const resumen = document.createElement("div");
  resumen.style.cssText =
    "background:#f0f4ff; border-left:4px solid #0000FF; border-radius:8px;" +
    "padding:16px 20px; margin-top:20px; font-size:0.9rem; color:#333;";

  const tituloResumen = document.createElement("p");
  tituloResumen.textContent = "Resumen de tu solicitud:";
  tituloResumen.style.cssText = "font-weight:700; margin-bottom:10px; color:#0000FF;";

  const campos = [
    { etiqueta: "Nombre",      valor: nombre },
    { etiqueta: "Email",       valor: email },
    { etiqueta: "Servicio",    valor: servicio },
    { etiqueta: "Presupuesto", valor: presupuesto },
    { etiqueta: "Plazo",       valor: plazo },
    { etiqueta: "Descripci\u00f3n", valor: descripcion },
  ];

  campos.forEach(function (c) {
    const fila = document.createElement("p");
    fila.style.margin = "4px 0";
    const etiqueta = document.createElement("strong");
    etiqueta.textContent = c.etiqueta + ": ";
    fila.appendChild(etiqueta);
    fila.appendChild(document.createTextNode(c.valor));
    resumen.appendChild(fila);
  });

  resumen.insertBefore(tituloResumen, resumen.firstChild);

  const formulario = document.getElementById("form-cotizacion");
  formulario.parentNode.insertBefore(resumen, formulario.nextSibling);

  formulario.reset();
  contadorChars.textContent = "0";

  const mensajeExito = document.createElement("div");
  mensajeExito.textContent = "\u2705 Env\u00edo de formulario exitoso.";
  mensajeExito.style.cssText =
    "background:#d4edda; color:#155724; border:1px solid #c3e6cb; border-radius:8px;" +
    "padding:16px 20px; margin-top:16px; font-weight:700; font-size:1rem; text-align:center;";

  resumen.parentNode.insertBefore(mensajeExito, resumen.nextSibling);
  mensajeExito.scrollIntoView({ behavior: "smooth", block: "center" });
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
