(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/backup/`,t=[{id:`1`,name:`Артемьева Саша`,folder:`01_Артемьева_Саша`,photos:[]},{id:`2`,name:`Викат Марта`,folder:`02_Викат_Марта`,photos:[]},{id:`3`,name:`Власова Анна`,folder:`03_Власова_Анна`,photos:[]},{id:`4`,name:`Воронина Ирина`,folder:`04_Воронина_Ирина`,photos:[]},{id:`5`,name:`Воронова Полина`,folder:`05_Воронова_Полина`,photos:[]},{id:`6`,name:`Гайсенова Эвелина`,folder:`06_Гайсенова_Эвелина`,photos:[]},{id:`7`,name:`Говорков Алексей`,folder:`07_Говорков_Алексей`,photos:[]},{id:`8`,name:`Головко Дарья`,folder:`08_Головко_Дарья`,photos:`Обложка.jpg,1.jpg,2.jpg,3.jpg,4.jpg,5.jpg,6.jpg,7.jpg,8.jpg,9.jpg,10.jpg,11.jpg,12.jpg,13.jpg,14.jpg,15.jpg,16.jpg,17.jpg,18.jpg,19.jpg,20.jpg,21.jpg,22.jpg,23.jpg,24.jpg,25.jpg`.split(`,`)},{id:`9`,name:`Демиденко Даша`,folder:`09_Демиденко_Даша`,photos:[]},{id:`10`,name:`Добрая Соня`,folder:`10_Добрая_Соня`,photos:[]},{id:`11`,name:`Дрябов Андрей`,folder:`11_Дрябов_Андрей`,photos:[]},{id:`12`,name:`Дымченко Иван`,folder:`12_Дымченко_Иван`,photos:[]},{id:`13`,name:`Егоров Дима`,folder:`13_Егоров_Дима`,photos:[]},{id:`14`,name:`Зайцева Анастасия`,folder:`14_Зайцева_Анастасия`,photos:[]},{id:`15`,name:`Захарова Анастасия`,folder:`15_Захарова_Анастасия`,photos:[]},{id:`16`,name:`Казаков Дмитрий`,folder:`16_Казаков_Дмитрий`,photos:[]},{id:`17`,name:`Кашин Александр`,folder:`17_Кашин_Александр`,photos:[]},{id:`18`,name:`Келеменян Лиана`,folder:`18_Келеменян_Лиана`,photos:[]},{id:`19`,name:`Керимова Рита`,folder:`19_Керимова_Рита`,photos:[]},{id:`20`,name:`Корнеева София`,folder:`20_Корнеева_София`,photos:[]},{id:`21`,name:`Кремнева Александра`,folder:`21_Кремнева_Александра`,photos:[]},{id:`22`,name:`Куценко Константин`,folder:`22_Куценко_Константин`,photos:[]},{id:`23`,name:`Леонтьев Дмитрий`,folder:`23_Леонтьев_Дмитрий`,photos:[]},{id:`24`,name:`Макарова Ирина`,folder:`24_Макарова_Ирина`,photos:[]},{id:`25`,name:`Манапова Камилла`,folder:`25_Манапова_Камилла`,photos:[]},{id:`26`,name:`Маслова Дарья`,folder:`26_Маслова_Дарья`,photos:[]},{id:`27`,name:`Мечикова Елизавета`,folder:`27_Мечикова_Елизавета`,photos:[]},{id:`28`,name:`Мусина Александра`,folder:`28_Мусина_Александра`,photos:[]},{id:`29`,name:`Муштуков Виктор`,folder:`29_Муштуков_Виктор`,photos:[]},{id:`30`,name:`Орлова Милана`,folder:`30_Орлова_Милана`,photos:[]},{id:`31`,name:`Пелевини Захар`,folder:`31_Пелевини_Захар`,photos:[]},{id:`32`,name:`Полякова Дарья`,folder:`32_Полякова_Дарья`,photos:[]},{id:`33`,name:`Савин Максим`,folder:`33_Савин_Максим`,photos:[]},{id:`34`,name:`Слобожанина Екатерина`,folder:`34_Слобожанина_Екатерина`,photos:[]},{id:`35`,name:`Тельпис Анна`,folder:`35_Тельпис_Анна`,photos:[]},{id:`36`,name:`Токмакова Лилия`,folder:`36_Токмакова_Лилия`,photos:[]},{id:`37`,name:`Торчило Влад`,folder:`37_Торчило_Влад`,photos:`Обложка.jpg,1.jpg,2.jpg,3.jpg,4.jpg,5.jpg,6.jpg,7.jpg,8.jpg,9.jpg,10.jpg,11.jpg,12.jpg,13.jpg,14.jpg,15.jpg,16.jpg,17.jpg,18.jpg,19.jpg,20.jpg,21.jpg,22.jpg,23.jpg,24.jpg,25.jpg`.split(`,`)},{id:`38`,name:`Шахов Тимур`,folder:`38_Шахов_Тимур`,photos:[]},{id:`39`,name:`Юнина Алиса`,folder:`39_Юнина_Алиса`,photos:[]},{id:`40`,name:`Эйленен Лиза`,folder:`40_Эйленен_Лиза`,photos:[]}],n=document.createElement(`div`);n.style.cssText=`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;var r=document.createElement(`img`);r.style.cssText=`
  max-width: 90%;
  max-height: 90%;
`,n.appendChild(r),document.body.appendChild(n),window.openLightbox=e=>{r.src=e,n.style.display=`flex`},n.onclick=()=>{n.style.display=`none`};function i(){return`
    <div class="container">
      <h1>📸 9А класс</h1>

      <div class="grid">
        ${t.map(e=>`
          <div class="card" onclick="openStudent('${e.id}')">
            <h2>${e.name}</h2>
            <p>${e.photos.length} фото</p>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function a(n){let r=t.find(e=>e.id===n);return r?`
    <div class="container">
      <button class="back-btn" onclick="goBack()">← Назад</button>

      <h1>${r.name}</h1>

      <div class="grid">
        ${r.photos.map(t=>{let n=`${e}images/${r.folder}/${t}`;return`
            <img
              src="${n}"
              class="photo"
              onclick="openLightbox('${n}')"
            />
          `}).join(``)}
      </div>
    </div>
  `:`
      <div class="container">
        <h1>Ученик не найден</h1>
        <button onclick="goBack()">← Назад</button>
      </div>
    `}window.openStudent=e=>{document.querySelector(`#app`).innerHTML=a(e)},window.goBack=()=>{document.querySelector(`#app`).innerHTML=i()},document.querySelector(`#app`).innerHTML=i();