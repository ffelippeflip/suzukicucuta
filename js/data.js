// Base de datos oficial de Motocicletas Suzuki - Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander)
// Incluye las 29 referencias y todos sus colores reales con fotografías de estudio en alta resolución.

const CATEGORIES = [
  { id: "todas", name: "Todas las Categorías", icon: "layout-grid" },
  { id: "sport", name: "Sport y Calle (Gixxer / GN / AX4)", icon: "flame" },
  { id: "vstrom", name: "Aventura (Familia V-Strom)", icon: "compass" },
  { id: "enduro", name: "Enduro y Supermotard (Serie DR)", icon: "mountain" },
  { id: "automaticas", name: "Automáticas / Scooters", icon: "zap" },
  { id: "semiautomaticas", name: "Semiautomáticas (Viva R FI)", icon: "shield-check" },
  { id: "altocilindraje", name: "Alto Cilindraje (GSX / Hayabusa)", icon: "gauge" }
];

// Las 3 motocicletas insignia destacadas en la página principal
const FEATURED_BIKE_IDS = ["v-strom-250-sx", "gixxer-fi-150-abs", "dr-150-abs"];

function buildSpecs(custom) {
  return {
    motor: {
      "Tipo de motor": custom.engineType || "4 Tiempos, SOHC/DOHC, tecnología Suzuki Eco Performance (SEP)",
      "Cilindraje": custom.displacementLabel || `${custom.displacement} cc`,
      "Relación de compresión": custom.compression || "10.7 : 1",
      "Potencia máxima": custom.power || "Consultar ficha de serie",
      "Torque máximo": custom.torque || "Consultar ficha de serie",
      "Sistema de alimentación": custom.fuelSystem || "Inyección Electrónica Suzuki (Fuel Injection)",
      "Sistema de arranque": custom.starter || "Eléctrico (Suzuki Easy Start System)",
      "Sistema de lubricación": custom.lubrication || "Cárter húmedo (Lubricante Oficial ECSTAR)",
      "Transmisión": custom.transmission || "Manual de engrane constante"
    },
    chasis: {
      "Tipo de chasis": custom.frame || "Diamante / Doble cuna en acero de alta rigidez",
      "Suspensión delantera": custom.frontSuspension || "Horquilla telescópica hidráulica con amortiguación de aceite",
      "Suspensión trasera": custom.rearSuspension || "Monoamortiguador (Monoshock) ajustable en precarga",
      "Freno delantero": custom.frontBrake || "Disco hidráulico con sistema antibloqueo ABS",
      "Freno trasero": custom.rearBrake || "Disco hidráulico ventilado",
      "Neumático delantero": custom.frontTire || "Deportivo / Multiterreno Tubeless (Sin neumático)",
      "Neumático trasero": custom.rearTire || "Deportivo / Multiterreno Tubeless (Sin neumático)"
    },
    dimensiones: {
      "Largo total": custom.length || "2.010 mm",
      "Ancho total": custom.width || "805 mm",
      "Altura total": custom.height || "1.035 mm",
      "Altura al asiento": custom.seatHeight || "800 mm",
      "Distancia entre ejes": custom.wheelbase || "1.340 mm",
      "Distancia mínima al suelo": custom.groundClearance || "165 mm",
      "Peso en orden de marcha": custom.weight || "156 kg",
      "Capacidad del tanque de combustible": custom.fuelCapacity || "12.0 L (3.17 gal)"
    }
  };
}

const SUZUKI_BIKES = [
  // ==========================================
  // 1. SPORT Y CALLE (8 REFERENCIAS)
  // ==========================================
  {
    id: "gixxer-250",
    name: "GIXXER 250 ABS",
    category: "sport",
    categoryLabel: "Sport / Naked 250",
    badge: "MOTOR SOCS + ABS DOBLE CANAL",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 14490000,
    displacement: 249,
    power: "26.1 HP @ 9.000 rpm",
    torque: "22.2 Nm @ 7.300 rpm",
    weight: "156 kg",
    fuelCapacity: "12.0 L",
    transmission: "6 Velocidades",
    abs: "ABS Doble Canal",
    bannerImage: "motos/GIXXER-250-AZUL-2026_0.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GIXXER-250-AZUL-2026_0.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/GIXXER-250-BLANCA--2026_0_0_0.png" },
      { name: "Negra Brillante", hex: "#111827", image: "motos/GIXXER-250-NEGRA-BRILLANTE.png" }
    ],
    technologies: ["Sistema de Refrigeración por Aceite SOCS", "Frenos ABS Doble Canal", "Inyección Electrónica FI", "Caja de 6 Velocidades", "Iluminación Full LED", "Arranque Suzuki Easy Start"],
    description: "Potencia pura heredada de las pistas. La Suzuki Gixxer 250 incorpora el innovador sistema de enfriamiento por aceite SOCS (Suzuki Oil Cooling System), frenos ABS en ambas ruedas y 26.1 HP para dominar tanto las avenidas de Cúcuta como las carreteras de Norte de Santander.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, 4 válvulas, refrigerado por aceite (SOCS)",
      displacement: 249,
      compression: "10.7 : 1",
      power: "26.1 HP @ 9.000 rpm",
      torque: "22.2 Nm @ 7.300 rpm",
      transmission: "6 velocidades de engrane constante",
      frontSuspension: "Telescópica hidráulica de 41 mm con resorte helicoidal",
      rearSuspension: "Brazo oscilante con monoamortiguador ajustable en 7 posiciones",
      frontBrake: "Disco ventilado de 300 mm con pinza ByBre y ABS",
      rearBrake: "Disco ventilado de 220 mm con ABS",
      frontTire: "110/70 R17 M/C 54S Radial Tubeless",
      rearTire: "150/60 R17 M/C 66S Radial Tubeless",
      length: "2.010 mm",
      width: "805 mm",
      height: "1.035 mm",
      seatHeight: "800 mm",
      wheelbase: "1.340 mm",
      groundClearance: "165 mm",
      weight: "156 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "gixxer-fi-150-abs",
    name: "GIXXER FI 150 ABS",
    category: "sport",
    categoryLabel: "Sport 150",
    badge: "SEP + FRENO ABS",
    badgeColor: "bg-[#003399]",
    featured: true,
    price: 10990000,
    displacement: 155,
    power: "13.6 HP @ 8.000 rpm",
    torque: "13.8 Nm @ 6.000 rpm",
    weight: "140 kg",
    fuelCapacity: "12.0 L",
    transmission: "5 Velocidades",
    abs: "ABS Delantero + Doble Disco",
    bannerImage: "motos/GIXXER-150-FI-ABS-AZUL-2027.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GIXXER-150-FI-ABS-AZUL-2027.png" },
      { name: "Negra", hex: "#111827", image: "motos/GIXXER-150 FI ABS-NEGRA-2026.png" },
      { name: "Roja", hex: "#DC2626", image: "motos/GIXXER-150 FI ABS-ROJA-2026.png" }
    ],
    technologies: ["Tecnología SEP (Suzuki Eco Performance)", "Inyección Electrónica FI", "Freno Delantero ABS", "Barras Telescópicas de 41 mm", "Farola y Stop LED"],
    description: "La líder indiscutible del segmento 150 cc en Colombia. Con tecnología SEP de bajo consumo, barras delanteras robustas de 41 mm y freno ABS delantero, es ideal para moverte con estilo y seguridad por Cúcuta.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, refrigerado por aire con tecnología SEP",
      displacement: 155,
      compression: "9.8 : 1",
      power: "13.6 HP @ 8.000 rpm",
      torque: "13.8 Nm @ 6.000 rpm",
      transmission: "5 velocidades",
      frontSuspension: "Telescópica de 41 mm de diámetro",
      rearSuspension: "Monoamortiguador ajustable en 7 niveles",
      frontBrake: "Disco hidráulico de 266 mm con ABS",
      rearBrake: "Disco hidráulico de 220 mm",
      frontTire: "100/80-17 Tubeless",
      rearTire: "140/60 R17 Radial Tubeless",
      seatHeight: "795 mm",
      weight: "140 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "gixxer-sf-150-abs",
    name: "GIXXER SF FI 150 ABS",
    category: "sport",
    categoryLabel: "Sport Carenada 150",
    badge: "DEPORTIVA CARENADA FI",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 12590000,
    displacement: 155,
    power: "13.6 HP @ 8.000 rpm",
    torque: "13.8 Nm @ 6.000 rpm",
    weight: "146 kg",
    fuelCapacity: "12.0 L",
    transmission: "5 Velocidades",
    abs: "ABS Delantero + Doble Disco",
    bannerImage: "motos/GIXXER--SF-150-FI-ABS-AZUL.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GIXXER--SF-150-FI-ABS-AZUL.png" },
      { name: "Gris", hex: "#64748B", image: "motos/GIXXER-SF-150-GRIS-.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GIXXER-SF-150-NEGRA.png" }
    ],
    technologies: ["Carenado Desarrollado en Túnel de Viento", "Inyección Electrónica SEP", "Freno ABS Delantero", "Doble Salida de Exosto Cromada", "Iluminación LED"],
    description: "Toda la eficiencia del motor 155 cc Fuel Injection con el aspecto imponente de una deportiva carenada desarrollada en el mismo túnel de viento donde nace la Hayabusa.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, SEP Fuel Injection",
      displacement: 155,
      power: "13.6 HP @ 8.000 rpm",
      torque: "13.8 Nm @ 6.000 rpm",
      transmission: "5 velocidades",
      frontBrake: "Disco con ABS",
      rearBrake: "Disco ventilado",
      seatHeight: "795 mm",
      weight: "146 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "gsx-r150-abs",
    name: "GSX-R150 ABS",
    category: "sport",
    categoryLabel: "Super Sport 150",
    badge: "DOHC 4 VÁLVULAS + KEYLESS",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 14590000,
    displacement: 147,
    power: "18.9 HP @ 10.500 rpm",
    torque: "14.0 Nm @ 9.000 rpm",
    weight: "134 kg",
    fuelCapacity: "11.0 L",
    transmission: "6 Velocidades",
    abs: "ABS Doble Canal",
    bannerImage: "motos/GSX-R150-ABS-AZUL.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GSX-R150-ABS-AZUL.png" }
    ],
    technologies: ["Motor DOHC 4 Válvulas Refrigerado por Líquido", "Encendido Sin Llave (Keyless Ignition)", "18.9 HP de Potencia Líder", "ABS en Ambas Ruedas", "Caja de 6 Velocidades"],
    description: "La 150 cc más rápida y ligera de su clase. Equipada con motor DOHC refrigerado por líquido que alcanza 18.9 HP a 10.500 rpm y encendido inteligente sin llave Keyless.",
    specs: buildSpecs({
      engineType: "4 Tiempos, DOHC, 4 válvulas, refrigerado por líquido",
      displacement: 147,
      compression: "11.5 : 1",
      power: "18.9 HP @ 10.500 rpm",
      torque: "14.0 Nm @ 9.000 rpm",
      transmission: "6 velocidades",
      frontBrake: "Disco lobulado con ABS",
      rearBrake: "Disco lobulado con ABS",
      seatHeight: "785 mm",
      weight: "134 kg",
      fuelCapacity: "11.0 Litros"
    })
  },
  {
    id: "gsx-s150-abs",
    name: "GSX-S150 ABS",
    category: "sport",
    categoryLabel: "Naked Sport 150",
    badge: "STREETFIGHTER DOHC",
    badgeColor: "bg-slate-900",
    featured: false,
    price: 12590000,
    displacement: 147,
    power: "18.9 HP @ 10.500 rpm",
    torque: "14.0 Nm @ 9.000 rpm",
    weight: "133 kg",
    fuelCapacity: "11.0 L",
    transmission: "6 Velocidades",
    abs: "ABS Doble Canal",
    bannerImage: "motos/GSX-S150-ABS-AZUL.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GSX-S150-ABS-AZUL.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GSX-S150-ABS-NEGRA.png" }
    ],
    technologies: ["Motor DOHC Refrigerado por Líquido", "18.9 HP de Potencia", "Posición Ergonómica Streetfighter", "Frenos de Disco Lobulados con ABS", "Arranque Easy Start"],
    description: "El corazón racing de la GSX-R150 en un formato Naked ergonómico y agresivo para devorar el tráfico urbano de Cúcuta con 18.9 caballos de fuerza.",
    specs: buildSpecs({
      engineType: "4 Tiempos, DOHC, 4 válvulas, refrigerado por líquido",
      displacement: 147,
      compression: "11.5 : 1",
      power: "18.9 HP @ 10.500 rpm",
      torque: "14.0 Nm @ 9.000 rpm",
      transmission: "6 velocidades",
      frontBrake: "Disco lobulado con ABS",
      rearBrake: "Disco lobulado con ABS",
      seatHeight: "785 mm",
      weight: "133 kg",
      fuelCapacity: "11.0 Litros"
    })
  },
  {
    id: "gn-160-rl",
    name: "NUEVA GN 160 RL ABS",
    category: "sport",
    categoryLabel: "Neo-Retro / Calle 160",
    badge: "NUEVO LANZAMIENTO + ABS",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 10130000,
    displacement: 160,
    power: "14.8 HP @ 8.000 rpm",
    torque: "14.0 Nm @ 6.500 rpm",
    weight: "135 kg",
    fuelCapacity: "12.0 L",
    transmission: "5 Velocidades",
    abs: "Freno Delantero ABS + Disco Trasero",
    bannerImage: "motos/GN160RL(GRAY).png",
    colors: [
      { name: "Gris", hex: "#64748B", image: "motos/GN160RL(GRAY).png" },
      { name: "Negra", hex: "#111827", image: "motos/GN160RL(BLACK).png" },
      { name: "Roja", hex: "#DC2626", image: "motos/GN160RL(RED).png" }
    ],
    technologies: ["Nuevo Diseño Neo-Retro Clásico", "Sistema Antibloqueo de Frenos ABS", "Inyección Electrónica Fuel Injection", "Farola Redonda Full LED", "Tablero Digital Redondo"],
    description: "La evolución de un ícono. La nueva Suzuki GN 160 RL fusiona la herencia clásica de la familia GN con un motor de 160 cc de última generación, sistema antibloqueo de frenos ABS, encendido automático de luces e iluminación LED.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, refrigerado por aire, Inyección Electrónica",
      displacement: 160,
      power: "14.8 HP @ 8.000 rpm",
      torque: "14.0 Nm @ 6.500 rpm",
      transmission: "5 velocidades",
      frontSuspension: "Telescópica hidráulica con fuelles clásicos",
      rearSuspension: "Doble amortiguador ajustable",
      frontBrake: "Disco hidráulico con sistema ABS",
      rearBrake: "Disco hidráulico",
      seatHeight: "780 mm",
      weight: "135 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "gn-125-abs",
    name: "GN 125 ABS",
    category: "sport",
    categoryLabel: "Trabajo y Ciudad",
    badge: "LEYENDA DE DURABILIDAD + ABS",
    badgeColor: "bg-emerald-700",
    featured: false,
    price: 7019000,
    displacement: 124,
    power: "12.5 HP @ 9.000 rpm",
    torque: "9.8 Nm @ 7.000 rpm",
    weight: "113 kg",
    fuelCapacity: "10.3 L",
    transmission: "5 Velocidades",
    abs: "Freno Delantero Disco ABS",
    bannerImage: "motos/GN125ABS AZUL.png",
    colors: [
      { name: "Azul", hex: "#1D4ED8", image: "motos/GN125ABS AZUL.png" },
      { name: "Negra", hex: "#111827", image: "motos/GN12ABS NEGRA.png" },
      { name: "Naranja", hex: "#EA580C", image: "motos/GN125 ABS NARANJA.png" },
      { name: "Vinotinto", hex: "#881337", image: "motos/GN125ABSVINOTINTO.png" }
    ],
    technologies: ["Nueva Versión con Freno ABS Delantero", "Parrilla Trasera de Acero Cromado", "Indicador de Marcha en el Tablero", "Asiento Ultra Cómodo de Baja Altura", "Mantenimiento Económico"],
    description: "La motocicleta más querida y resistente de Colombia ahora evoluciona con freno ABS delantero. Su diseño clásico indestructible, suavidad de marcha y economía de gasolina la hacen la reina del trabajo diario en Cúcuta.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, refrigerado por aire",
      displacement: 124,
      compression: "9.5 : 1",
      power: "12.5 HP @ 9.000 rpm",
      torque: "9.8 Nm @ 7.000 rpm",
      fuelSystem: "Carburador Mikuni BS26 de alta eficiencia",
      transmission: "5 velocidades",
      frontSuspension: "Telescópica hidráulica",
      rearSuspension: "Doble amortiguador ajustable en 5 posiciones",
      frontBrake: "Disco hidráulico con sistema ABS",
      rearBrake: "Campana (Tambor) de 130 mm",
      seatHeight: "745 mm",
      weight: "113 kg",
      fuelCapacity: "10.3 Litros"
    })
  },
  {
    id: "ax4-abs",
    name: "AX4 ABS",
    category: "sport",
    categoryLabel: "Trabajo / Utilitaria",
    badge: "MÁXIMA ECONOMÍA + ABS",
    badgeColor: "bg-amber-600",
    featured: false,
    price: 6050000,
    displacement: 113,
    power: "8.2 HP @ 7.500 rpm",
    torque: "8.8 Nm @ 5.500 rpm",
    weight: "108 kg",
    fuelCapacity: "9.2 L",
    transmission: "4 Velocidades",
    abs: "Freno Disco Delantero ABS",
    bannerImage: "motos/AX4 ABS AZUL.png",
    colors: [
      { name: "Azul", hex: "#1D4ED8", image: "motos/AX4 ABS AZUL.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/AX4 ABS BLANCA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/AX4 ABS NEGRA.png" }
    ],
    technologies: ["Chasis Reforzado para Trabajo Pesado", "Freno de Disco Delantero con ABS", "Consumo Ultra Económico", "Doble Amortiguador Trasero Reforzado"],
    description: "Creada para quienes trabajan duro todos los días en Cúcuta y su área metropolitana. La AX4 ABS ofrece el precio más accesible de la familia Suzuki con chasis reforzado y seguridad ABS.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire",
      displacement: 113,
      power: "8.2 HP @ 7.500 rpm",
      torque: "8.8 Nm @ 5.500 rpm",
      fuelSystem: "Carburador",
      transmission: "4 velocidades",
      frontBrake: "Disco con ABS",
      rearBrake: "Campana",
      seatHeight: "765 mm",
      weight: "108 kg",
      fuelCapacity: "9.2 Litros"
    })
  },

  // ==========================================
  // 2. AVENTURA / FAMILIA V-STROM (4 REFERENCIAS)
  // ==========================================
  {
    id: "v-strom-250-sx",
    name: "V-STROM 250 SX",
    category: "vstrom",
    categoryLabel: "Aventura / V-Strom",
    badge: "SPORT ADVENTURE TOURER",
    badgeColor: "bg-amber-500",
    featured: true,
    price: 20590000,
    displacement: 249,
    power: "26.1 HP @ 9.300 rpm",
    torque: "22.2 Nm @ 7.300 rpm",
    weight: "167 kg",
    fuelCapacity: "12.0 L",
    transmission: "6 Velocidades",
    abs: "ABS Doble Canal + Rueda 19\"",
    bannerImage: "motos/V-STROM_250SX-2027-AMARILLA.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/V-STROM_250SX-2027-AMARILLA.png" },
      { name: "Azul", hex: "#0046AD", image: "motos/V-STROM_250SX--2027-AZUL.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/V-STROM_250SX--2027-BLANCA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/V-STROM_250SX-2027-NEGRA.png" }
    ],
    technologies: ["Motor 249 cc Refrigerado por Aceite SOCS", "Rueda Delantera de 19\" Todo Terreno", "Cúpula Parabrisas Touring", "Cubremanos (Handguards) y Protector de Cárter", "Puerto USB y Parrilla Trasera de Aluminio"],
    description: "Tu pasaporte para viajar desde Cúcuta hacia Pamplona, Chinácota, Ocaña y toda Colombia. La V-Strom 250 SX une la versatilidad de una Adventure con el confiable motor SOCS de 26.1 HP.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, 4 válvulas, refrigerado por aceite (SOCS)",
      displacement: 249,
      compression: "10.7 : 1",
      power: "26.1 HP @ 9.300 rpm",
      torque: "22.2 Nm @ 7.300 rpm",
      transmission: "6 velocidades",
      frontSuspension: "Telescópica hidráulica de largo recorrido",
      rearSuspension: "Brazo oscilante con monoamortiguador ajustable en 7 niveles",
      frontBrake: "Disco hidráulico con ABS",
      rearBrake: "Disco hidráulico con ABS",
      frontTire: "100/90-19 M/C 57S Sin neumático",
      rearTire: "140/70-17 M/C 66S Sin neumático",
      length: "2.180 mm",
      width: "880 mm",
      height: "1.355 mm",
      seatHeight: "835 mm",
      groundClearance: "205 mm",
      weight: "167 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "v-strom-160",
    name: "V-STROM 160 FI ABS",
    category: "vstrom",
    categoryLabel: "Aventura / V-Strom",
    badge: "NUEVA ADVENTURE 160",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 13090000,
    displacement: 160,
    power: "14.8 HP @ 8.000 rpm",
    torque: "14.0 Nm @ 6.500 rpm",
    weight: "148 kg",
    fuelCapacity: "13.0 L",
    transmission: "5 Velocidades",
    abs: "ABS Doble Canal BOSCH",
    bannerImage: "motos/V-STROM 160 AMARILLA.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/V-STROM 160 AMARILLA.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/V-STROM 160 BLANCO.png" },
      { name: "Negra", hex: "#18181B", image: "motos/V-STROM 160 NEGRA.png" }
    ],
    technologies: ["Frenos ABS Doble Canal BOSCH", "Suspensión Trasera KYB", "Inyección Electrónica EFI", "Cúpula Ajustable y Puerto USB", "Iluminación Full LED"],
    description: "El ADN de la familia V-Strom ahora en 160 cc. Equipada con frenos ABS Bosch en ambas ruedas, suspensión KYB y gran autonomía con su tanque de 13 litros para tus recorridos diarios y escapadas de fin de semana.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, inyección electrónica EFI",
      displacement: 160,
      power: "14.8 HP @ 8.000 rpm",
      torque: "14.0 Nm @ 6.500 rpm",
      transmission: "5 velocidades",
      rearSuspension: "Monoamortiguador central KYB ajustable",
      frontBrake: "Disco con ABS Bosch",
      rearBrake: "Disco con ABS Bosch",
      seatHeight: "795 mm",
      weight: "148 kg",
      fuelCapacity: "13.0 Litros"
    })
  },
  {
    id: "v-strom-800-de",
    name: "V-STROM 800 DE",
    category: "vstrom",
    categoryLabel: "Aventura / V-Strom",
    badge: "BICILÍNDRICA 776 CC + TFT",
    badgeColor: "bg-amber-600",
    featured: false,
    price: 69390000,
    displacement: 776,
    power: "83.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "230 kg",
    fuelCapacity: "20.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "SIRS + Modo Gravel + ABS Off-Road",
    bannerImage: "motos/V-STROM-800-DE-AMARILLA.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/V-STROM-800-DE-AMARILLA.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/V-STROM-800-DE-BLANCA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/V-STROM-800-DE-NEGRA.png" }
    ],
    technologies: ["Motor Bicilíndrico en Paralelo 776 cc Crossbalancer", "Suspensión Showa de 220 mm de Recorrido", "Quickshifter Bidireccional de Serie", "Control de Tracción con Modo G (Gravel)", "Pantalla TFT a Color de 5 Pulgadas"],
    description: "La Adventure de media-alta cilindrada más capaz en la historia de Suzuki. Con rueda delantera de 21 pulgadas, suspensiones Showa totalmente ajustables y paquete electrónico S.I.R.S. completo.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido, cigüeñal a 270°",
      displacement: 776,
      compression: "12.8 : 1",
      power: "83.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida Showa totalmente ajustable (220 mm recorrido)",
      rearSuspension: "Monoamortiguador Showa por bieletas (220 mm recorrido)",
      frontBrake: "Doble disco de 310 mm con ABS desconectable",
      rearBrake: "Disco de 260 mm con ABS desconectable en modo Off-Road",
      frontTire: "90/90-21 M/C",
      rearTire: "150/70 R17 M/C",
      seatHeight: "855 mm",
      groundClearance: "220 mm",
      weight: "230 kg",
      fuelCapacity: "20.0 Litros"
    })
  },
  {
    id: "v-strom-800-de-travel",
    name: "V-STROM 800 DE TRAVEL",
    category: "vstrom",
    categoryLabel: "Aventura / Expedition",
    badge: "EDICIÓN TRAVEL CON MALETAS",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 74990000,
    displacement: 776,
    power: "83.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "242 kg",
    fuelCapacity: "20.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "Equipamiento Touring Completo",
    bannerImage: "motos/V-STROM-800-DE-TRAVEL-AMARILLA.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/V-STROM-800-DE-TRAVEL-AMARILLA.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/V-STROM-800-DE-TRAVEL-BLANCA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/V-STROM-800-DE-TRAVEL-NEGRA.png" }
    ],
    technologies: ["Maletas de Expedición Incluidas", "Motor Bicilíndrico 776 cc de 83 HP", "Suspensiones Showa Ajustables de 220 mm", "Quickshifter Bidireccional", "Modo Gravel + ABS Off-Road Desconectable"],
    description: "Lista para recorrer Suramérica desde el primer kilómetro. La V-Strom 800 DE Travel integra sistema completo de equipaje de aventura, defensas y toda la electrónica S.I.R.S. de Suzuki.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido",
      displacement: 776,
      compression: "12.8 : 1",
      power: "83.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida Showa (220 mm recorrido)",
      rearSuspension: "Monoamortiguador Showa ajustable (220 mm recorrido)",
      frontBrake: "Doble disco de 310 mm con ABS desconectable",
      rearBrake: "Disco de 260 mm con ABS desconectable",
      seatHeight: "855 mm",
      groundClearance: "220 mm",
      weight: "242 kg",
      fuelCapacity: "20.0 Litros"
    })
  },

  // ==========================================
  // 3. ENDURO Y SUPERMOTARD (4 REFERENCIAS)
  // ==========================================
  {
    id: "dr-150-abs",
    name: "DR 150 ABS",
    category: "enduro",
    categoryLabel: "Enduro / Todo Terreno",
    badge: "DOBLE PROPÓSITO + ABS",
    badgeColor: "bg-[#003399]",
    featured: true,
    price: 10590000,
    displacement: 149,
    power: "12.2 HP @ 8.000 rpm",
    torque: "12.7 Nm @ 6.000 rpm",
    weight: "139 kg",
    fuelCapacity: "12.5 L",
    transmission: "5 Velocidades",
    abs: "Freno Disco Delantero ABS",
    bannerImage: "motos/DR-150-AMARILLA-1385x800_0.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/DR-150-AMARILLA-1385x800_0.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/DR-150-BLANCA-1385x800.png" },
      { name: "Gris", hex: "#64748B", image: "motos/DR-150-GRIS-1385x800.png" },
      { name: "Negra", hex: "#18181B", image: "motos/DR-150-NEGRA-1385x800.png" }
    ],
    technologies: ["Freno Delantero con Sistema ABS", "Suspensión Trasera Monoshock Articulada", "Tablero 100% Digital y Puerto USB", "Parrilla Trasera de Gran Capacidad", "Excelente Altura al Suelo"],
    description: "Diseñada para conquistar cualquier camino en Cúcuta, Los Patios, Villa del Rosario, El Zulia y las vías rurales de Norte de Santander. La DR 150 ABS ofrece postura erguida, suspensión suave y freno ABS delantero.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, refrigerado por aire",
      displacement: 149,
      compression: "9.3 : 1",
      power: "12.2 HP @ 8.000 rpm",
      torque: "12.7 Nm @ 6.000 rpm",
      transmission: "5 velocidades",
      frontSuspension: "Telescópica hidráulica con fuelles protectores",
      rearSuspension: "Monoamortiguador central",
      frontBrake: "Disco hidráulico con sistema ABS",
      rearBrake: "Campana de 130 mm",
      frontTire: "90/90-19",
      rearTire: "110/90-17",
      seatHeight: "839 mm",
      groundClearance: "244 mm",
      weight: "139 kg",
      fuelCapacity: "12.5 Litros"
    })
  },
  {
    id: "dr-160",
    name: "DR 160 X",
    category: "enduro",
    categoryLabel: "Enduro / Todo Terreno",
    badge: "INYECCIÓN ELECTRÓNICA + ABS",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 12599000,
    displacement: 162,
    power: "14.8 HP @ 8.000 rpm",
    torque: "14.0 Nm @ 6.500 rpm",
    weight: "138 kg",
    fuelCapacity: "12.0 L",
    transmission: "5 Velocidades",
    abs: "Freno Disco ABS + Doble Disco",
    bannerImage: "motos/DR-160-AZUL-1385x800_0.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/DR-160-AZUL-1385x800_0.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/DR-160-BLANCA-1385x800_0.png" },
      { name: "Negra", hex: "#18181B", image: "motos/DR-160-NEGRA-1385x800.png" },
      { name: "Roja", hex: "#DC2626", image: "motos/DR-160-ROJA-1385x800.png" }
    ],
    technologies: ["Inyección Electrónica Fuel Injection", "Frenos de Disco en Ambas Ruedas + ABS", "Iluminación LED Moderna", "Suspensión Monoshock Todo Terreno"],
    description: "Más potencia y tecnología para tus rutas multipropósito. La DR 160 incorpora motor de 162 cc con inyección electrónica, freno de disco en ambas ruedas y sistema ABS.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, Inyección Electrónica FI",
      displacement: 162,
      power: "14.8 HP @ 8.000 rpm",
      torque: "14.0 Nm @ 6.500 rpm",
      transmission: "5 velocidades",
      frontBrake: "Disco lobulado con ABS",
      rearBrake: "Disco lobulado",
      seatHeight: "835 mm",
      groundClearance: "240 mm",
      weight: "138 kg",
      fuelCapacity: "12.0 Litros"
    })
  },
  {
    id: "dr-z4s",
    name: "DR-Z4S DUAL SPORT",
    category: "enduro",
    categoryLabel: "Enduro / Dual Sport 400",
    badge: "NUEVA GENERACIÓN 400 CC",
    badgeColor: "bg-amber-600",
    featured: false,
    price: 50000000,
    displacement: 398,
    power: "38.0 HP @ 8.000 rpm",
    torque: "37.0 Nm @ 6.500 rpm",
    weight: "151 kg",
    fuelCapacity: "8.7 L",
    transmission: "5 Velocidades + Embrague Asistido SCAS",
    abs: "SIRS + Control Tracción + ABS Desconectable",
    bannerImage: "motos/DR-Z4S-AMARILLA.png",
    colors: [
      { name: "Amarilla", hex: "#EAB308", image: "motos/DR-Z4S-AMARILLA.png" },
      { name: "Gris", hex: "#475569", image: "motos/DR-Z4S-GRIS.png" }
    ],
    technologies: ["Inyección Electrónica Ride-by-Wire", "Suspensiones KYB de Largo Recorrido", "Selector de Modos SDMS y Control de Tracción STCS", "ABS Desconectable en Ambas Ruedas", "Farola Proyector Bi-LED"],
    description: "El regreso triunfal de un ícono del Enduro mundial totalmente renovado. La nueva Suzuki DR-Z4S incorpora inyección electrónica, acelerador electrónico, suspensiones KYB y control de tracción Off-Road.",
    specs: buildSpecs({
      engineType: "4 Tiempos, DOHC, monocilíndrico, refrigerado por líquido, doble bujía Iridium",
      displacement: 398,
      power: "38.0 HP @ 8.000 rpm",
      torque: "37.0 Nm @ 6.500 rpm",
      transmission: "5 velocidades con embrague antirrebote SCAS",
      frontSuspension: "Horquilla invertida KYB ajustable (280 mm de recorrido)",
      rearSuspension: "Monoamortiguador KYB ajustable (296 mm de recorrido)",
      frontBrake: "Disco de 270 mm con ABS desconectable",
      rearBrake: "Disco de 240 mm con ABS desconectable",
      seatHeight: "920 mm",
      groundClearance: "300 mm",
      weight: "151 kg",
      fuelCapacity: "8.7 Litros"
    })
  },
  {
    id: "dr-z4sm",
    name: "DR-Z4SM SUPERMOTARD",
    category: "altocilindraje",
    categoryLabel: "Supermotard 400",
    badge: "SUPERMOTARD OFICIAL 398 CC",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 50000000,
    displacement: 398,
    power: "38.0 HP @ 8.000 rpm",
    torque: "37.0 Nm @ 6.500 rpm",
    weight: "154 kg",
    fuelCapacity: "8.7 L",
    transmission: "5 Velocidades + Embrague SCAS",
    abs: "Rines 17\" + ABS Trasero Desconectable",
    bannerImage: "motos/DR-Z4SM-AZUL.png",
    colors: [
      { name: "Azul", hex: "#0284C7", image: "motos/DR-Z4SM-AZUL.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/DR-Z4SM-BLANCA.png" }
    ],
    technologies: ["Rines Supermotard de 17 Pulgadas con Neumáticos Sport", "Horquilla Invertida KYB de Cartucho Cerrado", "Sistema S.I.R.S. con 3 Modos de Motor", "Freno Delantero de 310 mm Flotante", "Iluminación Proyector Bi-LED"],
    description: "Diversión radical sobre el asfalto. La nueva Suzuki DR-Z4SM Supermotard combina la ligereza de un chasis de competición con rines de 17 pulgadas, freno delantero sobredimensionado de 310 mm y paquete electrónico S.I.R.S.",
    specs: buildSpecs({
      engineType: "4 Tiempos, DOHC, monocilíndrico, refrigerado por líquido",
      displacement: 398,
      power: "38.0 HP @ 8.000 rpm",
      torque: "37.0 Nm @ 6.500 rpm",
      transmission: "5 velocidades con embrague asistido y antirrebote SCAS",
      frontSuspension: "Horquilla invertida KYB totalmente ajustable (260 mm recorrido)",
      rearSuspension: "Monoamortiguador KYB totalmente ajustable (277 mm recorrido)",
      frontBrake: "Disco flotante de 310 mm con ABS",
      rearBrake: "Disco de 240 mm con ABS desconectable",
      frontTire: "120/70 R17",
      rearTire: "140/70 R17",
      seatHeight: "890 mm",
      weight: "154 kg",
      fuelCapacity: "8.7 Litros"
    })
  },

  // ==========================================
  // 4. AUTOMÁTICAS / SCOOTERS (4 REFERENCIAS)
  // ==========================================
  {
    id: "burgman-15",
    name: "NUEVA BURGMAN 15",
    category: "automaticas",
    categoryLabel: "Maxi Scooter Ejecutiva",
    badge: "¡POTENCIA CON CLASE! + ABS",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 15550000,
    displacement: 150,
    power: "13.5 HP @ 8.000 rpm",
    torque: "13.5 Nm @ 6.000 rpm",
    weight: "132 kg",
    fuelCapacity: "7.5 L",
    transmission: "Automática CVT",
    abs: "Sistema Antibloqueo de Frenos ABS",
    bannerImage: "motos/BURGMAN-15-BLANCA_0.png",
    colors: [
      { name: "Blanca", hex: "#F8FAFC", image: "motos/BURGMAN-15-BLANCA_0.png" },
      { name: "Negra", hex: "#18181B", image: "motos/BURGMAN-15-NEGRA_0.png" },
      { name: "Plateada", hex: "#94A3B8", image: "motos/BURGMAN-15-PLATEADA_0.png" }
    ],
    technologies: ["Sistema Antibloqueo de Frenos ABS", "Sistema Start-Stop Silencioso", "Encendido Inteligente Keyless", "Iluminación Full LED", "Amplio Baúl Bajo el Asiento y Puerto USB"],
    description: "¡Potencia con clase! La nueva Suzuki Burgman 15 eleva el estándar de las scooters ejecutivas con un diseño imponente, frenos ABS de serie, inyección electrónica de alto rendimiento y máximo confort para conductor y acompañante.",
    specs: buildSpecs({
      engineType: "4 Tiempos, monocilíndrico, SOHC, Inyección Electrónica Fuel Injection",
      displacement: 150,
      power: "13.5 HP @ 8.000 rpm",
      torque: "13.5 Nm @ 6.000 rpm",
      transmission: "Automática CVT",
      frontBrake: "Disco hidráulico con sistema ABS",
      rearBrake: "Disco hidráulico",
      seatHeight: "775 mm",
      weight: "132 kg",
      fuelCapacity: "7.5 Litros"
    })
  },
  {
    id: "burgman-fi",
    name: "BURGMAN FIT",
    category: "automaticas",
    categoryLabel: "Automáticas / Scooters",
    badge: "SCOOTER EJECUTIVA FI",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 10450000,
    displacement: 124,
    power: "8.6 HP @ 6.750 rpm",
    torque: "10.0 Nm @ 5.500 rpm",
    weight: "110 kg",
    fuelCapacity: "5.5 L",
    transmission: "Automática CVT",
    abs: "Frenado Combinado CBS + Disco",
    bannerImage: "motos/BURGMAN FI BLANCA.png",
    colors: [
      { name: "Blanca", hex: "#F8FAFC", image: "motos/BURGMAN FI BLANCA.png" },
      { name: "Negra", hex: "#1E293B", image: "motos/BURGMAN  FI NEGRA.png" },
      { name: "Dorada", hex: "#CA8A04", image: "motos/BURGMAN FI DORADA.png" },
      { name: "Verde", hex: "#15803D", image: "motos/BURGMAN FI VERDE.png" },
      { name: "Gris", hex: "#64748B", image: "motos/BURGMANFIGRIS.png" }
    ],
    technologies: ["Inyección Electrónica SEP", "Amplio Baúl Bajo el Asiento (21.5 L)", "Tablero Digital Multifunción", "Guantera con Cargador USB", "Iluminación LED Delantera y Trasera"],
    description: "Elegancia, confort ejecutivo y practicidad sin igual para la ciudad de Cúcuta. La Burgman FI ofrece apoyapiés extendidos, amplio baúl bajo el sillín y motor Fuel Injection ultra silencioso.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire forzado, SEP Fuel Injection",
      displacement: 124,
      power: "8.6 HP @ 6.750 rpm",
      torque: "10.0 Nm @ 5.500 rpm",
      transmission: "Automática CVT por correa en V",
      frontBrake: "Disco hidráulico con sistema combinado CBS",
      rearBrake: "Campana con freno de parqueo",
      seatHeight: "780 mm",
      weight: "110 kg",
      fuelCapacity: "5.5 Litros"
    })
  },
  {
    id: "avenis-125-fi",
    name: "AVENIS 125 FI",
    category: "automaticas",
    categoryLabel: "Automáticas / Scooters",
    badge: "SCOOTER DEPORTIVA FI",
    badgeColor: "bg-emerald-600",
    featured: false,
    price: 9699000,
    displacement: 124,
    power: "8.6 HP @ 6.750 rpm",
    torque: "10.0 Nm @ 5.500 rpm",
    weight: "106 kg",
    fuelCapacity: "5.2 L",
    transmission: "Automática CVT",
    abs: "Sistema de Frenado Combinado CBS",
    bannerImage: "motos/AVENIS BLANCA.png",
    colors: [
      { name: "Blanca", hex: "#F8FAFC", image: "motos/AVENIS BLANCA.png" },
      { name: "Dorado", hex: "#CA8A04", image: "motos/AVENIS DORADO.png" },
      { name: "Negra", hex: "#18181B", image: "motos/AVENIS NEGRA.png" }
    ],
    technologies: ["Tecnología SEP de Bajo Consumo", "Tapa de Combustible Externa Trasera", "Guantera con Puerto USB Integrado", "Diseño Aerodinámico Deportivo", "Tablero LCD Digital"],
    description: "Ágil, moderna y deportiva. Con solo 106 kg de peso e inyección electrónica SEP, la Suzuki Avenis 125 FI es perfecta para moverse rápido y con estilo por toda la ciudad.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, SEP Fuel Injection",
      displacement: 124,
      power: "8.6 HP @ 6.750 rpm",
      torque: "10.0 Nm @ 5.500 rpm",
      transmission: "Automática CVT",
      frontBrake: "Disco hidráulico con CBS",
      rearBrake: "Campana",
      seatHeight: "780 mm",
      weight: "106 kg",
      fuelCapacity: "5.2 Litros"
    })
  },
  {
    id: "address-fi",
    name: "ADDRESS NM FI",
    category: "automaticas",
    categoryLabel: "Automáticas / Scooters",
    badge: "LIGERA Y RENDIDORA",
    badgeColor: "bg-sky-600",
    featured: false,
    price: 8190000,
    displacement: 113,
    power: "8.7 HP @ 7.500 rpm",
    torque: "9.0 Nm @ 6.500 rpm",
    weight: "97 kg",
    fuelCapacity: "5.2 L",
    transmission: "Automática CVT",
    abs: "Freno de Disco Delantero",
    bannerImage: "motos/ADDRESS-NEGRA.png",
    colors: [
      { name: "Negra", hex: "#18181B", image: "motos/ADDRESS-NEGRA.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/ADRESS-BLANCA.png" },
      { name: "Plateada", hex: "#94A3B8", image: "motos/ADRESS-PLATEADA.png" }
    ],
    technologies: ["Solo 97 kg de Peso (Súper Maniobrable)", "Inyección Electrónica Fuel Injection", "Baúl de 20.6 Litros para Casco", "Rueda Delantera de 14 Pulgadas"],
    description: "La scooter automática más liviana y fácil de manejar de Suzuki. Su rueda delantera de 14 pulgadas absorbe mejor las irregularidades de la vía y su inyección electrónica rinde al máximo cada galón.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, Inyección Electrónica",
      displacement: 113,
      power: "8.7 HP @ 7.500 rpm",
      torque: "9.0 Nm @ 6.500 rpm",
      transmission: "Automática CVT",
      frontBrake: "Disco hidráulico",
      rearBrake: "Campana",
      seatHeight: "755 mm",
      weight: "97 kg",
      fuelCapacity: "5.2 Litros"
    })
  },

  // ==========================================
  // 5. SEMIAUTOMÁTICAS (1 REFERENCIA)
  // ==========================================
  {
    id: "viva-r-fi-abs",
    name: "VIVA FI ABS",
    category: "semiautomaticas",
    categoryLabel: "Semiautomáticas",
    badge: "INYECCIÓN FI + FRENO ABS",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 9399000,
    displacement: 113,
    power: "9.1 HP @ 8.000 rpm",
    torque: "9.1 Nm @ 6.000 rpm",
    weight: "99 kg",
    fuelCapacity: "3.7 L",
    transmission: "4 Vel. Semiautomática (Sin Clutch)",
    abs: "Freno Delantero ABS",
    bannerImage: "motos/VIVA-R-FI-ABS-AZUL-MATE.png",
    colors: [
      { name: "Azul Mate", hex: "#1E40AF", image: "motos/VIVA-R-FI-ABS-AZUL-MATE.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/VIVA-R-FI-ABS-BLANCA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/VIVA-R-FI-ABS-NEGRA.png" }
    ],
    technologies: ["Primera Semiautomática con Freno ABS", "Inyección Electrónica LEaP Technology", "Transmisión Rotativa Sin Embrague Manual", "Rines de Aleación Deportivos"],
    description: "La evolución de la legendaria familia Viva R. Ahora equipada con inyección electrónica de altísimo rendimiento y freno delantero ABS para brindarte la máxima seguridad y economía en Cúcuta.",
    specs: buildSpecs({
      engineType: "4 Tiempos, SOHC, refrigerado por aire, Inyección Electrónica FI",
      displacement: 113,
      power: "9.1 HP @ 8.000 rpm",
      torque: "9.1 Nm @ 6.000 rpm",
      transmission: "4 velocidades semiautomática centrífuga",
      frontBrake: "Disco hidráulico con sistema ABS",
      rearBrake: "Campana",
      seatHeight: "760 mm",
      weight: "99 kg",
      fuelCapacity: "3.7 Litros"
    })
  },

  // ==========================================
  // 6. ALTO CILINDRAJE (8 REFERENCIAS)
  // ==========================================
  {
    id: "gsx-8t",
    name: "NUEVA GSX-8T",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Neo-Retro",
    badge: "RETRO SPIRIT • RED DOT WINNER",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 63300000,
    displacement: 776,
    power: "82.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "201 kg",
    fuelCapacity: "16.5 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "SIRS + Horquilla Dorada KYB + ABS",
    bannerImage: "motos/GSX-8T-NARANJA.png",
    colors: [
      { name: "Naranja", hex: "#EA580C", image: "motos/GSX-8T-NARANJA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GSX-8T-NEGRA.png" },
      { name: "Verde", hex: "#15803D", image: "motos/GSX-8T-VERDE.png" }
    ],
    technologies: ["Ganadora Red Dot Design Award", "Motor Bicilíndrico 776 cc Cross Balancer", "Farola Redonda LED y Espejos Bar-End", "Quickshifter Bidireccional + 3 Modos SDMS", "Tanque de 16.5 Litros de Gran Autonomía"],
    description: "Retro Spirit, Next Generation Performance. La nueva Suzuki GSX-8T combina la estética clásica de las legendarias Suzuki de los años 70 con el motor bicilíndrico de 776 cc, horquilla invertida KYB y paquete electrónico S.I.R.S.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido, cigüeñal a 270°",
      displacement: 776,
      compression: "12.8 : 1",
      power: "82.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida KYB con botellas anodizadas",
      frontBrake: "Doble disco de 310 mm con pinzas radiales Nissin y ABS",
      seatHeight: "810 mm",
      weight: "201 kg",
      fuelCapacity: "16.5 Litros"
    })
  },
  {
    id: "gsx-8tt",
    name: "NUEVA GSX-8TT",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Café Racer",
    badge: "TIMELESS TENSION • CAFÉ RACER",
    badgeColor: "bg-amber-600",
    featured: false,
    price: 63300000,
    displacement: 776,
    power: "82.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "203 kg",
    fuelCapacity: "16.5 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "Cúpula Bikini Retro + SIRS + ABS",
    bannerImage: "motos/8TT-RIN-DORADO.png",
    colors: [
      { name: "Rin Dorado", hex: "#CA8A04", image: "motos/8TT-RIN-DORADO.png" },
      { name: "Rin Rojo", hex: "#DC2626", image: "motos/8TT-RIN-ROJO.png" }
    ],
    technologies: ["Carenado de Faro Estilo Café Racer", "Quilla Inferior Deportiva de Serie", "Rines en Acabado Especial Dorado o Rojo", "Quickshifter Bidireccional y Pantalla TFT 5\"", "Frenos Radiales Nissin de 310 mm"],
    description: "Inspirada en las míticas motos de competición de los años 70 y 80. La nueva Suzuki GSX-8TT añade cúpula frontal aerodinámica, quilla deportiva y acabados exclusivos en sus rines.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido",
      displacement: 776,
      compression: "12.8 : 1",
      power: "82.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida KYB",
      frontBrake: "Doble disco de 310 mm con pinzas radiales Nissin y ABS",
      seatHeight: "810 mm",
      weight: "203 kg",
      fuelCapacity: "16.5 Litros"
    })
  },
  {
    id: "gsx-8s",
    name: "GSX-8S",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Streetfighter",
    badge: "BICILÍNDRICA 776 CC + QUICKSHIFTER",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 55320000,
    displacement: 776,
    power: "82.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "202 kg",
    fuelCapacity: "14.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "SIRS + 3 Modos SDMS + Control Tracción",
    bannerImage: "motos/GSX-8S.png",
    colors: [
      { name: "Azul", hex: "#0055B8", image: "motos/GSX-8S.png" },
      { name: "Negra Roja", hex: "#B91C1C", image: "motos/GSX-8SNEGRA-ROJA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GSX-8SNEFGRA.png" }
    ],
    technologies: ["Motor Bicilíndrico 776 cc con Suzuki Cross Balancer", "Quickshifter Bidireccional de Serie", "Suspensión Invertida KYB", "Pinzas Radiales Nissin + ABS", "Pantalla TFT Color 5\""],
    description: "Pura adrenalina japonesa de nueva generación. La GSX-8S entrega un par motor instantáneo gracias a su cigüeñal calado a 270°, quickshifter bidireccional y chasis ágil.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido",
      displacement: 776,
      compression: "12.8 : 1",
      power: "82.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida KYB",
      frontBrake: "Doble disco de 310 mm con pinzas radiales de 4 pistones y ABS",
      seatHeight: "810 mm",
      weight: "202 kg",
      fuelCapacity: "14.0 Litros"
    })
  },
  {
    id: "gsx-8r",
    name: "GSX-8R",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Supersport",
    badge: "DEPORTIVA CARENADA 776 CC",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 57690000,
    displacement: 776,
    power: "82.0 HP @ 8.500 rpm",
    torque: "78.0 Nm @ 6.800 rpm",
    weight: "205 kg",
    fuelCapacity: "14.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "Suspensiones Showa SFF-BP + SIRS",
    bannerImage: "motos/GSX-8R-BLANCA_0.png",
    colors: [
      { name: "Blanca", hex: "#F8FAFC", image: "motos/GSX-8R-BLANCA_0.png" },
      { name: "Naranja", hex: "#EA580C", image: "motos/GSX-8R-NARANJA.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GSX-8R-NEGRA_0.png" }
    ],
    technologies: ["Carenado Deportivo de Túnel de Viento", "Horquilla Invertida Showa SFF-BP", "Semimanillares en Aluminio Forjado", "Quickshifter Bidireccional de Serie", "Pantalla TFT a Color de 5\""],
    description: "La nueva era de las deportivas carenadas de Suzuki. La GSX-8R combina prestaciones de circuito con una ergonomía deportiva utilizable todos los días y suspensiones Showa SFF-BP.",
    specs: buildSpecs({
      engineType: "4 Tiempos, bicilíndrico en paralelo DOHC, refrigerado por líquido",
      displacement: 776,
      compression: "12.8 : 1",
      power: "82.0 HP @ 8.500 rpm",
      torque: "78.0 Nm @ 6.800 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida Showa SFF-BP (Separate Function Fork - Big Piston)",
      frontBrake: "Doble disco de 310 mm con pinzas radiales Nissin de 4 pistones y ABS",
      seatHeight: "810 mm",
      weight: "205 kg",
      fuelCapacity: "14.0 Litros"
    })
  },
  {
    id: "gsx-s1000",
    name: "GSX-S1000",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Maxinaked",
    badge: "4 CILINDROS 999 CC • 150 HP",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 77990000,
    displacement: 999,
    power: "150.0 HP @ 11.000 rpm",
    torque: "106.0 Nm @ 9.250 rpm",
    weight: "214 kg",
    fuelCapacity: "19.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "Frenos Brembo + SIRS + TFT 5\"",
    bannerImage: "motos/GSX-S1000-AZUL.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GSX-S1000-AZUL.png" },
      { name: "Negra", hex: "#18181B", image: "motos/GSX-S-1000-NEGRA.png" },
      { name: "Roja", hex: "#DC2626", image: "motos/GSX-S-1000-ROJA.png" }
    ],
    technologies: ["Motor 4 Cilindros en Línea de 150 HP Derivado de GSX-R1000", "Pinzas Monobloque Radiales Brembo", "Quickshifter Bidireccional de Serie", "Chasis Doble Viga de Aluminio", "Faros LED Superpuestos Hexágonales"],
    description: "Agresividad extrema y músculo japonés de 4 cilindros. La Suzuki GSX-S1000 entrega 150 HP con el inconfundible sonido tetracilíndrico, frenos Brembo y chasis de aluminio derivado de Superbike.",
    specs: buildSpecs({
      engineType: "4 Tiempos, 4 cilindros en línea, DOHC, refrigerado por líquido",
      displacement: 999,
      compression: "12.2 : 1",
      power: "150.0 HP @ 11.000 rpm",
      torque: "106.0 Nm @ 9.250 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida KYB de 43 mm totalmente ajustable",
      frontBrake: "Doble disco de 310 mm con pinzas Brembo monobloque y ABS",
      seatHeight: "810 mm",
      weight: "214 kg",
      fuelCapacity: "19.0 Litros"
    })
  },
  {
    id: "gsx-s1000gx",
    name: "GSX-S1000GX",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Crossover",
    badge: "SUSPENSIÓN ELECTRÓNICA SAES",
    badgeColor: "bg-[#E30613]",
    featured: false,
    price: 89990000,
    displacement: 999,
    power: "150.0 HP @ 11.000 rpm",
    torque: "106.0 Nm @ 9.250 rpm",
    weight: "232 kg",
    fuelCapacity: "19.0 L",
    transmission: "6 Vel. + Quickshifter Bidireccional",
    abs: "Suspensión Activa Showa + IMU 6 Ejes",
    bannerImage: "motos/GSX-S1000GX AZUL.png",
    colors: [
      { name: "Azul", hex: "#0046AD", image: "motos/GSX-S1000GX AZUL.png" },
      { name: "Gris Roja", hex: "#64748B", image: "motos/GSX-S1000GX GRIS-ROJA.png" },
      { name: "Negro", hex: "#18181B", image: "motos/GSX-S1000GX NEGRO.png" }
    ],
    technologies: ["Motor 4 Cilindros en Línea de 150 HP", "Suspensión Electrónica Avanzada Suzuki (SAES)", "Estabilizador Adaptativo de Carretera (SRAS)", "Conectividad Smartphone mySPIN en TFT 6.5\"", "Control de Crucero Inteligente"],
    description: "La Crossover Sport Touring definitiva de Suzuki. Combina la potencia explosiva de un motor tetracilíndrico derivado de la GSX-R1000 con suspensión electrónica semiactiva Showa.",
    specs: buildSpecs({
      engineType: "4 Tiempos, 4 cilindros en línea, DOHC, refrigerado por líquido",
      displacement: 999,
      power: "150.0 HP @ 11.000 rpm",
      torque: "106.0 Nm @ 9.250 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional",
      frontSuspension: "Showa SFF-CA controlada electrónicamente (SAES)",
      frontBrake: "Doble disco de 310 mm con pinzas monobloque Brembo y ABS en curva",
      seatHeight: "845 mm",
      weight: "232 kg",
      fuelCapacity: "19.0 Litros"
    })
  },
  {
    id: "gsx-r1000r",
    name: "GSX-R 1000R",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Superbike",
    badge: "THE KING OF SPORTBIKES • 199 HP",
    badgeColor: "bg-[#003399]",
    featured: false,
    price: 85450000,
    displacement: 999,
    power: "199.2 HP @ 13.200 rpm",
    torque: "117.6 Nm @ 10.800 rpm",
    weight: "203 kg",
    fuelCapacity: "16.0 L",
    transmission: "6 Vel. + Quickshifter Racing",
    abs: "Distribución Variable SR-VVT + IMU",
    bannerImage: "motos/GSX R1000R.png",
    colors: [
      { name: "Azul Plata ECSTAR", hex: "#0055B8", image: "motos/GSX R1000R.png" }
    ],
    technologies: ["Distribución Variable de Válvulas SR-VVT de MotoGP", "Horquilla Showa Balance Free Front Fork (BFF)", "Launch Control y Quickshifter Bidireccional", "Pinzas Monobloque Radiales Brembo", "IMU de 6 Ejes con 10 Niveles de Control de Tracción"],
    description: "La reina de las Superbikes nacida directamente de la experiencia de Suzuki en MotoGP y el Mundial de Resistencia. Con 199.2 HP, distribución variable SR-VVT y suspensiones Showa BFF de competición.",
    specs: buildSpecs({
      engineType: "4 Tiempos, 4 cilindros en línea, DOHC, distribución variable SR-VVT",
      displacement: 999,
      compression: "13.2 : 1",
      power: "199.2 HP @ 13.200 rpm",
      torque: "117.6 Nm @ 10.800 rpm",
      transmission: "6 velocidades tipo cassette con Quickshifter bidireccional",
      frontSuspension: "Horquilla invertida Showa BFF (Balance Free Front Fork)",
      rearSuspension: "Monoamortiguador Showa BFRC lite",
      frontBrake: "Doble disco Brembo T-Drive de 320 mm con ABS en curva",
      seatHeight: "825 mm",
      weight: "203 kg",
      fuelCapacity: "16.0 Litros"
    })
  },
  {
    id: "hayabusa-gsx1300r",
    name: "HAYABUSA",
    category: "altocilindraje",
    categoryLabel: "Alto Cilindraje / Hyper-Sport",
    badge: "LA LEYENDA HYPER-SPORT 1340 CC",
    badgeColor: "bg-amber-600",
    featured: false,
    price: 103500000,
    displacement: 1340,
    power: "188.0 HP @ 9.700 rpm",
    torque: "150.0 Nm @ 7.000 rpm",
    weight: "264 kg",
    fuelCapacity: "20.0 L",
    transmission: "6 Vel. + Launch Control + Quickshifter",
    abs: "Brembo Stylema + IMU 6 Ejes",
    bannerImage: "motos/HAYABUSA NEGRA.png",
    colors: [
      { name: "Negra", hex: "#0F172A", image: "motos/HAYABUSA NEGRA.png" },
      { name: "Azul", hex: "#0046AD", image: "motos/HAYABUSA AZUL.png" },
      { name: "Blanca", hex: "#F8FAFC", image: "motos/HAYABUSA BLANCA.png" },
      { name: "Gris", hex: "#64748B", image: "motos/HAYABUSA GRIS.png" }
    ],
    technologies: ["Motor 4 Cilindros 1.340 cc de 188 HP", "Frenos Brembo Stylema de 320 mm", "Launch Control (Control de Salida) y Anti-Wheelie", "Limitador Activo de Velocidad y Crucero", "Aerodinámica de Halcón Peregrino"],
    description: "El máximo exponente de la ingeniería japonesa de Hamamatsu. La legendaria Suzuki Hayabusa de tercera generación domina la velocidad con una aerodinámica insuperable, frenos Brembo Stylema y el paquete electrónico SIRS más avanzado.",
    specs: buildSpecs({
      engineType: "4 Tiempos, 4 cilindros en línea, DOHC, 16 válvulas, refrigerado por líquido",
      displacement: 1340,
      compression: "12.5 : 1",
      power: "188.0 HP @ 9.700 rpm",
      torque: "150.0 Nm @ 7.000 rpm",
      transmission: "6 velocidades con Quickshifter bidireccional y embrague SCAS",
      frontSuspension: "Horquilla invertida KYB con recubrimiento DLC totalmente ajustable",
      frontBrake: "Doble disco de 320 mm con pinzas Brembo Stylema de 4 pistones y ABS en curva",
      rearBrake: "Disco ventilado Nissin con ABS",
      seatHeight: "800 mm",
      weight: "264 kg",
      fuelCapacity: "20.0 Litros"
    })
  }
];

// Testimonios de Clientes (Guiado en la sección "Lo Que Dicen Nuestros Clientes", adaptado a Suzuki Cúcuta)
const CLIENT_TESTIMONIALS = [
  {
    name: "Carlos Andrés Restrepo",
    bike: "Gixxer 250 ABS",
    date: "Cúcuta • Hace 2 meses",
    rating: 5,
    quote: "Compré mi Gixxer 250 en Suzuki Cúcuta sobre la Av. 11 E #5 09, Br. Colsag y la atención fue impecable. Me explicaron todo sobre la moto, me ayudaron con la documentación y el proceso de entrega fue muy rápido. La moto es una bestia en ciudad."
  },
  {
    name: "Juan Pablo Mejía",
    bike: "V-Strom 250 SX",
    date: "Cúcuta / Chinácota • Hace 1 mes",
    rating: 5,
    quote: "Buscaba una moto para viajar por Norte de Santander y Colombia, y la V-Strom 250 SX fue la elección perfecta. Ya hice el viaje a Chinácota, Pamplona y Bucaramanga sin ningún problema. Excelente asesoría del equipo de Suzuki Cúcuta."
  },
  {
    name: "María Alejandra Contreras",
    bike: "DR 150 FI ABS & Burgman 15",
    date: "Los Patios / Cúcuta • Reciente",
    rating: 5,
    quote: "Saqué mi moto financiada en la sede de la Av. 11 E #5 09, Br. Colsag y me aprobaron el crédito súper rápido. Además el servicio técnico autorizado y el stock de repuestos originales ECSTAR te dan total tranquilidad."
  }
];

// Artículos para la sección "Últimas Entradas" (Blog y Novedades en Cúcuta)
const BLOG_POSTS = [
  {
    id: "post-socs-sep-suzuki",
    title: "Tecnologías SEP y SOCS: Por qué los motores Suzuki son líderes en rendimiento en el clima cálido de Cúcuta",
    category: "Tecnología Suzuki",
    date: "24 de Octubre, 2026",
    readTime: "4 min de lectura",
    image: "motos/GIXXER-250-AZUL-2026_0.png",
    excerpt: "Conoce cómo el sistema de refrigeración por aceite SOCS de la Gixxer 250 y V-Strom 250 SX mantiene la temperatura óptima incluso en el tráfico de Cúcuta.",
    content: `
      <p class="mb-4">En <strong>Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander)</strong> sabemos que el clima cálido de la Perla del Norte exige motores con una gestión térmica superior y un consumo de combustible altamente eficiente.</p>
      <h4 class="text-lg font-bold text-slate-900 mt-5 mb-2">¿Qué es el sistema SOCS (Suzuki Oil Cooling System)?</h4>
      <p class="mb-4">Desarrollado en Hamamatsu para las referencias de 250 cc (<strong>Gixxer 250 y V-Strom 250 SX</strong>), este sistema hace circular aceite a alta velocidad por chaquetas independientes alrededor de la cámara de combustión, logrando enfriar el motor de forma rápida, reduciendo el peso total y mejorando la entrega de sus 26.1 caballos de fuerza.</p>
      <h4 class="text-lg font-bold text-slate-900 mt-5 mb-2">SEP: Suzuki Eco Performance</h4>
      <p class="mb-4">Presente en las líneas <strong>Gixxer 150 FI, Burgman FI, Avenis y Address</strong>, optimiza la admisión e inyección electrónica para entregar aceleración contundente con uno de los consumos por galón más económicos de Colombia.</p>
    `
  },
  {
    id: "post-nuevos-lanzamientos-suzuki",
    title: "Nuevas Burgman 15, GN 160 RL y GSX-8T: Conoce los lanzamientos que revolucionan Suzuki Cúcuta",
    category: "Lanzamientos",
    date: "18 de Octubre, 2026",
    readTime: "5 min de lectura",
    image: "motos/GSX-8T-NARANJA.png",
    excerpt: "Tres nuevas integrantes llegan a nuestra vitrina de la Av. 11 E #5 09, Br. Colsag con frenos ABS de serie, diseño premiado e ingeniería japonesa de última generación.",
    content: `
      <p class="mb-4">Ya están disponibles para cotización en <strong>Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag)</strong> los tres lanzamientos más esperados del portafolio Suzuki:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Nueva Burgman 15:</strong> ¡Potencia con clase! Equipada con sistema antibloqueo de frenos ABS y un diseño ejecutivo de 150 cc.</li>
        <li><strong>Nueva GN 160 RL:</strong> El espíritu clásico indestructible de la familia GN evoluciona a 160 cc con frenos ABS y estética Neo-Retro en colores Gris, Negra y Roja.</li>
        <li><strong>Nueva GSX-8T y GSX-8TT:</strong> Ganadora del Red Dot Design Award, combina el motor bicilíndrico de 776 cc con una presencia retro inconfundible.</li>
      </ul>
    `
  },
  {
    id: "post-comparativa-rutas-norte-santander",
    title: "¿Gixxer 250, DR 150 ABS o V-Strom 250 SX? Elige tu Suzuki ideal según tus rutas en Cúcuta",
    category: "Guía de Compra",
    date: "05 de Octubre, 2026",
    readTime: "5 min de lectura",
    image: "motos/V-STROM_250SX-2027-AMARILLA.png",
    excerpt: "Te ayudamos a comparar nuestras tres motocicletas más vendidas en Cúcuta para que elijas según tu estilo de vida: ciudad, trocha o viajes por carretera.",
    content: `
      <p class="mb-4">Uno de nuestros pilares en <strong>Suzuki Cúcuta</strong> es brindarte <strong>Asesoría Personalizada</strong> para encontrar la moto ideal según tu estilo de vida y necesidades en Norte de Santander:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Suzuki GN 125 ABS, GN 160 RL y DR 150 ABS:</strong> Ideales si buscas economía, resistencia legendaria y versatilidad para el trabajo diario o vías destapadas hacia El Zulia, San Cayetano o zonas rurales.</li>
        <li><strong>Suzuki Gixxer 150 FI ABS y Gixxer 250:</strong> Perfectas si tu prioridad es la agilidad deportiva en las avenidas de Cúcuta (Av. 11 E #5 09, Br. Colsag, Av. Libertadores, Av. Cero) y potencia en carretera.</li>
        <li><strong>Suzuki V-Strom 160 y V-Strom 250 SX:</strong> Diseñadas para los amantes del turismo y la aventura que viajan con acompañante y maletas hacia Chinácota, Bochalema, Pamplona u Ocaña.</li>
      </ul>
    `
  }
];

// Recomendaciones Oficiales Suzuki Cúcuta
const RECOMMENDATIONS = [
  {
    icon: "droplets",
    tag: "LUBRICACIÓN ECSTAR",
    tagColor: "text-[#003399] bg-blue-50 border-blue-200",
    title: "Protección del Motor con Aceite ECSTAR",
    description: "Utilizar siempre el lubricante original ECSTAR y filtros genuinos Suzuki garantiza la temperatura óptima de operación y extiende la vida útil del motor en el clima cálido de Cúcuta.",
    points: [
      "Realiza el cambio de aceite según el kilometraje indicado en tu manual de garantía Suzuki.",
      "Verifica periódicamente el nivel de aceite en el visor o medidor con la moto nivelada.",
      "Exige siempre filtros de aceite y aire 100% originales en nuestro almacén de la Av. 11 E #5 09, Br. Colsag."
    ]
  },
  {
    icon: "wrench",
    tag: "GARANTÍA DE FÁBRICA",
    tagColor: "text-red-600 bg-red-50 border-red-200",
    title: "Despegue y Revisiones en Taller Certificado",
    description: "Todas nuestras motos cuentan con garantía respaldada directamente por Suzuki Motor de Colombia. Cumple puntualmente con las revisiones programadas en nuestro Servicio Técnico Especializado.",
    points: [
      "Asiste puntualmente a tu primera revisión de garantía a los 1.000 km.",
      "Evita forzar las revoluciones al máximo durante el periodo inicial de asentamiento del motor.",
      "Agenda tu cita en nuestro taller de Suzuki Cúcuta (Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander)."
    ]
  },
  {
    icon: "check-circle-2",
    tag: "INSPECCIÓN PREVENTIVA",
    tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    title: "Chequeo Rápido Antes de Rodar",
    description: "Dedicar 2 minutos antes de encender tu motocicleta Suzuki previene desgastes prematuros y garantiza tu seguridad vial en Cúcuta y Norte de Santander.",
    points: [
      "Verifica la presión de las llantas en frío según la etiqueta del basculante.",
      "Comprueba el nivel del líquido de frenos y el estado de las pastillas del sistema ABS.",
      "Limpia, lubrica y tensiona la cadena de transmisión cada 500 kilómetros."
    ]
  },
  {
    icon: "shield-check",
    tag: "SEGURIDAD VIAL",
    tagColor: "text-amber-700 bg-amber-50 border-amber-200",
    title: "Conducción Segura y Equipamiento",
    description: "Tu bienestar y el de tu acompañante son lo más importante. Utiliza siempre casco certificado bajo norma ECE 22.06 o DOT y elementos de protección.",
    points: [
      "Aprovecha la seguridad del freno ABS de tu Suzuki aplicando ambos frenos de forma progresiva.",
      "Mantén encendida la iluminación LED para ser visible en todo momento en la vía.",
      "Adquiere accesorios, maleteros y defensas originales en nuestra vitrina de Suzuki Cúcuta."
    ]
  }
];

// Preguntas Frecuentes
const FAQS = [
  {
    category: "documentos",
    question: "¿Qué documentos necesito para comprar una moto en Suzuki Cúcuta?",
    answer: "Necesitas tu cédula de ciudadanía vigente, un recibo de servicio público reciente y comprobante de ingresos. Si vas a financiar con nuestras entidades aliadas (ProgreSER, Sufi, Banco de Bogotá, Addi, Sistecrédito, entre otras), también podemos realizar estudio inicial solo con tu cédula o solicitarte extractos bancarios de los últimos 3 meses según tu perfil."
  },
  {
    category: "matricula",
    question: "¿Cuánto cuesta el traspaso y la matrícula de la moto en Cúcuta?",
    answer: "Los costos de matrícula varían según el cilindraje de la moto y las tarifas vigentes de los organismos de tránsito de Cúcuta y Norte de Santander (Secretaría de Tránsito de Cúcuta, Los Patios o Villa del Rosario). En Suzuki Cúcuta te entregamos un desglose detallado de matrícula y SOAT antes de la compra para que no tengas sorpresas."
  },
  {
    category: "ubicacion",
    question: "¿Dónde está ubicado el concesionario oficial Suzuki Cúcuta y cuáles son sus horarios?",
    answer: "Estamos ubicados estratégicamente en la Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander, una de las principales arterias comerciales y de fácil acceso desde cualquier punto de la ciudad. Atendemos de Lunes a Viernes de 8:00 a.m. a 6:00 p.m. y los Sábados de 8:00 a.m. a 3:00 p.m."
  },
  {
    category: "garantia",
    question: "¿Qué respaldo de garantía y servicio técnico tienen las motocicletas en Suzuki Cúcuta?",
    answer: "Todas nuestras motocicletas cuentan con Garantía de Fábrica respaldada directamente por Suzuki Motor de Colombia. Además, en nuestra sede de la Av. 11 E #5 09, Br. Colsag contamos con Servicio Técnico Especializado con técnicos certificados por Suzuki, equipos de diagnóstico de última generación y stock permanente de repuestos originales."
  },
  {
    category: "repuestos",
    question: "¿Cómo puedo agendar una cita de taller o cotizar un repuesto original Suzuki?",
    answer: "Puedes hacerlo directamente desde esta página web haciendo clic en los botones 'Agendar Taller' o 'Cotizar Repuesto Original'. Tu solicitud llegará de inmediato a nuestro WhatsApp oficial de atención en Cúcuta para confirmarte turno o disponibilidad de la pieza."
  }
];

// Sede Oficial en Cúcuta para la Ficha de Ubicación
const CUCUTA_LOCATIONS = [
  {
    id: "sede-cucuta",
    name: "Sede Principal — Suzuki Cúcuta",
    badge: "CONCESIONARIO OFICIAL + SERVICIO TÉCNICO + REPUESTOS ECSTAR",
    address: "Av. 11 E #5 09, Br. Colsag, Cúcuta, Norte de Santander",
    reference: "Ubicados en el exclusivo sector comercial del Barrio Colsag (Avenida 11E #5-09), de fácil acceso y excelente conectividad en San José de Cúcuta.",
    neighborhood: "Barrio Colsag — Avenida 11E",
    city: "San José de Cúcuta, Norte de Santander, Colombia",
    coordinates: "7.8891° N, 72.4967° O",
    phone: "+57 314 382 6181",
    phoneVentas: "+57 314 382 6181",
    phoneTaller: "+57 314 382 6181",
    phoneRepuestos: "+57 314 382 6181",
    whatsapp: "573143826181",
    hoursWeekdays: "Lunes a Viernes: 8:00 a.m. – 12:30 p.m. y 2:00 p.m. – 6:00 p.m.",
    hoursSaturday: "Sábados: 8:00 a.m. – 3:00 p.m. (Jornada Continua)",
    hoursSunday: "Domingos y Festivos: Atención digital por WhatsApp Oficial",
    landmarks: [
      "Sobre la Avenida 11E #5-09, Barrio Colsag",
      "Sector comercial central y seguro en Colsag, Cúcuta",
      "Zona de parqueo para clientes de vitrina y taller"
    ],
    services: [
      "Vitrina de las 29 Motocicletas Nuevas Suzuki",
      "Servicio Técnico Certificado con Escáner SDS-II",
      "Almacén de Repuestos Genuinos y Aceite ECSTAR",
      "Crédito Inmediato, Financiación y Trámites de Matrícula / SOAT"
    ],
    mapEmbedUrl: "https://maps.google.com/maps?q=Av.%2011%20E%20%235%2009%2C%20Br.%20Colsag%2C%20C%C3%BAcuta%2C%20Norte%20de%20Santander&t=m&z=17&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Av.+11+E+%235+09,+Br.+Colsag,+C%C3%BAcuta,+Norte+de+Santander",
    wazeLink: "https://waze.com/ul?q=Av.%2011%20E%205-09%20Colsag%20Cucuta&navigate=yes"
  }
];
