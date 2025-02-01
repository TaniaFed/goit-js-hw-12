import{a as u,i as c,S as d}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=r=>`
       
            <li class='gallery-card'>
                <a class='gallery-link' href='${r.largeImageURL}'>
                    <img class='gallery-img' src='${r.webformatURL}' alt='${r.tags}' />
                    <div class='img-card'>
                        <span class='span-text'>Likes <span class='span-number'>${r.likes}</span></span>
                        <span class='span-text'>Views <span class='span-number'>${r.views}</span></span>
                        <span class='span-text'>Comments <span class='span-number'>${r.comments}</span></span>
                        <span class='span-text'>Downloads <span class='span-number'>${r.downloads}</span></span>
                    </div>
                </a>
            </li>`,y=r=>{const t=new URLSearchParams({key:"48454112-2bb14e2eb4c862c9f6d932a5d",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"});return u.get(`https://pixabay.com/api/?${t}`)},p=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),g=async r=>{try{r.preventDefault();const t=r.currentTarget.elements.text_q.value.trim();if(t===""){c.warning({title:"Caution",message:"Please, enter valid search requirements!"});return}i.style.display="block",o.innerHTML="";const{data:a}=await y(t);if(a.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML="",p.reset();return}const n=a.hits.map(s=>m(s)).join("");o.innerHTML=n;const e=new d(".gallery-card a.gallery-link  ",{});console.log(e)}catch(t){o.innerHTML===""&&(console.err("Error fetching data:",t),c.err({title:"Error",message:"An error occurred while searching for images"}))}i.style.display="none"};p.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
