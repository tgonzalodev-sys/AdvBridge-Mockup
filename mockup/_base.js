// Shared navigation injector
// Call renderNav(activeSection) at the top of each page body
function renderNav(active) {
  const links = [
    { id: 'clientes',     label: 'Clientes',      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', href: '../mockup/clientes.html' },
    { id: 'productos',    label: 'Productos',     icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', href: '../mockup/productos.html' },
    { id: 'contratos',   label: 'Contratos',     icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', href: '../mockup/contratos.html' },
    { id: 'facturacion', label: 'Facturación',   icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', href: '../mockup/facturacion.html' },
  ];
  const html = `
  <aside class="fixed inset-y-0 left-0 w-56 bg-slate-900 flex flex-col z-40">
    <div class="px-5 py-5 border-b border-slate-700">
      <div class="text-white font-bold text-base leading-tight">AdvertMind</div>
      <div class="text-slate-400 text-xs mt-0.5">Commercial Bridge</div>
    </div>
    <nav class="flex-1 px-3 py-4 space-y-1">
      ${links.map(l => `
        <a href="${l.href}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active === l.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${l.icon}"/></svg>
          ${l.label}
        </a>`).join('')}
    </nav>
    <div class="px-4 py-4 border-t border-slate-700">
      <div class="text-xs text-slate-500 mb-1">Subsidiaria activa</div>
      <select class="w-full bg-slate-800 text-slate-200 text-xs border border-slate-700 rounded px-2 py-1.5 focus:outline-none">
        <option>Advertmind SA</option>
        <option>EuroAdvertmind SL</option>
      </select>
    </div>
  </aside>`;
  document.getElementById('nav-host').innerHTML = html;
}
