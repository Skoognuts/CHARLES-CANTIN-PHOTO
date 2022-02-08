const categoryButtons = document.getElementsByClassName('categoryButton');
const galerySlider = document.getElementById('galerySlider');
const categoryButtonIds = [];
for (let i = 0; i < categoryButtons.length; i++) {
  categoryButtonIds[i] = document.getElementById(categoryButtons[i].id);
  categoryButtonIds[i].addEventListener('click', () => {
    galerySlider.innerText = categoryButtons[i].id;
  })
}
