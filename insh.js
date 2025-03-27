const openBar = document.querySelector('.open')
const closeBar = document.querySelector('.close')
const sideBar = document.querySelector('.sidebar')

openBar.addEventListener('click', () => {
    sideBar.classList.toggle('active')
    openBar.style.display = 'none'
    closeBar.style.display = 'block'
});

closeBar.addEventListener('click', () => {
    sideBar.classList.toggle('active')
    openBar.style.display = 'block' 
    closeBar.style.display = 'none'
});