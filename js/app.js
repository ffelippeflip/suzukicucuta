// Lógica principal de la aplicación - Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander)
// Guiada en la estructura de suzukimotordecolombiamedellin.com

const state = {
  selectedCategory: "todas",
  searchQuery: "",
  sortBy: "destacadas",
  selectedColors: {}, // bikeId -> colorIndex
  compareList: ["v-strom-250-sx", "gixxer-fi-150-abs", "dr-150-abs"], // Las 3 destacadas listas para comparar
  activeSpecBikeId: null,
  activeSpecTab: "todas",
  activeLocationId: "sede-cucuta"
};

const OFFICIAL_WHATSAPP = "573143826181";

// Logo oficial de WhatsApp en SVG
function whatsappLogoSvg(classes = "w-4 h-4") {
  return `<svg class="${classes} fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.461 3.484 1.336 5.008L2 22l5.164-1.352c1.477.805 3.141 1.234 4.867 1.234 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.82 14.125c-.242.68-1.414 1.305-1.953 1.383-.508.07-1.148.102-1.859-.125-.438-.141-.992-.328-1.695-.633-2.969-1.281-4.906-4.273-5.055-4.477-.148-.195-1.211-1.609-1.211-3.07 0-1.461.766-2.18 1.039-2.477.273-.297.594-.375.797-.375.195 0 .398.008.57.016.18.008.422-.07.664.508.242.586.828 2.016.898 2.164.07.148.117.32.023.516-.094.195-.141.32-.289.492-.148.172-.313.383-.445.516-.148.148-.305.313-.133.609.172.297.766 1.266 1.648 2.047 1.133 1.008 2.086 1.32 2.383 1.469.297.148.469.125.641-.078.172-.195.742-.867.938-1.164.195-.297.398-.242.664-.148.273.094 1.719.813 2.016.961.297.148.492.219.563.344.07.125.07.719-.172 1.398z"/>
  </svg>`;
}

// Cintilla negra interactiva y movible de tecnologías Suzuki (SEP, SOCS, S.I.R.S., ABS Bosch, Easy Start, ECSTAR, Euro 3 / Euro 5)
function renderMovableTechStrip() {
  const badgesHtml = `
    <!-- 1. SEP Suzuki Eco Performance -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="bg-white rounded-md px-3.5 py-1 border-2 border-white shadow flex flex-col items-center">
        <span class="bg-[#003399] text-white text-[11px] font-black italic tracking-widest px-2.5 py-0.5 rounded-sm leading-none">SUZUKI</span>
        <span class="text-[#003399] text-[10px] font-black italic tracking-wider leading-none mt-0.5">ECO PERFORMANCE</span>
      </div>
    </div>

    <!-- 2. SOCS Suzuki Oil Cooling System -->
    <div class="flex flex-col items-center justify-center px-7 py-2 shrink-0 select-none">
      <span class="text-2xl sm:text-3xl font-black italic tracking-tighter text-sky-400 leading-none font-heading">SOCS</span>
      <span class="text-[9px] font-extrabold tracking-[0.2em] text-zinc-400 uppercase mt-0.5">OIL COOLING SYSTEM</span>
    </div>

    <!-- 3. S.I.R.S. Suzuki Intelligent Ride System -->
    <div class="flex flex-col items-center justify-center px-7 py-2 shrink-0 select-none">
      <span class="text-xl sm:text-2xl font-black italic tracking-wider text-amber-400 leading-none font-heading">S.I.R.S.</span>
      <span class="text-[9px] font-extrabold tracking-[0.18em] text-zinc-400 uppercase mt-0.5">INTELLIGENT RIDE SYSTEM</span>
    </div>

    <!-- 4. ABS SYSTEM -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="border-2 border-[#E30613] bg-[#E30613]/15 px-3.5 py-1 rounded-full">
        <span class="text-white font-black italic text-sm tracking-widest">ABS BOSCH</span>
      </div>
    </div>

    <!-- 5. FUEL INJECTION -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="bg-[#003399] border-2 border-sky-400 rounded-md px-3.5 py-1 -skew-x-12 shadow">
        <span class="text-white font-black italic text-sm sm:text-base tracking-wider leading-none block">FUEL INJECTION</span>
      </div>
    </div>

    <!-- 6. SUZUKI EASY START -->
    <div class="flex items-center gap-2.5 px-7 py-2 shrink-0 select-none">
      <div class="border-2 border-zinc-400 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
        <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
        <span class="text-[10px] font-black text-white">START</span>
      </div>
      <div class="leading-none text-left">
        <span class="block text-xs font-extrabold text-zinc-200">Suzuki Easy</span>
        <span class="block text-xs font-extrabold text-zinc-400">Start System</span>
      </div>
    </div>

    <!-- 7. ECSTAR LUBRICANTE OFICIAL -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="border border-amber-500/60 bg-amber-950/40 px-3.5 py-1 rounded-lg flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
        <span class="text-amber-300 font-black italic text-xs tracking-wider">ECSTAR GENUINE OIL</span>
      </div>
    </div>

    <!-- 8. EURO 3 / EURO 5 -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="bg-[#22A91E] border-2 border-white rounded-md px-3.5 py-1 -skew-x-12 shadow">
        <span class="text-white font-black italic text-sm sm:text-base tracking-wider leading-none block">EURO 3 / EURO 5</span>
      </div>
    </div>
  `;

  return `
    <div class="bg-black border-y border-zinc-800 relative group no-print">
      <button
        type="button"
        onclick="scrollTechStrip(-260)"
        title="Mover a la izquierda"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900/90 hover:bg-[#E30613] text-white border border-zinc-700 flex items-center justify-center opacity-80 group-hover:opacity-100 transition shadow-lg">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>

      <div id="activeTechStripWrapper" class="tech-strip-wrapper py-3.5 px-10" title="Arrastra con el mouse o toca para mover">
        <div class="tech-strip-track">
          ${badgesHtml}
          ${badgesHtml}
        </div>
      </div>

      <button
        type="button"
        onclick="scrollTechStrip(260)"
        title="Mover a la derecha"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900/90 hover:bg-[#E30613] text-white border border-zinc-700 flex items-center justify-center opacity-80 group-hover:opacity-100 transition shadow-lg">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

function scrollTechStrip(delta) {
  const wrapper = document.getElementById("activeTechStripWrapper");
  if (!wrapper) return;
  wrapper.classList.add("is-dragging");
  wrapper.scrollBy({ left: delta, behavior: "smooth" });
  setTimeout(() => wrapper.classList.remove("is-dragging"), 1200);
}

function enableTechStripDrag() {
  const slider = document.getElementById("activeTechStripWrapper");
  if (!slider) return;
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("is-dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("is-dragging");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("is-dragging");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener(
    "touchstart",
    () => {
      slider.classList.add("is-dragging");
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchend",
    () => {
      setTimeout(() => slider.classList.remove("is-dragging"), 1200);
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchcancel",
    () => {
      slider.classList.remove("is-dragging");
    },
    { passive: true }
  );
}

// Formateador de moneda Peso Colombiano (COP)
function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

// Codificar rutas de imágenes
function safeImgUrl(path) {
  if (!path) return "";
  return path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

// Calcular cuota mensual aproximada
function estimateMonthlyPayment(price, downPaymentPercent = 15, months = 48) {
  const principal = price * (1 - downPaymentPercent / 100);
  const monthlyRate = 0.0165;
  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(payment / 1000) * 1000;
}

// Inyectar catálogo completo de las 29 motos en Schema.org JSON-LD para posicionamiento exclusivo en Cúcuta y Norte de Santander
function injectCatalogSeoSchema() {
  if (!Array.isArray(SUZUKI_BIKES)) return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo Oficial de Motocicletas Suzuki en Cúcuta — Suzuki Cúcuta",
    "description": `Precios oficiales, colores y fichas técnicas de las ${SUZUKI_BIKES.length} motocicletas Suzuki en Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander).`,
    "numberOfItems": SUZUKI_BIKES.length,
    "itemListElement": SUZUKI_BIKES.map((bike, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Suzuki ${bike.name} en Cúcuta`,
        "description": `${bike.description} Disponible en Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander).`,
        "brand": {
          "@type": "Brand",
          "name": "Suzuki"
        },
        "category": bike.categoryLabel,
        "sku": `SUZ-CUC-${bike.id.toUpperCase()}`,
        "image": `https://suzukicucuta.com.co/${safeImgUrl(bike.colors[0]?.image || bike.bannerImage)}`,
        "offers": {
          "@type": "Offer",
          "url": `https://suzukicucuta.com.co/#catalogo-motos`,
          "priceCurrency": "COP",
          "price": bike.price,
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "areaServed": {
            "@type": "City",
            "name": "Cúcuta, Norte de Santander"
          },
          "seller": {
            "@type": "MotorcycleDealer",
            "name": "Suzuki Cúcuta",
            "address": "Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander"
          }
        }
      }
    }))
  };

  const scriptEl = document.createElement("script");
  scriptEl.type = "application/ld+json";
  scriptEl.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptEl);
}

function refreshIcons(rootEl) {
  if (!window.lucide) return;
  try {
    if (rootEl) {
      window.lucide.createIcons({ root: rootEl });
    } else {
      window.lucide.createIcons();
    }
  } catch (_) {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initDefaultColors();
  renderFeaturedBikes();
  renderCategoryTabs();
  renderBikeCatalog();
  updateCompareBar();
  renderTestimonials();
  renderRecommendations();
  renderBlogPosts();
  renderFaqs();
  renderLocationCard();
  initCreditSimulator();
  initNavbarEvents();
  initHeroVideo();
  refreshIcons();

  const scheduleIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 120));
  scheduleIdle(() => {
    injectCatalogSeoSchema();
  });
});

function closeEntryPromoModal() {
  const modal = document.getElementById("entryPromoModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function initHeroVideo() {
  const video = document.getElementById("heroBgVideo");
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const tryPlay = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resumeOnInteraction = () => {
          video.muted = true;
          video.play().catch(() => {});
        };
        document.addEventListener("touchstart", resumeOnInteraction, { once: true, passive: true });
        document.addEventListener("click", resumeOnInteraction, { once: true, passive: true });
      });
    }
  };

  tryPlay();

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && video.paused) {
      tryPlay();
    }
  });
}

function initDefaultColors() {
  SUZUKI_BIKES.forEach((bike) => {
    state.selectedColors[bike.id] = 0;
  });
}

// ==========================================
// 1. MOTOCICLETAS DESTACADAS (GIXXER 250, V-STROM 250 SX, DR 150 ABS)
// ==========================================
function renderFeaturedBikes() {
  const container = document.getElementById("featuredBikesGrid");
  if (!container) return;

  const featured = FEATURED_BIKE_IDS.map((id) => SUZUKI_BIKES.find((b) => b.id === id)).filter(Boolean);

  container.innerHTML = featured
    .map((bike) => {
      const colorIdx = state.selectedColors[bike.id] || 0;
      const activeColor = bike.colors[colorIdx] || bike.colors[0];

      return `
      <article data-featured-card="${bike.id}" class="bike-card bg-white rounded-3xl border-2 border-[#003399]/20 shadow-xl overflow-hidden flex flex-col justify-between relative group">
        <div>
          <!-- Banner superior de la ficha -->
          <div class="relative h-28 bg-suzuki-gradient overflow-hidden cursor-pointer" onclick="openSpecModal('${bike.id}')">
            <img src="${safeImgUrl(activeColor.image)}" alt="Banner ${bike.name}" width="420" height="128" decoding="async" class="w-full h-full object-contain opacity-25 scale-125 group-hover:scale-150 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="bg-[#E30613] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                ★ DESTACADA SUZUKI CÚCUTA
              </span>
            </div>
            <div class="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
              <span class="text-xs font-bold uppercase tracking-widest text-sky-400">${bike.categoryLabel}</span>
              <span class="text-xs font-extrabold bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-full">${bike.displacement} cc</span>
            </div>
          </div>

          <!-- Foto del color seleccionado sobre fondo de puntos -->
          <div class="relative h-60 bg-dot-pattern flex items-center justify-center p-3 cursor-pointer border-b border-slate-100" onclick="openSpecModal('${bike.id}')">
            <img data-role="bike-img" src="${safeImgUrl(activeColor.image)}" alt="Suzuki ${bike.name} - ${activeColor.name}" width="360" height="230" decoding="async" class="bike-img max-h-56 w-auto object-contain mx-auto drop-shadow-md" />
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="text-2xl font-extrabold text-slate-900 font-heading tracking-wide cursor-pointer hover:text-[#003399] transition" onclick="openSpecModal('${bike.id}')">
                  SUZUKI ${bike.name}
                </h3>
                <p class="text-xs text-slate-500 font-medium">Color activo: <strong data-role="color-name" class="text-slate-800">${activeColor.name}</strong></p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold uppercase text-slate-400 block">Precio Lista*</span>
                <span class="text-2xl font-extrabold text-[#E30613] font-heading">${formatCOP(bike.price)}</span>
              </div>
            </div>

            <!-- Selector de Colores Interactivo -->
            <div class="flex items-center justify-between bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80 mb-4">
              <span class="text-xs font-bold text-slate-600">Elige color:</span>
              <div class="flex items-center gap-2">
                ${bike.colors
                  .map(
                    (c, idx) => `
                  <button
                    type="button"
                    data-color-btn="${idx}"
                    onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                    title="${c.name}"
                    aria-label="Color ${c.name}"
                    class="w-6 h-6 rounded-full border transition-transform ${
                      idx === colorIdx
                        ? "ring-2 ring-[#003399] ring-offset-2 scale-110 border-slate-500"
                        : "border-slate-300 hover:scale-110"
                    }"
                    style="background-color: ${c.hex}">
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Mini especificaciones -->
            <div class="grid grid-cols-3 gap-2 text-center bg-slate-900 text-white rounded-xl p-3 mb-4">
              <div>
                <span class="text-[10px] uppercase text-slate-400 block">Cilindraje</span>
                <span class="text-xs font-extrabold">${bike.displacement} cc</span>
              </div>
              <div class="border-x border-white/10">
                <span class="text-[10px] uppercase text-slate-400 block">Peso</span>
                <span class="text-xs font-extrabold">${bike.weight}</span>
              </div>
              <div>
                <span class="text-[10px] uppercase text-slate-400 block">Potencia</span>
                <span class="text-xs font-extrabold">${bike.power.split("@")[0].trim()}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 pt-0 grid grid-cols-2 gap-2.5">
          <button
            onclick="openSpecModal('${bike.id}')"
            class="py-3 px-4 rounded-xl bg-[#003399] hover:bg-blue-900 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow">
            <i data-lucide="file-spreadsheet" class="w-4 h-4 text-sky-300"></i>
            Ver Ficha Técnica
          </button>
          <button
            onclick="quoteBikeWhatsApp('${bike.id}')"
            class="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow-md">
            ${whatsappLogoSvg("w-4 h-4")}
            Cotizar Ahora
          </button>
        </div>
      </article>
    `;
    })
    .join("");
}

// ==========================================
// 2. PESTAÑAS DE CATEGORÍAS Y CATÁLOGO COMPLETO
// ==========================================
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsContainer");
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat) => {
    const count =
      cat.id === "todas"
        ? SUZUKI_BIKES.length
        : SUZUKI_BIKES.filter((b) => b.category === cat.id).length;
    const isSelected = state.selectedCategory === cat.id;

    return `
      <button
        onclick="setCategoryFilter('${cat.id}')"
        data-category="${cat.id}"
        class="category-tab-btn shrink-0 whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
          isSelected
            ? "bg-[#003399] text-white shadow-md shadow-blue-900/25"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
        }">
        <span>${cat.name}</span>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
          isSelected ? "bg-white/20 text-white" : "bg-white text-slate-600"
        }">${count}</span>
      </button>
    `;
  }).join("");
}

function setCategoryFilter(category) {
  state.selectedCategory = category;
  renderCategoryTabs();
  renderBikeCatalog();
  const activeBtn = document.querySelector(`.category-tab-btn[data-category="${category}"]`);
  if (activeBtn && window.innerWidth < 640) {
    activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

let searchDebounceTimer = null;
function handleCatalogSearch(value) {
  const cleanValue = String(value || "")
    .replace(/[<>"'`\\]/g, "")
    .slice(0, 80)
    .trim()
    .toLowerCase();
  state.searchQuery = cleanValue;
  if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    renderBikeCatalog();
  }, 85);
}

function handleCatalogSort(value) {
  state.sortBy = value;
  renderBikeCatalog();
}

function updateCardColorInPlace(cardEl, bike, colorIndex) {
  if (!cardEl || !bike) return;
  const activeColor = bike.colors[colorIndex] || bike.colors[0];
  const imgEl = cardEl.querySelector('[data-role="bike-img"]');
  if (imgEl) {
    imgEl.src = safeImgUrl(activeColor.image);
    imgEl.alt = `Suzuki ${bike.name} color ${activeColor.name} en Cúcuta`;
  }
  const nameEl = cardEl.querySelector('[data-role="color-name"]');
  if (nameEl) {
    nameEl.textContent = activeColor.name;
  }
  const dotEl = cardEl.querySelector('[data-role="color-dot"]');
  if (dotEl) {
    dotEl.style.backgroundColor = activeColor.hex;
  }
  cardEl.querySelectorAll("[data-color-btn]").forEach((btn) => {
    const idx = Number(btn.getAttribute("data-color-btn"));
    if (idx === colorIndex) {
      btn.className = btn.className
        .replace("border-slate-300 hover:scale-110", "")
        .trim() + " ring-2 ring-[#003399] ring-offset-2 scale-110 border-slate-500";
    } else {
      btn.className = btn.className
        .replace("ring-2 ring-[#003399] ring-offset-2 scale-110 border-slate-500", "")
        .trim() + " border-slate-300 hover:scale-110";
    }
  });
}

function selectBikeColor(bikeId, colorIndex, event) {
  if (event) event.stopPropagation();
  state.selectedColors[bikeId] = colorIndex;
  const bike = SUZUKI_BIKES.find((b) => b.id === bikeId);
  if (bike) {
    const featCard = document.querySelector(`[data-featured-card="${bikeId}"]`);
    const catCard = document.querySelector(`[data-catalog-card="${bikeId}"]`);
    if (featCard || catCard) {
      updateCardColorInPlace(featCard, bike, colorIndex);
      updateCardColorInPlace(catCard, bike, colorIndex);
    } else {
      renderFeaturedBikes();
      renderBikeCatalog();
    }
  }
  if (state.activeSpecBikeId === bikeId) {
    openSpecModal(bikeId, state.activeSpecTab);
  }
}

function getFilteredBikes() {
  let list = [...SUZUKI_BIKES];

  if (state.selectedCategory !== "todas") {
    list = list.filter((b) => b.category === state.selectedCategory);
  }

  if (state.searchQuery) {
    list = list.filter(
      (b) =>
        b.name.toLowerCase().includes(state.searchQuery) ||
        b.categoryLabel.toLowerCase().includes(state.searchQuery) ||
        String(b.displacement).includes(state.searchQuery)
    );
  }

  if (state.sortBy === "precio-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "precio-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "cilindraje-desc") {
    list.sort((a, b) => b.displacement - a.displacement);
  } else if (state.sortBy === "destacadas") {
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return list;
}

function renderBikeCatalog() {
  const grid = document.getElementById("bikesGrid");
  const countEl = document.getElementById("bikesCount");
  if (!grid) return;

  const filtered = getFilteredBikes();
  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${SUZUKI_BIKES.length} motocicletas oficiales en Suzuki Cúcuta`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-[#003399]">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">No encontramos motocicletas con ese criterio</h3>
        <p class="text-slate-600 mb-6">Prueba buscando otra referencia (ej. Gixxer, V-Strom, DR 150, GN 125, Viva, Burgman, Hayabusa) o muestra todas las categorías.</p>
        <button onclick="resetCatalogFilters()" class="px-6 py-2.5 bg-[#003399] hover:bg-blue-900 text-white font-bold rounded-xl transition">
          Ver las ${SUZUKI_BIKES.length} Motocicletas Suzuki
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered
    .map((bike) => {
      const selectedColorIdx = state.selectedColors[bike.id] || 0;
      const activeColor = bike.colors[selectedColorIdx] || bike.colors[0];
      const isCompared = state.compareList.includes(bike.id);
      const monthlyEst = estimateMonthlyPayment(bike.price);

      return `
      <article data-catalog-card="${bike.id}" class="bike-card bg-white rounded-2xl border ${
        bike.featured ? "border-[#003399]/50 ring-1 ring-[#003399]/20" : "border-slate-200"
      } overflow-hidden flex flex-col justify-between relative group">
        <div>
          <!-- Encabezado con Foto del Modelo por Color sobre Fondo de Puntos -->
          <div class="relative h-60 bg-dot-pattern overflow-hidden cursor-pointer border-b border-slate-100 flex items-center justify-center p-3" onclick="openSpecModal('${bike.id}')">
            <img
              data-role="bike-img"
              src="${safeImgUrl(activeColor.image)}"
              alt="Suzuki ${bike.name} color ${activeColor.name} en Cúcuta"
              width="340"
              height="220"
              decoding="async"
              class="bike-img relative z-10 max-h-52 w-auto object-contain mx-auto drop-shadow-md"
              loading="lazy" />

            <div class="absolute top-2.5 left-3 z-20 flex items-center gap-1.5">
              <span class="${bike.badgeColor} text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                ${bike.badge}
              </span>
            </div>

            <button
              type="button"
              onclick="toggleCompareBike('${bike.id}', event)"
              title="Comparar ficha técnica"
              class="absolute top-2.5 right-3 z-20 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
                isCompared
                  ? "bg-[#E30613] text-white shadow-md"
                  : "bg-white/95 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 shadow-sm"
              }">
              <i data-lucide="${isCompared ? "check-square" : "git-compare"}" class="w-3.5 h-3.5"></i>
              ${isCompared ? "Comparando" : "Comparar"}
            </button>
          </div>

          <div class="p-5">
            <div class="flex items-start justify-between gap-2 mb-3">
              <div>
                <span class="text-[11px] font-extrabold text-[#003399] uppercase tracking-wider block">${bike.categoryLabel}</span>
                <h3 class="text-2xl font-extrabold text-slate-900 font-heading tracking-wide cursor-pointer hover:text-[#003399] transition" onclick="openSpecModal('${bike.id}')">
                  ${bike.name}
                </h3>
              </div>
              <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                <span data-role="color-dot" class="w-2.5 h-2.5 rounded-full border border-slate-400" style="background-color: ${activeColor.hex}"></span>
                <span data-role="color-name">${activeColor.name}</span>
              </span>
            </div>

            <!-- Selector de colores -->
            <div class="flex items-center justify-between mb-4 py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
              <span class="text-xs font-semibold text-slate-500">Colores (${bike.colors.length}):</span>
              <div class="flex items-center gap-2">
                ${bike.colors
                  .map(
                    (c, idx) => `
                  <button
                    type="button"
                    data-color-btn="${idx}"
                    onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                    title="Ver en color ${c.name}"
                    aria-label="Color ${c.name}"
                    class="w-5 h-5 rounded-full border transition-transform ${
                      idx === selectedColorIdx
                        ? "ring-2 ring-[#003399] ring-offset-2 scale-110 border-slate-500"
                        : "border-slate-300 hover:scale-110"
                    }"
                    style="background-color: ${c.hex}">
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Cuadrícula de Resumen de Ficha Técnica -->
            <div class="grid grid-cols-2 gap-2 mb-4 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100 text-xs">
              <div class="flex items-center gap-2">
                <i data-lucide="gauge" class="w-4 h-4 text-[#E30613] shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Cilindraje</span>
                  <span class="font-bold text-slate-800">${bike.displacement} cc</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="scale" class="w-4 h-4 text-[#003399] shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Peso</span>
                  <span class="font-bold text-slate-800">${bike.weight}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="zap" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Potencia</span>
                  <span class="font-bold text-slate-800 truncate block max-w-[115px]">${bike.power.split("@")[0].trim()}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Seguridad</span>
                  <span class="font-bold text-slate-800 truncate block max-w-[115px]">${bike.abs}</span>
                </div>
              </div>
            </div>

            <!-- Precio Oficial -->
            <div class="flex items-baseline justify-between pt-1 border-t border-slate-100">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase block">Precio Oficial*</span>
                <span class="text-2xl font-extrabold text-slate-900 font-heading">${formatCOP(bike.price)}</span>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 block">
                  Desde ${formatCOP(monthlyEst)}/mes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 pb-5 pt-0 grid grid-cols-2 gap-2.5">
          <button
            onclick="openSpecModal('${bike.id}')"
            class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-900 hover:bg-[#003399] text-white transition shadow-sm">
            <i data-lucide="file-spreadsheet" class="w-4 h-4 text-sky-400"></i>
            Ficha Técnica
          </button>
          <button
            onclick="quoteBikeWhatsApp('${bike.id}')"
            class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white transition shadow-sm">
            ${whatsappLogoSvg("w-4 h-4")}
            Cotizar
          </button>
        </div>
      </article>
    `;
    })
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function resetCatalogFilters() {
  state.searchQuery = "";
  state.sortBy = "destacadas";
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) sortSelect.value = "destacadas";
  setCategoryFilter("todas");
}

// ==========================================
// 3. MODAL DE FICHA TÉCNICA CON BANNER + CINTILLA MOVIBLE DE TECNOLOGÍAS SUZUKI
// ==========================================
function openSpecModal(bikeId, tab = "todas") {
  const bike = SUZUKI_BIKES.find((b) => b.id === bikeId);
  if (!bike) return;

  state.activeSpecBikeId = bikeId;
  state.activeSpecTab = tab;

  const modal = document.getElementById("specModal");
  const container = document.getElementById("specModalBody");
  if (!modal || !container) return;

  const selectedColorIdx = state.selectedColors[bike.id] || 0;
  const activeColor = bike.colors[selectedColorIdx] || bike.colors[0];
  const monthlyEst = estimateMonthlyPayment(bike.price);

  const renderSpecRows = (obj) =>
    Object.entries(obj)
      .map(
        ([key, val], idx) => `
      <tr class="${idx % 2 === 0 ? "bg-slate-50/90" : "bg-white"} border-b border-slate-100">
        <td class="py-3.5 px-5 text-xs sm:text-sm font-bold text-slate-600 w-2/5">${key}</td>
        <td class="py-3.5 px-5 text-xs sm:text-sm font-extrabold text-slate-900">${val}</td>
      </tr>
    `
      )
      .join("");

  container.innerHTML = `
    <!-- 1. Cinta Superior con Logo Suzuki Cúcuta -->
    <div class="bg-white px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200 flex items-center justify-between">
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <img src="assets/logo-header.svg" alt="Suzuki Logo" class="h-7 sm:h-9 w-auto object-contain shrink-0" />
        <span class="h-5 sm:h-6 w-px bg-slate-200 shrink-0"></span>
        <div class="whitespace-nowrap leading-tight">
          <span class="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            SUZUKI <span class="text-[#E30613]">CÚCUTA</span>
          </span>
          <span class="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander
          </span>
        </div>
      </div>
      <div class="hidden sm:flex items-center gap-2 pr-12 shrink-0">
        <img src="motos/euro3-suzuki-badge.svg" alt="SEP Euro 3" class="h-8 w-auto object-contain" />
      </div>
    </div>

    <!-- 2. BANNER OFICIAL DE LA FICHA DE LA MOTOCICLETA -->
    <div class="relative w-full h-56 sm:h-80 bg-suzuki-gradient overflow-hidden flex items-center justify-center p-4">
      <img
        src="${safeImgUrl(activeColor.image)}"
        alt="Banner Oficial Ficha Técnica Suzuki ${bike.name}"
        class="max-h-48 sm:max-h-72 w-auto object-contain drop-shadow-2xl opacity-95" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"></div>
      <div class="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-white">
        <div>
          <span class="${bike.badgeColor} text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-lg inline-block mb-1 sm:mb-2">
            ${bike.categoryLabel} • ${bike.badge}
          </span>
          <h2 class="text-2xl sm:text-5xl font-extrabold font-heading tracking-wide drop-shadow-lg leading-none">
            SUZUKI ${bike.name}
          </h2>
        </div>
        <div class="bg-black/80 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/15 sm:text-right self-start sm:self-auto">
          <span class="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 block font-bold">Precio Lista Oficial*</span>
          <span class="text-xl sm:text-4xl font-extrabold text-white font-heading">${formatCOP(bike.price)}</span>
          <span class="text-[11px] sm:text-xs text-emerald-400 block font-bold">Financiación desde ${formatCOP(monthlyEst)}/mes</span>
        </div>
      </div>
    </div>

    <!-- 2.5 CINTILLA NEGRA MOVIBLE DE TECNOLOGÍAS SUZUKI -->
    ${renderMovableTechStrip()}

    <!-- 3. SECCIÓN INTERACTIVA: FOTO POR COLOR + ESPECIFICACIONES PRINCIPALES -->
    <div class="p-6 sm:p-8 bg-white border-b border-slate-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Visor de Color Interactivo -->
        <div class="lg:col-span-6 bg-dot-pattern rounded-3xl p-6 border border-slate-200/80 text-center relative">
          <span class="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            Color: <strong class="text-slate-900">${activeColor.name}</strong>
          </span>

          <div class="h-64 sm:h-72 flex items-center justify-center my-4">
            <img
              src="${safeImgUrl(activeColor.image)}"
              alt="Suzuki ${bike.name} en color ${activeColor.name}"
              class="max-h-64 sm:max-h-72 w-auto object-contain mx-auto drop-shadow-xl transition-all duration-300" />
          </div>

          <!-- Botones de selección de color -->
          <div class="pt-3 border-t border-slate-200/80 no-print">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              Haz clic para cambiar el color de la ${bike.name}:
            </span>
            <div class="flex flex-wrap items-center justify-center gap-2.5">
              ${bike.colors
                .map(
                  (c, idx) => `
                <button
                  onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                  class="px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                    idx === selectedColorIdx
                      ? "bg-[#003399] text-white border-[#003399] shadow-md scale-105"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  }">
                  <span class="w-4 h-4 rounded-full border border-slate-400 shrink-0" style="background-color: ${c.hex}"></span>
                  ${c.name}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Resumen de la Ficha Técnica -->
        <div class="lg:col-span-6 space-y-5">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-[#003399] block mb-1">
              INGENIERÍA JAPONESA SUZUKI • SEDE CÚCUTA
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              ESPECIFICACIONES DESTACADAS — ${bike.name}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mt-2">${bike.description}</p>
          </div>

          <!-- 4 Bloques Técnicos Principales -->
          <div class="grid grid-cols-2 gap-3.5">
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-sky-400 block">CILINDRAJE</span>
              <span class="text-xl sm:text-2xl font-extrabold font-heading">${bike.displacement} cc</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-sky-400 block">PESO EN ORDEN DE MARCHA</span>
              <span class="text-xl sm:text-2xl font-extrabold font-heading">${bike.weight}</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-sky-400 block">POTENCIA MÁXIMA</span>
              <span class="text-base sm:text-lg font-extrabold font-heading">${bike.power}</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-sky-400 block">TORQUE MÁXIMO</span>
              <span class="text-base sm:text-lg font-extrabold font-heading">${bike.torque}</span>
            </div>
          </div>

          <!-- Tecnologías -->
          <div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
              Atributos y Tecnologías Suzuki:
            </span>
            <div class="flex flex-wrap gap-2">
              ${bike.technologies
                .map(
                  (t) => `
                <span class="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50 text-[#003399] border border-blue-200 px-3 py-1.5 rounded-xl">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#E30613]"></i> ${t}
                </span>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Botones de Acción Directa -->
          <div class="pt-2 flex flex-wrap gap-3 no-print">
            <button
              onclick="quoteBikeWhatsApp('${bike.id}')"
              class="flex-1 min-w-[200px] py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition">
              ${whatsappLogoSvg("w-5 h-5")}
              Cotizar ${bike.name} (${activeColor.name}) por WhatsApp
            </button>
            <button
              onclick="loadBikeIntoSimulator('${bike.id}')"
              class="py-3.5 px-4 rounded-xl bg-[#003399] hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition">
              <i data-lucide="calculator" class="w-4 h-4"></i>
              Simular Crédito
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. PESTAÑAS DE LA TABLA DE FICHA TÉCNICA COMPLETA -->
    <div class="bg-slate-100 px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200">
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar sm:flex-wrap pb-0.5">
        <button onclick="openSpecModal('${bike.id}', 'todas')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "todas" ? "bg-[#003399] text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Ficha Técnica Completa</button>
        <button onclick="openSpecModal('${bike.id}', 'motor')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "motor" ? "bg-[#003399] text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Motor y Transmisión</button>
        <button onclick="openSpecModal('${bike.id}', 'chasis')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "chasis" ? "bg-[#003399] text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Chasis, Frenos y Suspensión</button>
        <button onclick="openSpecModal('${bike.id}', 'dimensiones')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "dimensiones" ? "bg-[#003399] text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Dimensiones y Peso</button>
      </div>
    </div>

    <!-- 5. TABLAS EXHAUSTIVAS DE ESPECIFICACIONES -->
    <div class="p-4 sm:p-8 space-y-6 bg-white safe-bottom-bar">
      ${
        tab === "todas" || tab === "motor"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="cpu" class="w-5 h-5 text-[#E30613]"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">1. Especificaciones de Motor y Transmisión</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.motor)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }

      ${
        tab === "todas" || tab === "chasis"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="disc" class="w-5 h-5 text-[#E30613]"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">2. Chasis, Suspensión, Frenos y Neumáticos</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.chasis)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }

      ${
        tab === "todas" || tab === "dimensiones"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="ruler" class="w-5 h-5 text-[#E30613]"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">3. Dimensiones, Peso y Capacidades</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.dimensiones)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  enableTechStripDrag();
  if (window.lucide) window.lucide.createIcons();
}

function closeSpecModal() {
  const modal = document.getElementById("specModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 4. COMPARADOR DE MOTOCICLETAS SUZUKI
// ==========================================
function toggleCompareBike(bikeId, event) {
  if (event) event.stopPropagation();
  const idx = state.compareList.indexOf(bikeId);
  if (idx >= 0) {
    state.compareList.splice(idx, 1);
  } else {
    if (state.compareList.length >= 3) {
      showToast("Puedes comparar hasta 3 motocicletas Suzuki al mismo tiempo.");
      return;
    }
    state.compareList.push(bikeId);
  }
  renderBikeCatalog();
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById("compareStickyBar");
  const slotsContainer = document.getElementById("compareSlots");
  if (!bar || !slotsContainer) return;

  if (state.compareList.length === 0) {
    bar.classList.add("translate-y-full");
    return;
  }

  bar.classList.remove("translate-y-full");
  const bikes = state.compareList.map((id) => SUZUKI_BIKES.find((b) => b.id === id)).filter(Boolean);

  slotsContainer.innerHTML = bikes
    .map(
      (b) => `
      <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-white">
        <span class="font-bold">${b.name}</span>
        <button onclick="toggleCompareBike('${b.id}')" class="text-slate-400 hover:text-red-400">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function openCompareModal() {
  if (state.compareList.length < 2) {
    showToast("Selecciona al menos 2 motocicletas para compararlas lado a lado.");
    return;
  }

  const modal = document.getElementById("compareModal");
  const body = document.getElementById("compareModalBody");
  if (!modal || !body) return;

  const bikes = state.compareList.map((id) => SUZUKI_BIKES.find((b) => b.id === id)).filter(Boolean);

  body.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr class="border-b border-slate-200 bg-slate-50">
            <th class="p-4 text-xs font-extrabold uppercase text-slate-500 w-1/4">Especificación</th>
            ${bikes
              .map((b) => {
                const col = b.colors[state.selectedColors[b.id] || 0] || b.colors[0];
                return `
              <th class="p-4 w-1/4 align-top">
                <div class="relative rounded-xl overflow-hidden h-36 mb-3 bg-white border border-slate-200 flex items-center justify-center p-2">
                  <img src="${safeImgUrl(col.image)}" alt="${b.name}" class="max-h-32 w-auto object-contain" />
                  <span class="absolute top-2 left-2 ${b.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${b.displacement} cc</span>
                </div>
                <h4 class="text-lg font-extrabold text-slate-900 font-heading">SUZUKI ${b.name}</h4>
                <p class="text-[#E30613] font-extrabold text-base mt-0.5">${formatCOP(b.price)}</p>
              </th>
            `;
              })
              .join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-xs sm:text-sm">
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Categoría</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.categoryLabel}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Cilindraje</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-slate-900">${b.displacement} cc</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Potencia Máxima</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.power}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Torque Máximo</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.torque}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Transmisión</td>
            ${bikes.map((b) => `<td class="p-3.5 text-slate-800">${b.transmission}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Frenos / Asistencias</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-emerald-700">${b.abs}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Peso</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-slate-900">${b.weight}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Capacidad de Combustible</td>
            ${bikes.map((b) => `<td class="p-3.5 text-slate-800">${b.fuelCapacity}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Cuota Mensual Estimada</td>
            ${bikes
              .map(
                (b) =>
                  `<td class="p-3.5 font-extrabold text-emerald-700">${formatCOP(
                    estimateMonthlyPayment(b.price)
                  )} / mes</td>`
              )
              .join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Acción</td>
            ${bikes
              .map(
                (b) => `
              <td class="p-3.5">
                <button onclick="closeCompareModal(); openSpecModal('${b.id}')" class="w-full mb-2 py-2 px-3 rounded-lg bg-[#003399] text-white text-xs font-bold hover:bg-blue-900 transition">
                  Ver Ficha Completa
                </button>
                <button onclick="quoteBikeWhatsApp('${b.id}')" class="w-full py-2 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition flex items-center justify-center gap-1.5">
                  ${whatsappLogoSvg("w-3.5 h-3.5")} Cotizar ${b.name}
                </button>
              </td>
            `
              )
              .join("")}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 5. SIMULADOR DE CRÉDITO SUZUKI CÚCUTA
// ==========================================
function initCreditSimulator() {
  const select = document.getElementById("simBikeSelect");
  if (!select) return;

  select.innerHTML = SUZUKI_BIKES.map(
    (b) => `<option value="${b.id}">Suzuki ${b.name} (${b.categoryLabel}) — ${formatCOP(b.price)}</option>`
  ).join("");

  select.value = "gixxer-250";
  updateCreditCalculation();
}

function updateCreditCalculation() {
  const select = document.getElementById("simBikeSelect");
  const downInput = document.getElementById("simDownPaymentRange");
  const monthsSelect = document.getElementById("simMonthsSelect");

  if (!select || !downInput || !monthsSelect) return;

  const bike = SUZUKI_BIKES.find((b) => b.id === select.value) || SUZUKI_BIKES[0];
  const downPercent = Number(downInput.value);
  const months = Number(monthsSelect.value);

  const downAmount = Math.round((bike.price * downPercent) / 100);
  const financedAmount = bike.price - downAmount;
  const monthlyPayment = estimateMonthlyPayment(bike.price, downPercent, months);

  document.getElementById("simDownPercentLabel").textContent = `${downPercent}% (${formatCOP(downAmount)})`;
  document.getElementById("simBikePriceLabel").textContent = formatCOP(bike.price);
  document.getElementById("simFinancedLabel").textContent = formatCOP(financedAmount);
  document.getElementById("simMonthlyResult").textContent = formatCOP(monthlyPayment);
}

function loadBikeIntoSimulator(bikeId) {
  closeSpecModal();
  const select = document.getElementById("simBikeSelect");
  if (select) {
    select.value = bikeId;
    updateCreditCalculation();
  }
  const section = document.getElementById("simulador-credito");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function sendCreditSimulationWhatsApp() {
  const select = document.getElementById("simBikeSelect");
  const downInput = document.getElementById("simDownPaymentRange");
  const monthsSelect = document.getElementById("simMonthsSelect");
  const bike = SUZUKI_BIKES.find((b) => b.id === select.value) || SUZUKI_BIKES[0];
  const downPercent = Number(downInput.value);
  const months = Number(monthsSelect.value);
  const downAmount = Math.round((bike.price * downPercent) / 100);
  const monthlyPayment = estimateMonthlyPayment(bike.price, downPercent, months);

  const msg = `¡Hola Suzuki Cúcuta! Realicé una simulación en la página web y deseo solicitar estudio de crédito para:\n\n• Motocicleta: *Suzuki ${bike.name}*\n• Precio oficial: ${formatCOP(bike.price)}\n• Cuota inicial (${downPercent}%): ${formatCOP(downAmount)}\n• Plazo deseado: ${months} meses\n• Cuota estimada: ${formatCOP(monthlyPayment)}/mes\n\n¿Me pueden indicar los requisitos para iniciar mi aprobación en la sede Av. 11 E #5 09, Br. Colsag, Cúcuta?`;

  window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ==========================================
// 6. LO QUE DICEN NUESTROS CLIENTES (TESTIMONIOS), RECOMENDACIONES Y BLOG
// ==========================================
function renderTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container || !Array.isArray(CLIENT_TESTIMONIALS)) return;

  container.innerHTML = CLIENT_TESTIMONIALS.map(
    (t) => `
    <article class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <div class="flex items-center gap-1 text-amber-400">
            ${Array.from({ length: t.rating })
              .map(() => `<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`)
              .join("")}
          </div>
          <span class="text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#003399] border border-blue-200 px-2.5 py-0.5 rounded-full">
            ${t.bike}
          </span>
        </div>
        <blockquote class="text-sm text-slate-700 leading-relaxed italic mb-5">
          "${t.quote}"
        </blockquote>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div class="w-10 h-10 rounded-full bg-[#003399] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
          ${t.name
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h4 class="text-sm font-extrabold text-slate-900">${t.name}</h4>
          <span class="text-xs text-slate-500">${t.date}</span>
        </div>
      </div>
    </article>
  `
  ).join("");
}

function renderRecommendations() {
  const container = document.getElementById("recommendationsGrid");
  if (!container) return;

  container.innerHTML = RECOMMENDATIONS.map(
    (item) => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.tagColor}">
            ${item.tag}
          </span>
          <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
            <i data-lucide="${item.icon}" class="w-5 h-5 text-[#E30613]"></i>
          </div>
        </div>
        <h3 class="text-xl font-extrabold text-slate-900 mb-2">${item.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${item.description}</p>
      </div>
      <ul class="space-y-2 pt-3 border-t border-slate-100">
        ${item.points
          .map(
            (pt) => `
          <li class="flex items-start gap-2 text-xs font-medium text-slate-700">
            <i data-lucide="check-circle" class="w-4 h-4 text-[#003399] shrink-0 mt-0.5"></i>
            <span>${pt}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `
  ).join("");
}

function renderBlogPosts() {
  const container = document.getElementById("blogGrid");
  if (!container) return;

  container.innerHTML = BLOG_POSTS.map(
    (post) => `
    <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between group">
      <div>
        <div class="relative h-52 overflow-hidden bg-suzuki-gradient flex items-center justify-center p-3 cursor-pointer" onclick="openBlogModal('${post.id}')">
          <img src="${safeImgUrl(post.image)}" alt="${post.title}" class="max-h-44 w-auto object-contain group-hover:scale-105 transition duration-500 drop-shadow-xl" loading="lazy" />
          <div class="absolute top-3 left-3 bg-[#003399] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            ${post.category}
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${post.date}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${post.readTime}</span>
          </div>
          <h3 class="text-lg font-extrabold text-slate-900 mb-2.5 group-hover:text-[#003399] transition cursor-pointer" onclick="openBlogModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>
      </div>
      <div class="px-6 pb-6">
        <button onclick="openBlogModal('${post.id}')" class="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E30613] hover:text-red-700">
          Leer artículo completo <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </article>
  `
  ).join("");
}

function openBlogModal(postId) {
  const post = BLOG_POSTS.find((p) => p.id === postId);
  if (!post) return;

  const modal = document.getElementById("blogModal");
  const body = document.getElementById("blogModalBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="relative h-64 sm:h-72 bg-suzuki-gradient flex items-center justify-center p-4">
      <img src="${safeImgUrl(post.image)}" alt="${post.title}" class="max-h-56 w-auto object-contain opacity-90 drop-shadow-2xl" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
      <div class="absolute bottom-5 left-6 right-6 text-white">
        <span class="bg-[#E30613] text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">${post.category}</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold font-heading">${post.title}</h2>
        <p class="text-xs text-slate-300 mt-1">${post.date} • ${post.readTime} • Suzuki Cúcuta</p>
      </div>
    </div>
    <div class="p-6 sm:p-8 text-slate-700 text-sm sm:text-base leading-relaxed">
      ${post.content}
      <div class="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <span class="text-xs font-semibold text-slate-500">¿Deseas asesoría personalizada en Suzuki Cúcuta?</span>
        <button onclick="closeBlogModal(); document.getElementById('necesitas-ayuda').scrollIntoView({behavior: 'smooth'})" class="px-5 py-2.5 bg-[#003399] hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition">
          Hablar con un Asesor Suzuki
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  const modal = document.getElementById("blogModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 7. PREGUNTAS FRECUENTES (FAQ)
// ==========================================
function renderFaqs() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;

  container.innerHTML = FAQS.map(
    (faq, index) => `
    <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden transition">
      <button
        onclick="toggleFaqItem(${index})"
        class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition">
        <span class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-3">
          <span class="w-7 h-7 rounded-lg bg-blue-50 text-[#003399] font-extrabold text-xs flex items-center justify-center shrink-0">0${
            index + 1
          }</span>
          ${faq.question}
        </span>
        <i id="faqIcon-${index}" data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
      index === 0 ? "rotate-180 text-[#E30613]" : ""
    }"></i>
      </button>
      <div id="faqContent-${index}" class="${
      index === 0 ? "block" : "hidden"
    } px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
        ${faq.answer}
      </div>
    </div>
  `
  ).join("");

  if (window.lucide) window.lucide.createIcons();
}

function toggleFaqItem(index) {
  const content = document.getElementById(`faqContent-${index}`);
  const icon = document.getElementById(`faqIcon-${index}`);
  if (!content) return;

  const isHidden = content.classList.contains("hidden");
  if (isHidden) {
    content.classList.remove("hidden");
    if (icon) icon.classList.add("rotate-180", "text-[#E30613]");
  } else {
    content.classList.add("hidden");
    if (icon) icon.classList.remove("rotate-180", "text-[#E30613]");
  }
}

// ==========================================
// 8. FICHA DE UBICACIÓN EN CÚCUTA (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander)
// ==========================================
function copyLocationAddress() {
  const addressText = "Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(addressText);
  }
  const btn = document.getElementById("copyAddressBtn");
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> ¡Copiada!`;
    btn.classList.add("bg-emerald-50", "text-emerald-700", "border-emerald-200");
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove("bg-emerald-50", "text-emerald-700", "border-emerald-200");
      if (window.lucide) window.lucide.createIcons();
    }, 2200);
  }
}

function renderLocationCard() {
  const container = document.getElementById("locationCardContainer");
  if (!container) return;

  const loc = CUCUTA_LOCATIONS[0];
  const phoneVentas = loc.phoneVentas || loc.phone || "+57 314 382 6181";
  const phoneTaller = loc.phoneTaller || loc.phone || "+57 314 382 6181";
  const phoneRepuestos = loc.phoneRepuestos || loc.phone || "+57 314 382 6181";
  const hoursWeekdays = loc.hoursWeekdays || loc.hoursWeek || "Lunes a Viernes: 8:00 AM – 6:00 PM";
  const hoursSaturday = loc.hoursSaturday || loc.hoursSat || "Sábados: 8:00 AM – 2:00 PM";
  const hoursSunday = loc.hoursSunday || "Domingos y Festivos: Cerrado";
  const googleMapsLink = loc.googleMapsLink || loc.mapsDirectUrl || "https://www.google.com/maps/search/?api=1&query=Av.+11+E+%235+09,+Br.+Colsag,+C%C3%BAcuta,+Norte+de+Santander";
  const wazeLink = loc.wazeLink || "https://waze.com/ul?q=Av.%2011%20E%205-09%20Colsag%20Cucuta&navigate=yes";
  const landmarks = loc.landmarks || [
    "Sobre la Avenida 11E #5-09, Barrio Colsag",
    "Sector comercial central y seguro en Colsag, Cúcuta",
    "Zona de parqueo para clientes de vitrina y taller"
  ];

  container.innerHTML = `
    <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
      <!-- Barra superior corporativa de la Ficha -->
      <div class="bg-gradient-to-r from-slate-950 via-[#002266] to-slate-900 px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ${loc.badge || "Sede Principal Autorizada • Cúcuta"}
          </span>
          <span class="hidden sm:inline-block text-xs text-slate-300 font-medium">
            📍 Coordenadas GPS: <strong class="text-white">${loc.coordinates || "7.8891° N, 72.4967° O"}</strong>
          </span>
        </div>
        <div class="flex items-center gap-2">
          <a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer"
            class="text-xs font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5">
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-sky-400"></i>
            Abrir en Google Maps
          </a>
        </div>
      </div>

      <!-- Contenido Principal: Información + Mapa Interactivo -->
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <!-- Columna Izquierda: Detalles de la Sede -->
        <div class="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1.5">${loc.name}</h3>
            <p class="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">${loc.reference || "Ubicados en Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander."}</p>

            <div class="space-y-4">
              <!-- Tarjeta de Dirección Oficial -->
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3">
                <div class="flex items-start gap-3.5">
                  <div class="w-11 h-11 rounded-xl bg-[#E30613] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#003399] block">Dirección Oficial en Cúcuta</span>
                    <p class="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">${loc.address}</p>
                    <p class="text-xs font-medium text-slate-600">${loc.city}</p>
                  </div>
                </div>
                <button
                  id="copyAddressBtn"
                  type="button"
                  onclick="copyLocationAddress()"
                  class="shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs transition flex items-center gap-1.5"
                  title="Copiar dirección">
                  <i data-lucide="copy" class="w-3.5 h-3.5 text-[#003399]"></i>
                  Copiar
                </button>
              </div>

              <!-- Puntos de Referencia Rápidos -->
              <div class="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#003399] flex items-center gap-1.5 mb-2">
                  <i data-lucide="compass" class="w-3.5 h-3.5 text-[#E30613]"></i>
                  Puntos de referencia para llegar fácil:
                </span>
                <ul class="space-y-1 text-xs text-slate-700 font-medium">
                  ${landmarks
                    .map(
                      (item) => `
                    <li class="flex items-center gap-2">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#003399] shrink-0"></span>
                      ${item}
                    </li>
                  `
                    )
                    .join("")}
                </ul>
              </div>

              <!-- Horarios de Atención -->
              <div class="flex items-start gap-3.5 pt-1">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#003399] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <i data-lucide="clock" class="w-5 h-5"></i>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  <div class="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <span class="text-[10px] font-bold uppercase text-slate-400 block">Lunes a Viernes</span>
                    <p class="text-xs font-extrabold text-slate-800">${hoursWeekdays.replace("Lunes a Viernes: ", "")}</p>
                  </div>
                  <div class="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <span class="text-[10px] font-bold uppercase text-slate-400 block">Sábados</span>
                    <p class="text-xs font-extrabold text-slate-800">${hoursSaturday.replace("Sábados: ", "")}</p>
                  </div>
                  <div class="sm:col-span-2 text-[11px] text-slate-500 font-medium pl-1">
                    ${hoursSunday}
                  </div>
                </div>
              </div>

              <!-- Líneas Directas de Atención -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                  <i data-lucide="phone-call" class="w-5 h-5"></i>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 transition">
                    <span class="text-[10px] font-bold uppercase text-slate-400 block">Ventas Motos</span>
                    <a href="tel:${phoneVentas.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-[#003399]">${phoneVentas}</a>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 transition">
                    <span class="text-[10px] font-bold uppercase text-slate-400 block">Servicio Técnico</span>
                    <a href="tel:${phoneTaller.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-[#003399]">${phoneTaller}</a>
                  </div>
                  <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 transition">
                    <span class="text-[10px] font-bold uppercase text-slate-400 block">Repuestos</span>
                    <a href="tel:${phoneRepuestos.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-[#003399]">${phoneRepuestos}</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Servicios Disponibles -->
            <div class="mt-5 pt-4 border-t border-slate-100">
              <span class="text-[11px] font-bold uppercase text-slate-400 block mb-2">Servicios disponibles en esta sede:</span>
              <div class="flex flex-wrap gap-1.5">
                ${(loc.services || [])
                  .map(
                    (s) => `
                  <span class="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-slate-200/60">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i> ${s}
                  </span>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <!-- Botones de Acción: Google Maps, Waze y WhatsApp -->
          <div class="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href="${googleMapsLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="py-3 px-3 rounded-xl font-bold text-xs bg-[#003399] hover:bg-blue-900 text-white flex items-center justify-center gap-2 transition shadow-md">
              <i data-lucide="navigation" class="w-4 h-4 text-sky-300"></i>
              Google Maps
            </a>
            <a
              href="${wazeLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="py-3 px-3 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition shadow-md">
              <i data-lucide="compass" class="w-4 h-4 text-cyan-400"></i>
              Ir con Waze
            </a>
            <a
              href="https://wa.me/${loc.whatsapp}?text=${encodeURIComponent(
                `¡Hola! Quiero visitar el concesionario Suzuki Cúcuta en ${loc.address}.`
              )}"
              target="_blank"
              rel="noopener noreferrer"
              class="py-3 px-3 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 transition shadow-md">
              ${whatsappLogoSvg("w-4 h-4")}
              WhatsApp Sede
            </a>
          </div>
        </div>

        <!-- Columna Derecha: Mapa Interactivo Google Maps + Tarjeta Flotante -->
        <div class="lg:col-span-6 min-h-[440px] lg:min-h-full bg-slate-100 relative flex flex-col justify-between overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
          <!-- Pin flotante superior sobre el mapa -->
          <div class="relative z-10 m-4 self-start bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/90 flex items-center gap-3 pointer-events-none">
            <div class="w-9 h-9 rounded-xl bg-[#E30613] text-white flex items-center justify-center font-black text-sm shadow-sm">
              S
            </div>
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#003399] block">Punto Oficial en Mapa</span>
              <p class="text-xs font-extrabold text-slate-900">Suzuki Cúcuta • Av. 11 E #5 09, Br. Colsag</p>
            </div>
          </div>

          <!-- Iframe de Google Maps a pantalla completa del contenedor -->
          <iframe
            title="Mapa de ubicación ${loc.address}"
            src="${loc.mapEmbedUrl}"
            class="absolute inset-0 w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

          <!-- Barra flotante inferior sobre el mapa -->
          <div class="relative z-10 m-4 bg-slate-950/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <i data-lucide="shield-check" class="w-4 h-4"></i>
              </div>
              <div>
                <p class="text-xs font-bold text-white">Parqueadero gratuito para clientes</p>
                <p class="text-[11px] text-slate-300">Exhibición de los 29 modelos Suzuki 2026</p>
              </div>
            </div>
            <a
              href="${googleMapsLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[11px] font-extrabold bg-white text-slate-900 hover:bg-blue-50 px-3 py-2 rounded-xl transition flex items-center gap-1.5 shrink-0">
              <i data-lucide="map-pinned" class="w-3.5 h-3.5 text-[#E30613]"></i>
              Ampliar Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 9. ESCUDO DE SEGURIDAD ANTI-SPAM, ANTI-XSS, HONEYPOT Y RATE-LIMITING
//    + AGENDAMIENTO DE TALLER Y REPUESTOS / WHATSAPP
// ==========================================
const securityRateLimiter = {
  lastActionTime: 0,
  actionTimestamps: []
};

function sanitizeUserText(input, maxLen = 220) {
  return String(input || "")
    .replace(/[<>{}[\]\\^`|~]/g, "")
    .replace(/(javascript:|data:|vbscript:|onload=|onerror=|onclick=)/gi, "")
    .trim()
    .slice(0, maxLen);
}

function isBotOrFloodBlocked(formEl) {
  // 1. Verificación de Honeypot invisible contra bots automatizados
  if (formEl) {
    const hp = formEl.querySelector('input[name="website_hp"]');
    if (hp && hp.value && hp.value.trim() !== "") {
      return true;
    }
  }
  // 2. Limitador de ráfagas (Rate-Limiting contra inundación / flood de formularios)
  const now = Date.now();
  if (now - securityRateLimiter.lastActionTime < 2200) {
    showToast("Por seguridad anti-spam, espera unos segundos antes de enviar otra solicitud.");
    return true;
  }
  securityRateLimiter.actionTimestamps = securityRateLimiter.actionTimestamps.filter(
    (t) => now - t < 60000
  );
  if (securityRateLimiter.actionTimestamps.length >= 6) {
    showToast("Límite de seguridad alcanzado. Intenta nuevamente en un minuto.");
    return true;
  }
  securityRateLimiter.lastActionTime = now;
  securityRateLimiter.actionTimestamps.push(now);
  return false;
}

function openWorkshopModal() {
  const modal = document.getElementById("workshopModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeWorkshopModal() {
  const modal = document.getElementById("workshopModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function submitWorkshopForm(event) {
  event.preventDefault();
  if (isBotOrFloodBlocked(event.target)) return;

  const name = sanitizeUserText(document.getElementById("wsName").value, 80);
  const phone = sanitizeUserText(document.getElementById("wsPhone").value, 25);
  const model = sanitizeUserText(document.getElementById("wsBikeModel").value, 80);
  const serviceType = sanitizeUserText(document.getElementById("wsServiceType").value, 120);
  const sede = sanitizeUserText(document.getElementById("wsSede").value, 120);
  const date = sanitizeUserText(document.getElementById("wsDate").value, 25);

  const msg = `¡Hola Servicio Técnico Especializado Suzuki Cúcuta! Deseo agendar una cita de taller:\n\n• Cliente: *${name}*\n• Teléfono: ${phone}\n• Motocicleta Suzuki: *${model}*\n• Servicio requerido: ${serviceType}\n• Sede: ${sede}\n• Fecha solicitada: ${date}\n\nQuedo atento a la confirmación de mi turno.`;

  closeWorkshopModal();
  showToast("Redirigiendo al WhatsApp de Servicio Técnico Suzuki Cúcuta...");
  window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
}

function openPartsModal() {
  const modal = document.getElementById("partsModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closePartsModal() {
  const modal = document.getElementById("partsModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function submitPartsForm(event) {
  event.preventDefault();
  if (isBotOrFloodBlocked(event.target)) return;

  const name = sanitizeUserText(document.getElementById("ptName").value, 80);
  const phone = sanitizeUserText(document.getElementById("ptPhone").value, 25);
  const bikeModel = sanitizeUserText(document.getElementById("ptBikeModel").value, 80);
  const bikeYear = sanitizeUserText(document.getElementById("ptBikeYear").value, 20) || "Por confirmar";
  const partCategory = sanitizeUserText(document.getElementById("ptCategory").value, 120);
  const partDetails = sanitizeUserText(document.getElementById("ptDetails").value, 300);

  const msg = `¡Hola Almacén de Repuestos Originales Suzuki Cúcuta! Solicito cotización de repuesto bajo el siguiente formato:\n\n• Cliente: *${name}*\n• Celular: ${phone}\n• Motocicleta Suzuki: *${bikeModel}*\n• Modelo / Año: ${bikeYear}\n• Categoría de pieza: ${partCategory}\n• Repuesto solicitado / Referencia: *${partDetails}*\n\nQuedo atento a disponibilidad y precio en Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander.`;

  closePartsModal();
  showToast("Enviando solicitud de repuesto original por WhatsApp...");
  window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  event.target.reset();
}

function submitHelpForm(event) {
  event.preventDefault();
  if (isBotOrFloodBlocked(event.target)) return;

  const name = sanitizeUserText(document.getElementById("helpName").value, 80);
  const phone = sanitizeUserText(document.getElementById("helpPhone").value, 25);
  const area = sanitizeUserText(document.getElementById("helpArea").value, 120);
  const message = sanitizeUserText(document.getElementById("helpMessage").value, 350);

  const text = `¡Hola Suzuki Cúcuta! Solicito asesoría personalizada desde el sitio web:\n\n• Nombre: *${name}*\n• Celular: ${phone}\n• Área de consulta: *${area}*\n• Mensaje: ${message}`;

  showToast("¡Solicitud lista! Conectando con un asesor en Suzuki Cúcuta...");
  window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  event.target.reset();
}

function quoteBikeWhatsApp(bikeId) {
  const bike = SUZUKI_BIKES.find((b) => b.id === bikeId);
  if (!bike) return;
  const colorIdx = state.selectedColors[bike.id] || 0;
  const color = bike.colors[colorIdx]?.name || bike.colors[0].name;

  const text = `¡Hola Suzuki Cúcuta! Estoy interesado en cotizar la motocicleta *Suzuki ${bike.name}* (${bike.displacement} cc) en color *${color}* vista en su página web (Precio lista: ${formatCOP(
    bike.price
  )}).\n\n¿Me pueden brindar información de disponibilidad en Av. 11 E #5 09, Br. Colsag, Cúcuta, costos de matrícula y planes de financiación?`;

  window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
}

function initNavbarEvents() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeEntryPromoModal();
      closeSpecModal();
      closeCompareModal();
      closeWorkshopModal();
      closePartsModal();
      closeBlogModal();
      closeMobileMenu();
    }
  });
}

function showToast(message) {
  const toast = document.getElementById("appToast");
  const text = document.getElementById("appToastText");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3500);
}
