
function contact(event) {
    event.preventDefault();  
      const loading = document.querySelector('.modal_overlay-loading')
      const success = document.querySelector('.modal_overlay-success')
      loading.classList += ' modal_overlay-visible'

    emailjs
        .sendForm(
            'service_885vbhk',
            'template_0ddd54w',
            event.target,
            'oXCU5K3kX6dWc7Q2o',
        ) .then(() => {
            loading.classList.remove('modal_overlay-visible')
            success.classList += ' modal_overlay-visible'
        }).catch(() => {
            loading.classList.remove('modal_overlay-visible')
            alert(
                'The email service is temporarily unavailable. Please contact me directly at briggs.carter29@gmail.com'
            )
        })
}
let isModalOpen = false;
function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal_open')
    }
    isModalOpen = true;
    document.body.classList += ' modal_open'
}

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

const scaleFactor = 1/20
function moveBackGround(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate( ${x * boolInt}px, ${y * boolInt}px )`
    }
}