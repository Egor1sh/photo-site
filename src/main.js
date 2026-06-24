import './style.css'

const images = [
  "/images/photo_1.jpg",
  "/images/photo_2.jpg",
  "/images/photo_3.jpg",
  "/images/photo_4.jpg",
  "/images/photo_5.jpg",
  "/images/photo_6.jpg",
  "/images/photo_7.jpg",
  "/images/photo_8.jpg",
  "/images/photo_9.jpg",
  "/images/photo_10.jpg",
  "/images/photo_11.jpg",
  "/images/photo_12.jpg",
]

let currentImage = null

function openImage(src) {
  currentImage = src
  render()
}

function closeImage() {
  currentImage = null
  render()
}

function render() {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>📸 9А класс</h1>

      <div class="grid">
        ${images.map(img => `
          <img src="${img}" class="photo" onclick="window.openImage('${img}')"/>
        `).join('')}
      </div>

      ${currentImage ? `
        <div class="lightbox" onclick="window.closeImage()">
          <img src="${currentImage}" />
        </div>
      ` : ''}
    </div>
  `
}

window.openImage = openImage
window.closeImage = closeImage

render()
