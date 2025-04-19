// template_0ddd54w
//service_885vbhk
// oXCU5K3kX6dWc7Q2o

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