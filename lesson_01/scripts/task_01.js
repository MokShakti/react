'use strict'

//Умова: Задача 1. Використовуючи один з АРІ   https://github.com/public-apis/public-apis#animals та функцію fetch організувати завантаження та відображення даних. Намагайтесь зробити це з використанням класів.Окремо клас для побудови розмітки.Окремо клас, який буде робити запити і повертати результати.

async function loadDog() {
   const dogEl = document.getElementById(`dog`)
   dogEl.textContent = `Loading...`

   try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
      if (!response.ok) {
         throw new Error(`HTTP error: ` + response.status)
      }
      const data = await response.json()
      dogEl.innerHTML = `<img src="${data.message}" alt="Random Dog">`
   } catch (err) {
      console.error(err)
      dogEl.textContent = `Could not upload photo :(`
   }
}

loadDog();