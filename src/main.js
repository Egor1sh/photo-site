import './style.css'

const base = import.meta.env.BASE_URL

const images = [
  base + 'images/photo_1.jpg',
  base + 'images/photo_2.jpg',
  base + 'images/photo_3.jpg',
  base + 'images/photo_4.jpg',
  base + 'images/photo_5.jpg',
  base + 'images/photo_6.jpg',
  base + 'images/photo_7.jpg',
  base + 'images/photo_8.jpg',
  base + 'images/photo_9.jpg',
  base + 'images/photo_10.jpg',
  base + 'images/photo_11.jpg',
  base + 'images/photo_12.jpg',
  base + 'images/photo_13.jpg',
  base + 'images/photo_14.jpg',
  base + 'images/photo_15.jpg',
]

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>📸 9А класс</h1>

    <div class="grid">
      ${images.map(img => `
        <img src="${img}" class="photo"/>
      `).join('')}
    </div>
  </div>
`
