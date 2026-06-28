// ============================================================
//  SECCIÓN SERVICIOS — Manipulación del DOM y Manejo de Eventos
// ============================================================

// ── 1. Datos extendidos de cada servicio ────────────────────
// Se corresponden con el orden de las cards en el HTML
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

// ── 2. Selección de nodos del DOM ────────────────────────────
// Obtenemos todas las cards de la sección de servicios
const seccionServicios = document.querySelector("#servicios");
const cards = seccionServicios.querySelectorAll(".card");
const botonesVerMas = seccionServicios.querySelectorAll(".card .btn");

// ── 3. Enriquecer cada card con datos extendidos via DOM ─────
// Añadimos el icono y la categoría a cada card sin alterar lo existente
cards.forEach(function (card, indice) {
  const datos = serviciosData[indice];

  // 3.a  Insertar badge de categoría en la parte superior de la card
  const badge = document.createElement("span");
  badge.textContent = datos.icono + " " + datos.categoria;
  badge.style.cssText =
    "position:absolute; top:10px; left:10px; background:#0000FF; color:#fff;" +
    "font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:20px;" +
    "letter-spacing:0.5px; z-index:2; box-shadow:0 2px 6px rgba(0,0,255,0.3);";

  // La card necesita position:relative para que el badge se posicione dentro
  card.style.position = "relative";
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  card.insertBefore(badge, card.firstChild);

  // 3.b  Actualizar el botón para que NO navegue directamente,
  //      sino que abra el modal con detalle del servicio
  const boton = botonesVerMas[indice];
  boton.removeAttribute("href");         // quitamos el href estático
  boton.style.cursor = "pointer";

  // Guardamos el índice como atributo personalizado (data attribute)
  boton.setAttribute("data-servicio-id", indice);
});

// ── 4. Manejo de Eventos: hover en las cards ─────────────────
cards.forEach(function (card) {
  // Evento mouseenter → elevar la card
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
    this.style.boxShadow = "0 12px 32px rgba(0, 0, 255, 0.18)";
  });

  // Evento mouseleave → restaurar estado normal
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "";
  });
});

// ── 5. Crear el Modal via DOM (manipulación del DOM) ─────────
// El modal se genera completamente desde JavaScript
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

// Inyectar animación de entrada con un <style> creado por JS
const estiloModal = document.createElement("style");
estiloModal.textContent =
  "@keyframes modalEntrada {" +
  "  from { opacity:0; transform:scale(0.85) translateY(30px); }" +
  "  to   { opacity:1; transform:scale(1)    translateY(0);     }" +
  "}";
document.head.appendChild(estiloModal);

// Botón de cierre del modal
const btnCerrar = document.createElement("button");
btnCerrar.textContent = "✕";
btnCerrar.style.cssText =
  "position:absolute; top:14px; right:18px; background:none; border:none;" +
  "font-size:1.4rem; cursor:pointer; color:#555; line-height:1;";
btnCerrar.setAttribute("aria-label", "Cerrar modal");

// Contenido dinámico del modal (se llenará al abrir)
const modalContenido = document.createElement("div");
modalContenido.id = "modal-contenido";

// Ensamblar el modal en el DOM
modalCaja.appendChild(btnCerrar);
modalCaja.appendChild(modalContenido);
overlay.appendChild(modalCaja);
document.body.appendChild(overlay);

// ── 6. Funciones para abrir y cerrar el modal ────────────────
function abrirModal(indice) {
  const datos = serviciosData[indice];

  // Construir contenido del modal via DOM
  modalContenido.innerHTML = "";          // limpiar contenido anterior

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

  // Hover en el botón del modal
  btnContactar.addEventListener("mouseenter", function () {
    this.style.background = "#0000cc";
  });
  btnContactar.addEventListener("mouseleave", function () {
    this.style.background = "#0000FF";
  });

  // Cerrar modal al hacer clic en "Contáctanos"
  btnContactar.addEventListener("click", function () {
    cerrarModal();
  });

  // Agregar todos los elementos al modal
  modalContenido.appendChild(encabezado);
  modalContenido.appendChild(descripcionModal);
  modalContenido.appendChild(subtitulo);
  modalContenido.appendChild(lista);
  modalContenido.appendChild(btnContactar);

  // Mostrar overlay
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";   // bloquear scroll de fondo
}

function cerrarModal() {
  overlay.style.display = "none";
  document.body.style.overflow = "";         // restaurar scroll
}

// ── 7. Manejo de Eventos: abrir modal al hacer clic en "Saber más" ──
botonesVerMas.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const id = parseInt(this.getAttribute("data-servicio-id"), 10);
    abrirModal(id);
  });
});

// ── 8. Manejo de Eventos: cerrar el modal ───────────────────
// Clic en la "X"
btnCerrar.addEventListener("click", cerrarModal);

// Clic fuera del cuadro del modal (en el overlay)
overlay.addEventListener("click", function (evento) {
  if (evento.target === overlay) {
    cerrarModal();
  }
});

// Tecla Escape para cerrar el modal
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

// ── 9. Animación de entrada con IntersectionObserver ─────────
// Cada card aparece con fadeIn cuando entra al viewport
const observer = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = "1";
        entrada.target.style.transform = "translateY(0)";
        observer.unobserve(entrada.target);   // dejar de observar después de animarse
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(function (card) {
  // Estado inicial antes de que el observer las active
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease";
  observer.observe(card);
});
