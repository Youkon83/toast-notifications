const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

button.addEventListener('click', () => createNotification())

let toastNum = 0

function createNotification(){
    toastNum++
    const notification = document.createElement('div')

    notification.classList.add('toast')

    notification.innerText = 'Toast Message ' + toastNum

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000)
}