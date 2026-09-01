import {forPersistence,forExport} from './storage.js';

const STORAGE_KEY = 'next-move-applications-v1';
const seed = [
  {id:crypto.randomUUID(),company:'Kōwhai Labs',role:'Graduate Developer',status:'Interview',deadline:'2026-08-13',nextAction:'Prepare three product questions',notes:'Met Hana at the community meetup.'},
  {id:crypto.randomUUID(),company:'Northstar Health',role:'Junior Software Engineer',status:'Screen',deadline:'2026-08-15',nextAction:'Practise a concise project story',notes:'Role mentions accessibility.'},
  {id:crypto.randomUUID(),company:'Fieldwork Studio',role:'Frontend Developer',status:'Applied',deadline:'',nextAction:'Follow up next Tuesday',notes:'Portfolio-led application.'}
];
let applications = load();

function load(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || seed}catch{return seed}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(forPersistence(applications)))}
function escapeHtml(value=''){return value.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function formatDate(value){if(!value)return 'No date set';return new Intl.DateTimeFormat('en-NZ',{day:'numeric',month:'short'}).format(new Date(value+'T12:00:00'))}
function recommendation(){
  const statusWeight={Interview:50,Screen:35,Applied:20,Wishlist:5,Offer:10};
  const today=new Date();today.setHours(0,0,0,0);
  const ranked=applications.filter(app=>app.nextAction).map(app=>{
    const days=app.deadline?Math.ceil((new Date(app.deadline+'T12:00:00')-today)/86400000):null;
    const urgency=days===null?0:days<=0?40:days<=2?30:days<=7?15:0;
    return {...app,score:(statusWeight[app.status]||0)+urgency,reason:days===null?`${app.status} stage; no deadline set`:`${app.status} stage; due ${days<=0?'now':`in ${days} day${days===1?'':'s'}`}`};
  }).sort((a,b)=>b.score-a.score);
  return ranked[0];
}

function render(){
  const counts = ['Applied','Screen','Interview','Offer'].map(status=>({status,count:applications.filter(a=>a.status===status).length}));
  document.querySelector('#stats').innerHTML=counts.map(x=>`<div class="stat"><strong>${x.count}</strong><span>${x.status}</span></div>`).join('');
  document.querySelector('#empty').hidden=applications.length>0;
  const next=recommendation();
  document.querySelector('#focus').innerHTML=next?`<div><span class="eyebrow">Your next 30 minutes</span><div class="focus-rank">01</div></div><div><h2>${escapeHtml(next.nextAction)}</h2><p>${escapeHtml(next.company)} · ${escapeHtml(next.role)}</p></div><p class="reason">Why this? ${escapeHtml(next.reason)}. Stage and deadline outrank the order items were added.</p>`:`<div><span class="eyebrow">Your next 30 minutes</span></div><div><h2>Choose one concrete next action</h2><p>Add an action to an application and this view will prioritise it.</p></div>`;
  document.querySelector('#ledger').innerHTML=applications.map(app=>`<article class="card" data-id="${app.id}">
    <div><h3>${escapeHtml(app.company)}</h3><p class="muted">${escapeHtml(app.role)}</p></div>
    <label>Status<select class="status" aria-label="Status for ${escapeHtml(app.company)}">${['Wishlist','Applied','Screen','Interview','Offer'].map(s=>`<option ${s===app.status?'selected':''}>${s}</option>`).join('')}</select></label>
    <div><span class="tag">${formatDate(app.deadline)}</span><p>${escapeHtml(app.nextAction || 'Choose a next action')}</p></div>
    <button class="danger" aria-label="Delete ${escapeHtml(app.company)}">×</button>
  </article>`).join('');
}

document.querySelector('#today').textContent=new Intl.DateTimeFormat('en-NZ',{weekday:'long',day:'numeric',month:'long'}).format(new Date());
document.querySelector('#open-form').addEventListener('click',()=>document.querySelector('#application-dialog').showModal());
document.querySelector('#application-form').addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(event.currentTarget);
  applications.unshift({id:crypto.randomUUID(),...Object.fromEntries(data)});save();render();event.currentTarget.reset();document.querySelector('#application-dialog').close();
});
document.querySelector('#ledger').addEventListener('change',event=>{if(!event.target.matches('.status'))return;const app=applications.find(x=>x.id===event.target.closest('.card').dataset.id);app.status=event.target.value;save();render()});
document.querySelector('#ledger').addEventListener('click',event=>{if(!event.target.matches('.danger'))return;applications=applications.filter(x=>x.id!==event.target.closest('.card').dataset.id);save();render()});
document.querySelector('#export').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(forExport(applications),null,2)],{type:'application/json'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='next-move-applications.json';link.click();URL.revokeObjectURL(link.href)});
render();
