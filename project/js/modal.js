const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

let isOpened = false
let isDelayed = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    isOpened = true

    window.removeEventListener('scroll', handleScroll)
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (scrollHeight + windowHeight === documentHeight && !isOpened && !isDelayed) {
        openModal()
    }
}

modalTrigger.onclick = () => {
    openModal()
}

modalCloseButton.onclick = () => {
    closeModal()
}

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

setTimeout(() => {
    isDelayed = true
    if (!isOpened) {
        openModal()
    }
}, 10000)

window.addEventListener('scroll', handleScroll)
