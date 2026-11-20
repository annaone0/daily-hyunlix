(function(){
 'use strict';
 const root=document.getElementById('world-tour');if(!root)return;
 const stage=document.getElementById('tourMap'),list=document.getElementById('tourStops'),focus=document.getElementById('tourFocus');
 const summary=document.getElementById('tourRegionSummary');
 const regions={asia:{name:'亞洲',bounds:[95,147,-3,47]},na:{name:'北美',bounds:[-131,-64,22,57]},eu:{name:'歐洲／英國',bounds:[-14,28,34,62]}};
 let data=null,outline=[],region='na',selectedId=null,shown=[],signature='',observer=null,hoverId=null;
 const node=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text)e.textContent=text;return e};
 const link=(label,url,className)=>{const a=node('a',className,label);a.href=url;a.target='_blank';a.rel='noopener';return a};
 const formatDate=date=>date.replaceAll('-','.');
 function localDate(timeZone){
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const value=Object.fromEntries(parts.filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));
  return [value.year,value.month,value.day].join('-');
 }
 function upcoming(stop){
  // Keep the published edition's past concerts out even on a device with an old clock.
  const today=[localDate(stop.timeZone),data.asOfDate].sort().at(-1);
  return {...stop,dates:stop.dates.filter(d=>d.date>=today)};
 }
 function dateLinks(stop,className='tour-date-list'){
  const box=node('div',className);
  stop.dates.forEach(d=>{const a=link(formatDate(d.date)+(d.added?' · 加場':''),d.source,'tour-date'+(d.added?' tour-date-added':''));box.append(a)});
  return box;
 }
 function updateFocus(id){
  const stop=shown.find(s=>s.id===id);if(!stop)return;
  focus.replaceChildren();
  const detail=node('div','tour-focus-copy');
  detail.append(node('p','tour-focus-country',stop.country),node('h3','',stop.city+' '+stop.cityEn),node('p','tour-focus-venue',stop.venue+(stop.venueCity?' · '+stop.venueCity:'')),dateLinks(stop));
  focus.append(detail,link('官方場次與票務',stop.url,'tour-official-link'));
  stage.querySelectorAll('[data-tour-city]').forEach(button=>{const active=button.dataset.tourCity===id;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(button.dataset.tourCity===selectedId))});
  list.querySelectorAll('[data-tour-select]').forEach(button=>{const active=button.dataset.tourSelect===selectedId;button.setAttribute('aria-pressed',String(active));button.closest('.tour-stop').classList.toggle('is-selected',active)});
 }
 function select(id,scroll=false){
  selectedId=id;hoverId=null;updateFocus(id);
  if(scroll)focus.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 }
 function renderCards(){
  list.replaceChildren();
  shown.forEach(stop=>{
   const card=node('article','tour-stop');
   const heading=node('h3','');const button=node('button','tour-stop-select',stop.city+' '+stop.cityEn);
   button.type='button';button.dataset.tourSelect=stop.id;button.setAttribute('aria-pressed',String(stop.id===selectedId));button.addEventListener('click',()=>select(stop.id,true));heading.append(button);
   card.append(node('p','tour-stop-country',stop.country),heading,node('p','tour-stop-venue',stop.venue),dateLinks(stop));
   list.append(card);
  });
 }
 function drawMap(){
  const svg=stage.querySelector('svg');if(!svg||!shown.length)return;
  const w=stage.clientWidth,h=stage.clientHeight,[west,east,south,north]=regions[region].bounds;
  const cx=(west+east)/2,cy=(north+south)/2,longitudeScale=Math.cos(cy*Math.PI/180);
  const scale=Math.min((w-42)/((east-west)*longitudeScale),(h-44)/(north-south));
  const x=lon=>w/2+(lon-cx)*longitudeScale*scale,y=lat=>h/2-(lat-cy)*scale;
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.replaceChildren();
  const makePath=(d,className)=>{const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);path.setAttribute('class',className);svg.append(path)};
  let grid='';for(let lon=Math.ceil(west/10)*10;lon<east;lon+=10)grid+=`M${x(lon)} 0V${h}`;for(let lat=Math.ceil(south/10)*10;lat<north;lat+=10)grid+=`M0 ${y(lat)}H${w}`;
  makePath(grid,'tour-map-grid');
  const rings=outline.filter(r=>r.some(([lon,lat])=>lon>west-30&&lon<east+30&&lat>south-15&&lat<north+15));
  makePath(rings.map(r=>'M'+r.map(([lon,lat])=>x(lon).toFixed(1)+','+y(lat).toFixed(1)).join('L')+'Z').join(''),'tour-map-land');
  let leaders='';const placed=[];
  for(const stop of shown){
   const button=stage.querySelector('[data-tour-city="'+stop.id+'"]'),label=button.querySelector('.tour-map-label');
   const px=x(stop.lon),py=y(stop.lat);button.style.left=px+'px';button.style.top=py+'px';
   const lw=label.offsetWidth,lh=label.offsetHeight;
   if(w<600){label.style.left=Math.max(6-px,Math.min(18,w-px-lw-6))+'px';label.style.top=Math.max(6-py,Math.min(-27,h-py-lh-6))+'px';continue}
   const options=[[14,-lh-6],[14,8],[-lw-14,-lh-6],[-lw-14,8],[15,-lh-35],[-lw-15,-lh-35],[-lw/2,26],[-lw/2,-lh-35],[45,-lh/2],[-lw-45,-lh/2]];
   let choice=null;
   for(const [dx,dy] of options){const rect={l:px+dx,t:py+dy,r:px+dx+lw,b:py+dy+lh};if(rect.l<5||rect.r>w-5||rect.t<5||rect.b>h-5)continue;if(placed.some(a=>rect.l<a.r+6&&rect.r>a.l-6&&rect.t<a.b+6&&rect.b>a.t-6))continue;choice={dx,dy,...rect};break}
   label.classList.toggle('tour-label-quiet',!choice);
   const dx=choice?.dx||14,dy=choice?.dy||(-lh-6);label.style.left=dx+'px';label.style.top=dy+'px';
   if(choice){placed.push(choice);leaders+=`M${px.toFixed(1)} ${py.toFixed(1)}L${(px+dx+(dx<0?lw:0)).toFixed(1)} ${(py+dy+lh/2).toFixed(1)}`}
  }
  if(leaders)makePath(leaders,'tour-map-leaders');
 }
 function renderMap(){
  stage.replaceChildren();
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('aria-hidden','true');stage.append(svg);
  stage.setAttribute('aria-label',regions[region].name+'巡演城市地圖，'+shown.length+'座城市');
  shown.forEach(stop=>{
   const button=node('button','tour-map-pin');button.type='button';button.dataset.tourCity=stop.id;
   button.setAttribute('aria-label',stop.city+' '+stop.cityEn+'，'+stop.dates.map(d=>formatDate(d.date)+(d.added?' 加場':'')).join('、'));
   button.setAttribute('aria-pressed',String(stop.id===selectedId));
   button.append(node('span','tour-map-dot'),node('span','tour-map-label',stop.city));
   button.addEventListener('pointerenter',()=>{hoverId=stop.id;updateFocus(stop.id)});
   button.addEventListener('pointerleave',()=>{hoverId=null;updateFocus(selectedId)});
   button.addEventListener('focus',()=>updateFocus(stop.id));button.addEventListener('click',()=>select(stop.id));
   stage.append(button);
  });
  drawMap();observer?.disconnect();observer=new ResizeObserver(drawMap);observer.observe(stage);
 }
 function render(){
  if(!data)return;
  const stops=data.stops.map(upcoming).filter(s=>s.region===region&&s.dates.length).sort((a,b)=>a.dates[0].date.localeCompare(b.dates[0].date));
  const nextSignature=region+'|'+stops.map(s=>s.id+':'+s.dates.map(d=>d.date).join(',')).join('|');if(nextSignature===signature)return;signature=nextSignature;
  shown=stops;const count=shown.reduce((n,s)=>n+s.dates.length,0);
  const dates=shown.flatMap(s=>s.dates.map(d=>d.date)).sort();
  summary.replaceChildren(node('h3','',regions[region].name+' · '+shown.length+' 城市 / '+count+' 場'),node('p','',dates.length?formatDate(dates[0])+' — '+formatDate(dates.at(-1)):'目前沒有待演出場次'));
  root.querySelectorAll('[data-tour-region]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.tourRegion===region)));
  if(!shown.length){stage.replaceChildren();focus.replaceChildren();list.replaceChildren(node('p','','這一區目前沒有待演出場次。'));return}
  if(!shown.some(s=>s.id===selectedId))selectedId=shown[0].id;
  renderCards();renderMap();updateFocus(selectedId);
 }
 root.querySelectorAll('[data-tour-region]').forEach(button=>button.addEventListener('click',()=>{region=button.dataset.tourRegion;signature='';render()}));
 stage.addEventListener('keydown',event=>{if(event.key==='Escape'){hoverId=null;updateFocus(selectedId)}});
 stage.addEventListener('focusout',()=>{if(!hoverId)setTimeout(()=>{if(!stage.contains(document.activeElement))updateFocus(selectedId)},0)});
 window.DailyTour={render};
 Promise.allSettled([fetch('./assets/tour-data.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error();return r.json()}),fetch('./assets/world-outline.json').then(r=>{if(!r.ok)throw Error();return r.json()})]).then(results=>{
  if(results[0].status!=='fulfilled'){list.replaceChildren(node('p','','巡演資料暫時無法載入，請查看下方官方場次連結。'));return}
  data=results[0].value;
  if(results[1].status==='fulfilled')outline=results[1].value.rings;
  else root.querySelector('.tour-map-help').textContent='地圖輪廓暫時無法載入；下方場次清單仍可瀏覽。';
  render();
 });
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)render()});
})();
