import './style.css'
import { supabase } from './supabase'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="container">
    <h1>📸 Upload Gallery</h1>

    <input type="file" id="fileInput" />
    <button id="uploadBtn">Upload</button>

    <div class="grid" id="grid"></div>
  </div>
`

const fileInput = document.querySelector('#fileInput')
const uploadBtn = document.querySelector('#uploadBtn')
const grid = document.querySelector('#grid')

uploadBtn.onclick = async () => {
  const file = fileInput.files[0]
  if (!file) return

  const fileName = `${Date.now()}-${file.name}`

  // 1. upload в Supabase
  const { error } = await supabase.storage
    .from('photos')
    .upload(fileName, file)

  if (error) {
    console.log(error)
    return
  }

  // 2. получить публичный URL
  const { data } = supabase.storage
    .from('photos')
    .getPublicUrl(fileName)

  // 3. показать фото
  const img = document.createElement('img')
  img.src = data.publicUrl
  img.className = 'photo'

  grid.appendChild(img)
}
