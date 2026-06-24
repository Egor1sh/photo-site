(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`/images/photo_1.jpg`,`/images/photo_2.jpg`,`/images/photo_3.jpg`,`/images/photo_4.jpg`,`/images/photo_5.jpg`,`/images/photo_6.jpg`,`/images/photo_7.jpg`,`/images/photo_8.jpg`,`/images/photo_9.jpg`,`/images/photo_10.jpg`,`/images/photo_11.jpg`,`/images/photo_12.jpg`],t=null;function n(e){t=e,i()}function r(){t=null,i()}function i(){document.querySelector(`#app`).innerHTML=`
    <div class="container">
      <h1>📸 9А класс</h1>

      <div class="grid">
        ${e.map(e=>`
          <img src="${e}" class="photo" onclick="window.openImage('${e}')"/>
        `).join(``)}
      </div>

      ${t?`
        <div class="lightbox" onclick="window.closeImage()">
          <img src="${t}" />
        </div>
      `:``}
    </div>
  `}window.openImage=n,window.closeImage=r,i();