import './style.css'

const base = import.meta.env.BASE_URL

// 👉 структура учеников
const students = [
  {
    id: "ivan",
    name: "Иван",
    photos: [
      "photo_1.jpg",
      "photo_2.jpg"
    ]
  },
  {
    id: "anya",
    name: "Анна",
    photos: [
      "photo_3.jpg"
    ]
  }
]

// --------------------
// LIGHTBOX (fullscreen)
// --------------------
const lightbox = document.createElement('div')
lightbox.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const lightboxImg = document.createElement('img')
lightboxImg.style.cssText = `
  max-width: 90%;
  max-height: 90%;
`

lightbox.appendChild(lightboxImg)
document.body.appendChild(lightbox)

window.openLightbox = (src) => {
  lightboxImg.src = src
  lightbox.style.display = 'flex'
}

lightbox.onclick = () => {
  lightbox.style.display = 'none'
}

// --------------------
// ГЛАВНАЯ СТРАНИЦА (список учеников)
// --------------------
function renderStudents() {
  return `
    <div class="container">
      <h1>📸 9А класс</h1>

      <div class="grid">
        ${students.map(student => `
          <div class="card" onclick="openStudent('${student.id}')">
            <h2>${student.name}</h2>
            <p>${student.photos.length} фото</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

// --------------------
// СТРАНИЦА УЧЕНИКА
// --------------------
function renderStudent(id) {
  const student = students.find(s => s.id === id)

  if (!student) {
    return `
      <div class="container">
        <h1>Ученик не найден</h1>
        <button onclick="goBack()">← Назад</button>
      </div>
    `
  }

  return `
    <div class="container">
      <button class="back-btn" onclick="goBack()">← Назад</button>

      <h1>${student.name}</h1>

      <div class="grid">
        ${student.photos.map(photo => {
          const src = base + 'images/' + photo
          return `
            <img
              src="${src}"
              class="photo"
              onclick="openLightbox('${src}')"
            />
          `
        }).join('')}
      </div>
    </div>
  `
}

// --------------------
// НАВИГАЦИЯ
// --------------------
window.openStudent = (id) => {
  document.querySelector('#app').innerHTML = renderStudent(id)
}

window.goBack = () => {
  document.querySelector('#app').innerHTML = renderStudents()
}

// --------------------
// INIT
// --------------------
document.querySelector('#app').innerHTML = renderStudents()
