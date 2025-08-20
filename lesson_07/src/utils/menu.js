document.addEventListener("click", function (e) {
   const targetElement = e.target
   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('open-menu');
      e.preventDefault()
   }
})