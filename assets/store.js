const CATEGORIES = [
  {id:'audio-tv', name:'Audio y TV', group:'hogar'},
  {id:'aires', name:'Aires Acondicionados', group:'hogar'},
  {id:'refrigeracion', name:'Refrigeración', group:'hogar'},
  {id:'electrodomesticos', name:'Electrodomésticos', group:'hogar'},
  {id:'lavado', name:'Lavado', group:'hogar'},
  {id:'cocina', name:'Cocina', group:'hogar'},
  {id:'tecnologia', name:'Tecnología', group:'hogar'},
  {id:'hogar', name:'Hogar', group:'hogar'},
  {id:'dama', name:'Ropa Dama', group:'moda'},
  {id:'caballeros', name:'Ropa Caballeros', group:'moda'},
  {id:'kids', name:'Ropa Niños', group:'moda'},
  {id:'calzado', name:'Calzado', group:'moda'}
];

const CATEGORY_GROUPS = [
  {id:'hogar', label:'Hogar y Tecnología'},
  {id:'moda', label:'Moda'}
];

const CATEGORY_ICONS = {
  'audio-tv':'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
  'aires':'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10v4M12 10v4M17 10v4"/>',
  'refrigeracion':'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h6M9 12h6M9 18h6"/>',
  'electrodomesticos':'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  'lavado':'<circle cx="8" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h6.2a2 2 0 0 0 2-1.6L20 8H6"/>',
  'cocina':'<path d="M6 3v7a3 3 0 0 0 6 0V3M9 10v11M17 3c-2 2-2 6 0 8v10"/>',
  'tecnologia':'<rect x="4" y="3" width="16" height="12" rx="1"/><path d="M9 21h6M12 15v6"/>',
  'hogar':'<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  'dama':'<path d="M12 2l3 4-2 2 4 13H7L11 8 9 6z"/>',
  'caballeros':'<path d="M8 4L4 6l1 4 2-1v10h10V9l2 1 1-4-4-2-3 2-3-2z"/>',
  'kids':'<circle cx="12" cy="12" r="8"/><path d="M9 14c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2M9 9.5h.01M15 9.5h.01"/>',
  'calzado':'<path d="M3 19v-3.5c0-1 .6-1.9 1.5-2.3L9 11l2.5-3 2 1.5-1.5 2 5 2c1.2.5 2 1.6 2 3v2.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>'
};

function initMegaMenu(){
  const panel = document.getElementById('megaPanel');
  if(panel){
    panel.innerHTML = CATEGORY_GROUPS.map(g => `
      <div class="mega-col">
        <h4>${g.label}</h4>
        ${CATEGORIES.filter(c => c.group === g.id).map(c => `
          <a href="catalogo.html?categoria=${c.id}" class="mega-link">
            <span class="mega-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${CATEGORY_ICONS[c.id] || ''}</svg></span>
            ${c.name}
          </a>`).join('')}
      </div>`).join('') + `
      <div class="mega-col mega-promo">
        <h4>Destacado</h4>
        <a href="membresias.html" class="mega-promo-card">
          <span>KUBO Prime</span>
          <p>Envío gratis y cashback en cada compra</p>
        </a>
      </div>`;
  }

  const mobileList = document.getElementById('mobileCatList');
  if(mobileList){
    mobileList.innerHTML = CATEGORY_GROUPS.map(g => `
      <div class="mcat-group">
        <span class="mcat-label">${g.label}</span>
        ${CATEGORIES.filter(c => c.group === g.id).map(c => `
          <a href="catalogo.html?categoria=${c.id}" class="mcat-link">
            <span class="mega-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${CATEGORY_ICONS[c.id] || ''}</svg></span>
            ${c.name}
          </a>`).join('')}
      </div>`).join('');
  }
}

const PRODUCTS = [
  {id:1, name:'Televisor QLED KUBO 50" Google TV', brand:'KUBO', categoria:'audio-tv', price:429.99, old:499.99, tag:'-14%', stock:12, desc:'Pantalla QLED de 50 pulgadas con resolución 4K, Google TV integrado y control por voz. Ideal para streaming y gaming.'},
  {id:2, name:'Televisor Smart HD 32"', brand:'SJ ELECTRONICS', categoria:'audio-tv', price:169.99, stock:20, desc:'Televisor LED Smart HD de 32 pulgadas, liviano y compacto, perfecto para cuartos y cocinas.'},
  {id:3, name:'Televisor LED 4K 65" Google TV', brand:'JVC', categoria:'audio-tv', price:649.99, stock:6, desc:'Televisor 4K UHD de 65 pulgadas con Google TV, HDR10 y sonido envolvente Dolby Audio.'},
  {id:4, name:'Bocina recargable 12" 300W', brand:'SJ ELECTRONICS', categoria:'audio-tv', price:469.99, stock:9, desc:'Altavoz recargable de gran potencia con luces LED, bluetooth y entrada para micrófono.'},
  {id:5, name:'Corneta portátil XBOOM XL5S', brand:'LG', categoria:'audio-tv', price:528.99, stock:5, desc:'Sonido potente portátil con efectos de luz sincronizados y resistencia al agua IPX4.'},
  {id:6, name:'Aire split inverter 18.000 BTU', brand:'CONDESA', categoria:'aires', price:652.00, stock:7, desc:'Aire acondicionado tipo split con tecnología inverter, bajo consumo eléctrico y control remoto.'},
  {id:7, name:'Aire split 12000BTU blanco', brand:'KEYTON', categoria:'aires', price:329.99, old:379.99, tag:'-13%', stock:14, desc:'Split de 12000 BTU ideal para habitaciones medianas, instalación estándar incluida en catálogo.'},
  {id:8, name:'Aire split 30000BTU V220', brand:'CONDESA', categoria:'aires', price:769.99, stock:4, desc:'Aire de alta capacidad para espacios grandes, funcionamiento silencioso y filtro antibacterial.'},
  {id:9, name:'Aire split inverter 25000BTU Smart', brand:'CONDESA', categoria:'aires', price:589.99, stock:8, desc:'Control inteligente desde app móvil, modo eco y enfriamiento rápido.'},
  {id:10, name:'Refrigerador No-Frost 463L', brand:'FRIGILUX', categoria:'refrigeracion', price:1144.00, stock:3, desc:'Refrigerador de gran capacidad con sistema No-Frost, dispensador de agua y organizador interno.'},
  {id:11, name:'Nevera ejecutiva Acero Inoxidable', brand:'CONDESA', categoria:'refrigeracion', price:229.99, stock:11, desc:'Nevera compacta ideal para oficinas y apartamentos pequeños, acabado en acero inoxidable.'},
  {id:12, name:'Refrigerador Bespoke 28 pies', brand:'SAMSUNG', categoria:'refrigeracion', price:3840.99, stock:2, desc:'Refrigerador premium con paneles personalizables, doble puerta y tecnología de enfriamiento óptimo.'},
  {id:13, name:'Vinera de mesa 12 botellas', brand:'VETRUX', categoria:'refrigeracion', price:252.00, stock:6, desc:'Vinera compacta con control de temperatura para hasta 12 botellas, panel táctil digital.'},
  {id:14, name:'Refrigerador top freezer 200L', brand:'LG', categoria:'refrigeracion', price:399.99, stock:9, desc:'Refrigerador de dos puertas con congelador superior, bajo consumo energético.'},
  {id:15, name:'Licuadora 1.5 litros blanca', brand:'DAEWOO', categoria:'electrodomesticos', price:24.99, stock:35, desc:'Licuadora de vaso plástico resistente, 3 velocidades y cuchillas de acero inoxidable.'},
  {id:16, name:'Cafetera espresso automática', brand:'KUBO', categoria:'electrodomesticos', price:249.99, old:299.99, tag:'-17%', stock:10, desc:'Cafetera automática con espumador de leche integrado y depósito de agua extraíble de 1.2L.'},
  {id:17, name:'Batidora Classic 4.25 litros', brand:'KITCHENAID', categoria:'electrodomesticos', price:480.99, stock:5, desc:'Batidora de pie con bol de acero inoxidable, 10 velocidades y accesorios intercambiables.'},
  {id:18, name:'Plancha a vapor azul', brand:'HAMILTON BEACH', categoria:'electrodomesticos', price:36.00, stock:22, desc:'Plancha a vapor con suela antiadherente y control de temperatura ajustable.'},
  {id:19, name:'Ventilador recargable 2 velocidades', brand:'ROYAL', categoria:'electrodomesticos', price:69.00, stock:18, desc:'Ventilador portátil recargable, ideal para cortes eléctricos, hasta 8 horas de autonomía.'},
  {id:20, name:'Lavadora automática 18Kg', brand:'WHIRLPOOL', categoria:'lavado', price:759.99, old:849.99, tag:'-11%', stock:6, desc:'Lavadora de carga superior con sistema Xpert, gran capacidad para familias numerosas.'},
  {id:21, name:'Lavadora doble tina 10Kg', brand:'PHILCO', categoria:'lavado', price:259.99, stock:13, desc:'Lavadora doble tina económica con temporizador y centrifugado independiente.'},
  {id:22, name:'Lavadora automática Condesa 10Kg', brand:'CONDESA', categoria:'lavado', price:249.99, stock:9, desc:'Lavadora automática de carga superior, múltiples programas de lavado.'},
  {id:23, name:'Campana curva 90cm acero', brand:'WHITE WESTINGHOUSE', categoria:'cocina', price:229.99, stock:8, desc:'Campana extractora curva con control touch y filtro de aluminio lavable.'},
  {id:24, name:'Horno eléctrico Elektro Pro 90cm', brand:'VETRUX', categoria:'cocina', price:1016.00, stock:3, desc:'Horno eléctrico empotrable de gran capacidad con función de convección.'},
  {id:25, name:'Microondas empotrable 45L', brand:'VETRUX', categoria:'cocina', price:464.00, stock:7, desc:'Microondas empotrable con grill y panel digital, capacidad de 45 litros.'},
  {id:26, name:'Router WiFi 6 AX1500', brand:'MERCUSYS', categoria:'tecnologia', price:73.00, tag:'Popular', stock:26, desc:'Router de doble banda con WiFi 6, ideal para hogares con múltiples dispositivos conectados.'},
  {id:27, name:'Impresora Smart Tank 580', brand:'HP', categoria:'tecnologia', price:299.99, stock:6, desc:'Impresora multifuncional con tanque de tinta continuo y conexión WiFi.'},
  {id:28, name:'Cámara domo 2.8mm', brand:'DAHUA', categoria:'tecnologia', price:34.00, stock:20, desc:'Cámara de seguridad tipo domo, visión nocturna y resolución HD.'},
  {id:29, name:'UPS 1500VA 6 tomas', brand:'MARSRIVA', categoria:'tecnologia', price:180.00, stock:11, desc:'Sistema de respaldo eléctrico con 6 tomas y protección contra picos de voltaje.'},
  {id:30, name:'Juego de sábanas King 4 piezas', brand:'AVON HILL', categoria:'hogar', price:12.99, stock:40, desc:'Juego de sábanas suaves de microfibra, tamaño King, 4 piezas incluidas.'},
  {id:31, name:'Almohada Clínica Health Tech', brand:'HEALTH TECH', categoria:'hogar', price:2.98, stock:60, desc:'Almohada ortopédica de espuma, brinda soporte cervical durante el descanso.'},
  {id:32, name:'Juego de edredón 3 piezas', brand:'GENÉRICO', categoria:'hogar', price:16.99, stock:24, desc:'Edredón reversible de 3 piezas, tamaño Full/Queen, fácil de lavar.'},
  {id:33, name:'Vestido casual manga larga', brand:'ZAFIRO', categoria:'dama', price:18.99, stock:30, desc:'Vestido casual de tela suave, ideal para el día a día, disponible en varias tallas.'},
  {id:34, name:'Blusa básica de algodón', brand:'ZAFIRO', categoria:'dama', price:9.99, old:12.99, tag:'-23%', stock:40, desc:'Blusa básica de algodón, corte cómodo y versátil para combinar con cualquier outfit.'},
  {id:35, name:'Jean skinny tiro alto', brand:'DENIM CO', categoria:'dama', price:22.99, stock:26, desc:'Jean de tiro alto con corte skinny, tela stretch para mayor comodidad.'},
  {id:36, name:'Camisa manga larga slim fit', brand:'URBAN LINE', categoria:'caballeros', price:16.99, stock:32, desc:'Camisa slim fit de algodón, ideal para looks casuales o formales.'},
  {id:37, name:'Franela básica cuello redondo', brand:'URBAN LINE', categoria:'caballeros', price:7.99, stock:50, desc:'Franela de algodón 100%, corte clásico, disponible en varios colores.'},
  {id:38, name:'Pantalón jean recto', brand:'DENIM CO', categoria:'caballeros', price:24.99, old:29.99, tag:'-17%', stock:20, desc:'Pantalón jean de corte recto, resistente para uso diario.'},
  {id:39, name:'Conjunto deportivo niño 2 piezas', brand:'KIDS FUN', categoria:'kids', price:13.99, stock:28, desc:'Conjunto deportivo de franela y pantalón, tela suave ideal para el juego diario.'},
  {id:40, name:'Vestido estampado niña', brand:'KIDS FUN', categoria:'kids', price:11.99, stock:24, desc:'Vestido con estampado divertido, tela fresca ideal para el clima cálido.'},
  {id:41, name:'Zapatos deportivos unisex', brand:'RUNFAST', categoria:'calzado', price:28.99, old:34.99, tag:'-17%', stock:18, desc:'Zapatos deportivos con suela antideslizante y plantilla acolchada.'},
  {id:42, name:'Sandalias casuales dama', brand:'ZAFIRO', categoria:'calzado', price:14.99, stock:22, desc:'Sandalias cómodas de uso diario, diseño versátil y ligero.'},
  {id:43, name:'Zapatos formales caballero', brand:'URBAN LINE', categoria:'calzado', price:32.99, stock:15, desc:'Zapatos formales de cuero sintético, ideales para la oficina o eventos.'}
];

const SKU_PREFIX = {
  'audio-tv':'AUD', 'aires':'AC', 'refrigeracion':'REF', 'electrodomesticos':'ELE',
  'lavado':'LAV', 'cocina':'COC', 'tecnologia':'TEC', 'hogar':'HOG',
  'dama':'DAM', 'caballeros':'CAB', 'kids':'KID', 'calzado':'CAL'
};
PRODUCTS.forEach(p => {
  const prefix = SKU_PREFIX[p.categoria] || 'GEN';
  p.sku = `KUBO-${prefix}-${String(p.id).padStart(4,'0')}`;
});

function findProduct(id){ return PRODUCTS.find(p => p.id === Number(id)); }
function brandOf(name){ return name; }

function cubeIconSVG(seed){
  const s = seed % 4;
  const colors = [
    ['#0B0B0C','0.10','#0B0B0C','0.06','#F5C518','1'],
    ['#F5C518','0.9','#0B0B0C','0.08','#F5C518','1'],
    ['#0B0B0C','0.08','#F5C518','0.5','#F5C518','1'],
    ['#0B0B0C','0.12','#0B0B0C','0.05','#FFDD55','1']
  ][s];
  return `<svg viewBox="0 0 200 200"><path d="M100 15 L175 55 L100 95 L25 55 Z" fill="${colors[0]}" opacity="${colors[1]}"/><path d="M25 55 L100 95 L100 185 L25 145 Z" fill="${colors[2]}" opacity="${colors[3]}"/><path d="M175 55 L100 95 L100 185 L175 145 Z" fill="${colors[4]}" opacity="${colors[5]}"/></svg>`;
}

function galleryFor(id){
  return [0,1,2,3].map(i => ({ svg: cubeIconSVG(id + i), flip: i % 2 === 1 }));
}

function hashNum(id, mod, offset){
  offset = offset || 0;
  return ((id * 97 + offset * 31) % mod);
}

const CATEGORY_SPECS = {
  'audio-tv': {tipo:'Televisor / Audio', consumoUnit:'W', consumoRange:[60,180], dims:true, voltaje:'110V - 220V', garantia:'12 meses'},
  'aires': {tipo:'Aire acondicionado', consumoUnit:'kWh/mes', consumoRange:[90,220], dims:true, voltaje:'220V', garantia:'24 meses'},
  'refrigeracion': {tipo:'Refrigeración', consumoUnit:'kWh/mes', consumoRange:[35,70], capacidad:'Litros', capRange:[150,500], voltaje:'110V - 220V', garantia:'24 meses'},
  'electrodomesticos': {tipo:'Electrodoméstico', consumoUnit:'W', consumoRange:[300,1200], dims:true, voltaje:'110V', garantia:'12 meses'},
  'lavado': {tipo:'Lavado', consumoUnit:'kWh/mes', consumoRange:[25,55], capacidad:'Kg', capRange:[8,20], voltaje:'110V - 220V', garantia:'24 meses'},
  'cocina': {tipo:'Cocina', consumoUnit:'W', consumoRange:[1200,2200], dims:true, voltaje:'110V', garantia:'12 meses'},
  'tecnologia': {tipo:'Tecnología', consumoUnit:'W', consumoRange:[5,45], conectividad:'WiFi / USB / Bluetooth', voltaje:'100V - 240V', garantia:'12 meses'},
  'hogar': {tipo:'Hogar', material:'Textil / Espuma', cuidado:'Lavado a máquina', voltaje:null, garantia:'6 meses'},
  'dama': {tipo:'Ropa Dama', material:'Algodón / Poliéster', tallas:'S, M, L, XL', cuidado:'Lavado a máquina', garantia:'30 días'},
  'caballeros': {tipo:'Ropa Caballeros', material:'Algodón / Poliéster', tallas:'S, M, L, XL, XXL', cuidado:'Lavado a máquina', garantia:'30 días'},
  'kids': {tipo:'Ropa Niños', material:'Algodón', tallas:'2, 4, 6, 8, 10 años', cuidado:'Lavado a máquina', garantia:'30 días'},
  'calzado': {tipo:'Calzado', material:'Sintético / Cuero', tallas:'35 al 44', cuidado:'Limpiar con paño húmedo', garantia:'30 días'}
};

const COLOR_NAMES = ['Negro','Blanco','Gris grafito','Plateado','Negro mate'];

function specsFor(p){
  const c = CATEGORY_SPECS[p.categoria] || {};
  const specs = [];
  specs.push({label:'Marca', value:p.brand});
  specs.push({label:'Tipo', value:c.tipo || '—'});
  specs.push({label:'SKU', value:p.sku});
  specs.push({label:'Color', value:COLOR_NAMES[hashNum(p.id,COLOR_NAMES.length)]});
  if(c.dims){
    const a = 20 + hashNum(p.id,60,1);
    const b = 15 + hashNum(p.id,50,2);
    const d = 10 + hashNum(p.id,40,3);
    specs.push({label:'Dimensiones', value:`${a} x ${b} x ${d} cm`});
  }
  if(c.capacidad){
    const cap = c.capRange[0] + hashNum(p.id, c.capRange[1]-c.capRange[0], 4);
    specs.push({label:'Capacidad', value:`${cap} ${c.capacidad}`});
  }
  if(c.consumoUnit){
    const cons = c.consumoRange[0] + hashNum(p.id, c.consumoRange[1]-c.consumoRange[0], 5);
    specs.push({label:'Consumo energético', value:`${cons} ${c.consumoUnit}`});
  }
  if(c.material) specs.push({label:'Material', value:c.material});
  if(c.tallas) specs.push({label:'Tallas disponibles', value:c.tallas});
  if(c.conectividad) specs.push({label:'Conectividad', value:c.conectividad});
  if(c.cuidado) specs.push({label:'Cuidado', value:c.cuidado});
  if(c.voltaje) specs.push({label:'Voltaje', value:c.voltaje});
  specs.push({label:'Garantía', value:c.garantia || '12 meses'});
  return specs;
}

const CATEGORY_FEATURES = {
  'audio-tv': ['Resolución de imagen nítida y colores vivos','Conectividad HDMI y USB para tus dispositivos','Diseño delgado, ideal para cualquier espacio','Sonido envolvente integrado'],
  'aires': ['Tecnología inverter para bajo consumo','Filtro purificador de aire incluido','Control remoto con temporizador','Funcionamiento silencioso'],
  'refrigeracion': ['Sistema No-Frost, sin escarcha','Organización interna ajustable','Bajo nivel de ruido en funcionamiento','Eficiencia energética certificada'],
  'electrodomesticos': ['Materiales resistentes y fáciles de limpiar','Múltiples velocidades y funciones','Diseño compacto que ahorra espacio','Componentes de larga duración'],
  'lavado': ['Múltiples programas de lavado','Tambor de acero inoxidable','Bajo consumo de agua y energía','Centrifugado de alta eficiencia'],
  'cocina': ['Encendido eléctrico automático','Superficie fácil de limpiar','Distribución uniforme del calor','Controles de temperatura precisos'],
  'tecnologia': ['Configuración rápida y sencilla','Compatible con múltiples dispositivos','Actualizaciones de firmware incluidas','Diseño compacto y portátil'],
  'hogar': ['Materiales suaves y duraderos','Fácil mantenimiento y lavado','Diseño versátil para cualquier ambiente','Costuras reforzadas'],
  'dama': ['Tela suave y transpirable','Corte moderno y versátil','Colores de temporada','Fácil combinación con otras prendas'],
  'caballeros': ['Tela resistente de uso diario','Corte cómodo y ajuste moderno','Ideal para cualquier ocasión','Fácil cuidado y planchado'],
  'kids': ['Tela suave, ideal para piel sensible','Diseño resistente para el juego diario','Colores y estampados divertidos','Fácil de lavar'],
  'calzado': ['Suela antideslizante','Plantilla acolchada para mayor comodidad','Materiales resistentes al uso diario','Diseño versátil para el día a día']
};
function featuresFor(p){
  return CATEGORY_FEATURES[p.categoria] || ['Calidad garantizada','Diseño funcional','Fácil de usar'];
}

function formatPrice(n){
  return n.toLocaleString('es-VE', {minimumFractionDigits:2, maximumFractionDigits:2});
}

const CART_KEY = 'kubo_cart';
const FAV_KEY = 'kubo_favs';

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch(e){ return {}; }
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartBadge(); }
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
  showToast('Añadido al carrito');
}
function setQty(id, qty){
  const cart = getCart();
  if(qty <= 0){ delete cart[id]; } else { cart[id] = qty; }
  saveCart(cart);
}
function removeFromCart(id){
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}
function cartCount(){
  const cart = getCart();
  return Object.values(cart).reduce((a,b) => a+b, 0);
}
function cartTotal(){
  const cart = getCart();
  let total = 0;
  Object.keys(cart).forEach(id => {
    const p = findProduct(id);
    if(p) total += p.price * cart[id];
  });
  return total;
}

function getFavs(){
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch(e){ return []; }
}
function toggleFav(id){
  let favs = getFavs();
  if(favs.includes(Number(id))){ favs = favs.filter(f => f !== Number(id)); }
  else { favs.push(Number(id)); }
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavBadge();
  return favs.includes(Number(id));
}

function updateCartBadge(){
  const count = cartCount();
  document.querySelectorAll('[data-cart-badge]').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hide', count === 0);
  });
}
function updateFavBadge(){
  const count = getFavs().length;
  document.querySelectorAll('[data-fav-badge]').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hide', count === 0);
  });
}

function showToast(msg){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function productCardHTML(p){
  return `
    <div class="card reveal show" data-id="${p.id}">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
      <button class="fav ${getFavs().includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id});this.classList.toggle('active')" aria-label="Favorito">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20.5c-.28 0-.55-.1-.76-.3C7.02 16.6 3 13.1 3 9.3 3 6.6 5.1 4.5 7.8 4.5c1.68 0 3.24.86 4.2 2.24.96-1.38 2.52-2.24 4.2-2.24 2.7 0 4.8 2.1 4.8 4.8 0 3.8-4.02 7.3-8.24 10.9-.21.2-.48.3-.76.3z"/></svg>
      </button>
      <div class="imgbox"><a href="producto.html?id=${p.id}">${cubeIconSVG(p.id)}</a></div>
      <div class="body">
        <div class="brand" title="SKU ${p.sku}">${p.brand}</div>
        <div class="name"><a href="producto.html?id=${p.id}">${p.name}</a></div>
        <div class="price-row">
          <div class="price">$${formatPrice(p.price)}${p.old ? `<small>$${formatPrice(p.old)}</small>` : ''}</div>
          <button class="addbtn" aria-label="Añadir" onclick="event.stopPropagation();addToCart(${p.id},1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </div>
    </div>`;
}

function initBurger(){
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if(!burgerBtn) return;
  const header = document.querySelector('header.site');
  function openMenu(){
    mobileNav.style.top = header.offsetHeight + 'px';
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(){
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  burgerBtn.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileNav.addEventListener('click', e => { if(e.target.closest('a')) closeMenu(); });
  window.addEventListener('resize', () => {
    if(mobileNav.classList.contains('open')) mobileNav.style.top = header.offsetHeight + 'px';
  });
}

function initHeaderSearch(){
  document.querySelectorAll('[data-search-input]').forEach(input => {
    input.addEventListener('keydown', e => {
      if(e.key === 'Enter' && input.value.trim()){
        window.location.href = 'catalogo.html?q=' + encodeURIComponent(input.value.trim());
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateFavBadge();
  initBurger();
  initHeaderSearch();
  initMegaMenu();
});

const USER = {
  name:'Jean Pérez',
  email:'jean.perez@correo.com',
  phone:'0424 123 4567',
  memberSince:'Marzo 2025',
  saldoDisponible:186.40,
  limiteCredito:500,
  saldoUtilizado:313.60,
  proximoPago:{monto:62.50, fecha:'20 ago 2026'},
  movimientos:[
    {fecha:'02 ago 2026', desc:'Pago de cuota — Televisor QLED 50"', monto:-62.50, tipo:'pago'},
    {fecha:'18 jul 2026', desc:'Recarga de saldo KuboCredit', monto:150.00, tipo:'recarga'},
    {fecha:'05 jul 2026', desc:'Compra a cuotas — Cafetera espresso', monto:-249.99, tipo:'compra'},
    {fecha:'22 jun 2026', desc:'Pago de cuota — Aire split inverter', monto:-62.50, tipo:'pago'},
    {fecha:'10 jun 2026', desc:'Recarga de saldo KuboCredit', monto:200.00, tipo:'recarga'},
    {fecha:'28 may 2026', desc:'Compra a cuotas — Router WiFi 6', monto:-73.00, tipo:'compra'}
  ],
  pedidos:[
    {id:'KB-10482', fecha:'02 ago 2026', estado:'Entregado', total:429.99, productos:[1]},
    {id:'KB-10367', fecha:'05 jul 2026', estado:'Entregado', total:249.99, productos:[16]},
    {id:'KB-10201', fecha:'28 may 2026', estado:'En camino', total:73.00, productos:[26]}
  ],
  direcciones:[
    {etiqueta:'Casa', detalle:'Av. Los Leones, Res. Aurora, Piso 3, Barquisimeto, Lara', principal:true},
    {etiqueta:'Oficina', detalle:'Calle 25 con Carrera 18, Centro, Barquisimeto, Lara', principal:false}
  ]
};

function initials(name){
  return name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
}

function skeletonCardHTML(){
  return `
    <div class="sk-card">
      <div class="sk sk-img"></div>
      <div class="sk-body">
        <div class="sk sk-line w40"></div>
        <div class="sk sk-line w90"></div>
        <div class="sk-row">
          <div class="sk sk-price"></div>
          <div class="sk sk-btn"></div>
        </div>
      </div>
    </div>`;
}
function skeletonGrid(count){
  return Array(count).fill(0).map(skeletonCardHTML).join('');
}
function skeletonCatGrid(count){
  return Array(count).fill(0).map(() => `
    <div class="sk-cat">
      <div class="sk sk-ic"></div>
      <div class="sk sk-txt"></div>
    </div>`).join('');
}
function skeletonRow(){
  return `
    <div class="sk-row-item">
      <div class="sk sk-circle"></div>
      <div class="sk-lines">
        <div class="sk sk-line w60"></div>
        <div class="sk sk-line w40" style="margin-bottom:0;"></div>
      </div>
      <div class="sk sk-price"></div>
    </div>`;
}

function lazyRenderGrid(targetId, list, opts){
  opts = opts || {};
  const batchSize = opts.batchSize || 8;
  const delay = opts.delay || 500;
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = skeletonGrid(Math.min(batchSize, list.length || batchSize));

  if(list.length === 0){
    setTimeout(() => { if(opts.onEmpty) opts.onEmpty(); }, delay);
    return;
  }

  let rendered = 0;
  function renderBatch(){
    const next = list.slice(rendered, rendered + batchSize);
    el.innerHTML = (rendered === 0 ? '' : el.innerHTML) + next.map(productCardHTML).join('');
    rendered += next.length;
    if(opts.onBatch) opts.onBatch(rendered, list.length);
  }

  setTimeout(() => {
    el.innerHTML = '';
    renderBatch();

    if(rendered >= list.length) return;

    const sentinel = document.createElement('div');
    sentinel.className = 'load-sentinel';
    el.insertAdjacentElement('afterend', sentinel);
    const wrap = document.createElement('div');
    wrap.className = 'load-more-wrap';
    wrap.innerHTML = '<div class="spinner" style="display:none;"></div>';
    sentinel.insertAdjacentElement('afterend', wrap);
    const spinner = wrap.querySelector('.spinner');

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting && rendered < list.length){
          spinner.style.display = 'block';
          setTimeout(() => {
            renderBatch();
            spinner.style.display = 'none';
            if(rendered >= list.length){ io.unobserve(sentinel); sentinel.remove(); wrap.remove(); }
          }, 450);
        }
      });
    }, {rootMargin:'200px'});
    io.observe(sentinel);
  }, delay);
}
