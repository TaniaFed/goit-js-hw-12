import{a as f,i,S as L}from"./assets/vendor-hwdYKDic.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const y=t=>`
       
            <li class='gallery-card'>
                <a class='gallery-link' href='${t.largeImageURL}'>
                    <img class='gallery-img' src='${t.webformatURL}' alt='${t.tags}' />
                    <div class='img-card'>
                        <span class='span-text'>Likes <span class='span-number'>${t.likes}</span></span>
                        <span class='span-text'>Views <span class='span-number'>${t.views}</span></span>
                        <span class='span-text'>Comments <span class='span-number'>${t.comments}</span></span>
                        <span class='span-text'>Downloads <span class='span-number'>${t.downloads}</span></span>
                    </div>
                </a>
            </li>`,g=(t,r)=>{const a={params:{key:"48454112-2bb14e2eb4c862c9f6d932a5d",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:r}};return f.get("https://pixabay.com/api/",a)},h=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");let c=1,d="";const b=()=>document.querySelector(".gallery-card").getBoundingClientRect().height,v=()=>{window.scrollBy({top:b()*2,left:0,behavior:"smooth"})},w=async t=>{try{if(t.preventDefault(),d=t.currentTarget.elements.text_q.value.trim(),d===""){i.warning({title:"Caution",message:"Please, enter valid search requirements!"});return}c=1,o.classList.add("is-hidden"),u.style.display="block",l.innerHTML="";const{data:r}=await g(d,c);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",h.reset(),u.style.display="none";return}r.totalHits>15&&(o.classList.remove("is-hidden"),o.addEventListener("click",m));const a=r.hits.map(e=>y(e)).join("");l.innerHTML=a;const n=new L(".gallery-card a.gallery-link  ",{});console.log(n)}catch(r){l.innerHTML===""&&(console.err("Error fetching data:",r),i.err({title:"Error",message:"An error occurred while searching for images"}))}u.style.display="none"};h.addEventListener("submit",w);const m=async t=>{try{c++;const{data:r}=await g(d,c),a=r.hits.map(n=>y(n)).join("");l.insertAdjacentHTML("beforeend",a),c*15>=r.totalHits&&(i.error({message:"We're sorry, but you've reached the end of search results."}),o.classList.add("is-hidden"),o.removeEventListener("click",m)),v()}catch(r){console.log(r)}};o.addEventListener("click",m);
//# sourceMappingURL=index.js.map
