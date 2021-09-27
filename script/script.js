const mainModal = document.getElementById('main-modal')

setInterval(() => {
    if (mainModal.classList[2] == undefined) {
        for (let i = 1; i < 5; i++) {
            let modalOp = document.getElementById('option' + i)
            modalOp.classList.remove('show')
        }
    }
}, 500);

function bookmark(obj) {
    obj.classList.toggle('btn-secondary')
    obj.classList.toggle('text-white')
    obj.classList.toggle('btn-light')
    obj.classList.toggle('textPrimaryColor')

    let img = obj.children[0]

    if (img.src == 'http://127.0.0.1:5500/images/icon-bookmark.svg') {
        img.src = './images/icon-bookmark-2.svg'
    } else {
        img.src = './images/icon-bookmark.svg'
    }
}

function modal(obj) {
    let number = obj.id[3]
    let modalOption = document.getElementById('option' + number)

    modalOption.classList.toggle('show')
}