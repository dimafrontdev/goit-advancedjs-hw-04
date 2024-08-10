import{a as g,S as w,i as v}from"./assets/vendor-3b56a289.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const b="45156920-6e611072a4f9c22ae400d324b",L="https://pixabay.com/api/",p=async(t,r=1,o=15)=>{const a={key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:o};try{return(await g.get(L,{params:a})).data}catch(e){throw e}},y=document.querySelector(".gallery"),P=t=>new Promise((r,o)=>{const a=new Image;a.src=t,a.onload=()=>r(t),a.onerror=e=>o(e)}),m=async(t,r=!1)=>{r&&(y.innerHTML="");const o=t.map(e=>P(e.webformatURL));await Promise.all(o),y.innerHTML+=t.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}">
      <div class="info">
        <div>
          <p>Likes</p>
          <p>${e.likes}</p>
        </div>
        <div>
          <p>Views</p>
          <p>${e.views}</p>
        </div>
        <div>
          <p>Comments</p>
          <p>${e.comments}</p>
        </div>
        <div>
          <p>Downloads</p>
          <p>${e.downloads}</p>
        </div>
      </div>
    </a>
  `).join(""),new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom"}).refresh()},S={position:"topRight",messageColor:"white",iconColor:"white"},n=t=>{v.info({message:t,color:"#0099FF",...S})},h=document.querySelector(".search-form"),q=document.querySelector('.search-form input[name="search"]');document.querySelector(".gallery");const i=document.querySelector(".loader"),c=document.querySelector(".load-more");let d=1,f="",l=0;const I=async t=>{t.preventDefault();const r=q.value.trim();if(!r){n("Please enter a search query.");return}c.style.display="none",i.style.display="none",d=1,l=0,f=r;try{i.style.display="flex";const o=await p(r,d);if(l=o.hits.length,o.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}await m(o.hits,!0),l<o.totalHits?c.style.display="block":n("We're sorry, but you've reached the end of search results.")}catch{n("An error occurred while fetching images. Please try again later.")}finally{i.style.display="none",h.reset()}},x=async()=>{d+=1,c.style.display="none",i.style.display="flex";try{const t=await p(f,d);l+=t.hits.length,await m(t.hits);const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2+48,behavior:"smooth"}),l>=t.totalHits?n("We're sorry, but you've reached the end of search results."):c.style.display="block"}catch{n("An error occurred while fetching more images. Please try again later.")}finally{i.style.display="none"}};h.addEventListener("submit",I);c.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
