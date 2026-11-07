/* Opt-in Joaninha keyboard diagnosis v3, no keylogging or network upload */
(function(){
'use strict';
const KEY='joaninha-test-diagnostics-v3',MAX=4500;
const CSS=[
 '#jdShade{position:absolute;inset:0;z-index:110;background:#000b;display:none}',
 '#jdPanel{position:absolute;z-index:111;left:12px;right:12px;bottom:calc(var(--safe-bottom,30px) + 10px);max-height:76%;overflow:auto;padding:18px;border:1px solid #555;border-radius:24px;background:rgba(29,29,33,.97);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);box-shadow:0 10px 45px #000e;display:none}',
 '#app.jd-open #jdShade,#app.jd-open #jdPanel{display:block}',
 '#jdPanel button{font:inherit;color:#fff}',
 '.jdHeading{display:flex;align-items:center;justify-content:space-between;font-size:18px;font-weight:700}',
 '#jdDismiss{width:34px;height:34px;border:0;background:#4a4a50;border-radius:50%;font-size:20px}',
 '.jdHelp{font-size:12px;line-height:1.5;color:#c6c6ca;margin:12px 0}',
 '#jdStatus{background:#202023;border:1px solid #45454b;border-radius:13px;padding:12px;font-size:12px;line-height:1.55;white-space:pre-line;font-variant-numeric:tabular-nums}',
 '.jdButtons{display:flex;gap:8px;margin-top:13px}',
 '.jdButtons button{flex:1;min-width:0;padding:12px 5px;font-size:13px!important;font-weight:650!important;background:#414149;border:1px solid #5a5a60;border-radius:12px}',
 '.jdButtons button:disabled{opacity:.4}',
 '#jdStart,#app.jd-ready #jdExport{background:#3468f2;border-color:#3468f2}',
 '#app.jd-running #jdStart{background:#414149;border-color:#5a5a60}',
 '#jdSuggestion{display:none;color:#b6d7ff;font-size:13px;font-weight:600;line-height:1.4}',
 '#app.jd-ready #jdSuggestion{display:block}',
 '.jdPrivacy{font-size:11px;line-height:1.55;color:#9e9ea7}',
 '#add{position:relative;touch-action:none;-webkit-touch-callout:none}',
 '#app.jd-running #add::after{content:"";position:absolute;right:0;top:3px;width:6px;height:6px;border-radius:50%;background:#ff5960;box-shadow:0 0 6px #f45}'
].join('');
window.JoaninhaDiagnostic=function({app,getState,version}){
 const style=document.createElement('style');style.textContent=CSS;document.head.appendChild(style);
 const shade=document.createElement('div');shade.id='jdShade';
 const panel=document.createElement('section');panel.id='jdPanel';
 panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-labelledby','jdTitle');
 panel.innerHTML='<div class="jdHeading"><span id="jdTitle">Diagnóstico do teclado</span><button id="jdDismiss" aria-label="Fechar">×</button></div>'+
  '<p class="jdHelp">Inicie a captura, feche esta janela e use o teclado normalmente, os registros continuam até você tocar em Parar</p>'+
  '<div id="jdStatus" role="status" aria-live="polite">Captura desligada</div>'+
  '<div class="jdButtons"><button id="jdStart">Iniciar</button><button id="jdStop" disabled>Parar</button><button id="jdExport" disabled>Exportar</button></div>'+
  '<p id="jdSuggestion">Captura concluída, toque em Exportar para enviar o arquivo JSON</p>'+
  '<p class="jdPrivacy">Registra apenas medidas, eventos e tamanho da mensagem, nunca o texto, caracteres digitados, senhas ou códigos, nada é enviado automaticamente</p>';
 app.append(shade,panel);
 const $=id=>document.getElementById(id);
 const startBtn=$('jdStart'),stopBtn=$('jdStop'),exportBtn=$('jdExport');
 let active=false,events=[],started='',t0=0,tick=null,raf=0,lastSig='',lastSnapshot=0;
 let lastPersist=0,lastUi=0,anomalies=0,overflow=0,interrupted=false;
 const round=n=>Number.isFinite(n)?Math.round(n*10)/10:null;
 const elapsed=()=>Math.round(Math.max(0,performance.now()-t0));
 function rect(node){
  if(!node)return null;
  const r=node.getBoundingClientRect();
  return {x:round(r.x),y:round(r.y),w:round(r.width),h:round(r.height),top:round(r.top),bottom:round(r.bottom)};
 }
 function record(kind,data){
  if(!active)return;
  events.push({ms:elapsed(),kind,...data});
  if(events.length>MAX){
   const n=events.length-MAX;
   events.splice(30,n);overflow+=n;
  }
  if(performance.now()-lastUi>1150){lastUi=performance.now();render();}
 }
 function snapshot(reason,force=false){
  if(!active)return;
  const state=getState(),root=document.documentElement,vv=window.visualViewport;
  const kb=$('keyboard'),composer=$('composer');
  const css={
   appHeight:root.style.getPropertyValue('--app-h').trim(),
   keyboardHeight:root.style.getPropertyValue('--kbd-h').trim(),
   keyboardDisplay:getComputedStyle(kb).display,
   composerBottom:getComputedStyle(composer).bottom,
   appPosition:getComputedStyle(app).position
  };
  const box={app:rect(app),page:rect($('page')),header:rect($('header')),
   composer:rect(composer),field:rect($('text-field')),keyboard:rect(kb),
   thread:rect($('threadScroll')),hint:rect($('photoHint'))};
  const win={w:innerWidth,h:innerHeight,scrollY:round(window.scrollY),scrollX:round(window.scrollX),
   dpr:devicePixelRatio,docHeight:root.scrollHeight,bodyHeight:document.body.scrollHeight};
  const visual=vv?{w:round(vv.width),h:round(vv.height),offsetTop:round(vv.offsetTop),
   pageTop:round(vv.pageTop),offsetLeft:round(vv.offsetLeft),scale:round(vv.scale)}:null;
  const problems=[];
  if(state.keyboard&&css.keyboardDisplay==='none')problems.push('expected-open-but-hidden');
  if(!state.keyboard&&css.keyboardDisplay!=='none')problems.push('expected-closed-but-visible');
  if(Math.abs(window.scrollY)>2)problems.push('window-scroll');
  if(box.composer?.top<0)problems.push('composer-above-viewport');
  if(state.keyboard&&box.composer&&box.keyboard&&box.composer.bottom>box.keyboard.top+7)
   problems.push('composer-keyboard-overlap');
  if(problems.length){anomalies++;record('anomaly',{reason,problems});}
  const now=performance.now();
  const sig=JSON.stringify([state,win.h,win.scrollY,css,visual,box.composer,box.keyboard]);
  if(force||sig!==lastSig||now-lastSnapshot>1000){
   record('snapshot',{reason,state,css,rects:box,win,visual,
    physical:{width:screen.width,height:screen.height,angle:screen.orientation?.angle??null},
    visible:document.visibilityState});
   lastSig=sig;lastSnapshot=now;
  }
  if(now-lastPersist>2000)persist();
 }
 function event(name,details={}){
  if(!active)return;
  record('event',{name,...details});
  if(!raf)raf=requestAnimationFrame(()=>{raf=0;snapshot('after:'+name);});
 }
 function persist(){
  if(!events.length)return;
  lastPersist=performance.now();
  const partial=events.length>680;
  const subset=partial?events.slice(0,30).concat(events.slice(-650)):events;
  try{localStorage.setItem(KEY,JSON.stringify({format:'joaninha-diag-v3',started,
   version,active,events:subset,count:events.length,anomalies,overflow,partial}));}catch(err){}
 }
 function render(msg){
  const secs=active?Math.round(elapsed()/1000):(events.length?Math.round(events[events.length-1].ms/1000):0);
  $('jdStatus').textContent=msg||((active?'Gravando':'Captura parada')+'\n'+secs+' s · '+events.length+
    ' registros\n'+anomalies+' anomalias detectadas'+(interrupted?'\nRegistros recuperados após interrupção':''));
  app.classList.toggle('jd-running',active);
  app.classList.toggle('jd-ready',!active&&events.length>0);
  startBtn.disabled=active;stopBtn.disabled=!active;exportBtn.disabled=active||!events.length;
 }
 function open(){app.classList.add('jd-open');render();}
 function close(){app.classList.remove('jd-open');}
 function start(){
  if(tick!==null)clearInterval(tick);
  if(raf){cancelAnimationFrame(raf);raf=0;}
  active=true;events=[];anomalies=0;overflow=0;interrupted=false;
  started=new Date().toISOString();t0=performance.now();
  lastSig='';lastSnapshot=0;lastPersist=0;lastUi=0;
  record('event',{name:'start',version});snapshot('baseline',true);
  // The sampled layout work must never compete with rapid typing.
  // State transitions and important events still trigger immediate captures.
  tick=setInterval(()=>{if(document.visibilityState==='visible')snapshot('poll');},360);
  persist();render();
 }
 function stop(){
  if(!active)return;
  snapshot('before-stop',true);record('event',{name:'stop'});active=false;
  if(tick!==null){clearInterval(tick);tick=null;}
  if(raf){cancelAnimationFrame(raf);raf=0;}
  persist();render();
 }
 function download(file){
  const url=URL.createObjectURL(file),link=document.createElement('a');
  link.href=url;link.download=file.name;document.body.appendChild(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),15000);
 }
 function exportLog(){
  if(active||!events.length)return;
  const payload={format:'joaninha-keyboard-diagnostic',schema:1,version,started,
   exported:new Date().toISOString(),count:events.length,anomalies,overflow,interrupted,
   privacy:'No text, typed characters, codes, or geolocation',
   device:{userAgent:navigator.userAgent,language:navigator.language,
    width:screen.width,height:screen.height,dpr:devicePixelRatio},events};
  const name='Joaninha_Teste_Teclado_'+new Date().toISOString().slice(0,19).replace(/[:T]/g,'_')+'.json';
  const file=new File([JSON.stringify(payload,null,2)+'\n'],name,{type:'application/json'});
  if(navigator.canShare?.({files:[file]})&&navigator.share){
   navigator.share({files:[file],title:'Diagnóstico do teclado'}).catch(err=>{
    if(err?.name!=='AbortError')download(file);
   });
  }else download(file);
 }
 $('jdDismiss').addEventListener('click',close);
 shade.addEventListener('click',close);
 startBtn.addEventListener('click',start);
 stopBtn.addEventListener('click',stop);
 exportBtn.addEventListener('click',exportLog);
 try{
  const old=JSON.parse(localStorage.getItem(KEY)||'null');
  if(old?.format==='joaninha-diag-v3'&&Array.isArray(old.events)&&old.events.length){
   events=old.events.filter(e=>e&&Number.isFinite(e.ms)&&typeof e.kind==='string').slice(-MAX);
   started=typeof old.started==='string'?old.started:'';
   anomalies=Number(old.anomalies)||0;overflow=Number(old.overflow)||0;interrupted=!!old.active;
  }
 }catch(err){}
 render();
 for(const [source,label] of [[window,'window'],[window.visualViewport,'visualViewport']]){
  if(!source)continue;
  for(const name of ['resize','scroll'])
   source.addEventListener(name,()=>event(label+':'+name),{passive:true});
 }
 for(const name of ['blur','focus','orientationchange'])
  window.addEventListener(name,()=>event('window:'+name),{passive:true});
 document.addEventListener('visibilitychange',()=>{event('visibility:'+document.visibilityState);persist();});
 window.addEventListener('pagehide',()=>{event('pagehide');persist();});
 window.addEventListener('pageshow',e=>event('pageshow',{cached:!!e.persisted}));
 $('threadScroll').addEventListener('scroll',()=>event('thread-scroll'),{passive:true});
 app.addEventListener('transitionend',e=>{
  if(['page','composer','keyboard'].includes(e.target.id))
   event('transition-end',{element:e.target.id,property:e.propertyName});
 },{passive:true});
 new MutationObserver(()=>{if(active)snapshot('app-class-change',true);})
  .observe(app,{attributes:true,attributeFilter:['class']});
 window.addEventListener('error',e=>event('javascript-error',{
  file:(e.filename||'').split('/').pop(),line:e.lineno||0,column:e.colno||0}));
 window.addEventListener('unhandledrejection',()=>event('unhandled-promise-rejection'));
 return {open,close,event,snapshot,isRecording:()=>active};
};
})();
