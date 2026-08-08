const CATEGORIES = [
  {id:'audio-tv', name:'Audio y TV'},
  {id:'aires', name:'Aires Acondicionados'},
  {id:'refrigeracion', name:'Refrigeración'},
  {id:'electrodomesticos', name:'Electrodomésticos'},
  {id:'lavado', name:'Lavado'},
  {id:'cocina', name:'Cocina'},
  {id:'tecnologia', name:'Tecnología'},
  {id:'hogar', name:'Hogar'}
];

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
  {id:32, name:'Juego de edredón 3 piezas', brand:'GENÉRICO', categoria:'hogar', price:16.99, stock:24, desc:'Edredón reversible de 3 piezas, tamaño Full/Queen, fácil de lavar.'}
];

const SKU_PREFIX = {
  'audio-tv':'AUD', 'aires':'AC', 'refrigeracion':'REF', 'electrodomesticos':'ELE',
  'lavado':'LAV', 'cocina':'COC', 'tecnologia':'TEC', 'hogar':'HOG'
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2.5C10.5 5.2 12 4 14 4c4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z"/></svg>
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
  burgerBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
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
