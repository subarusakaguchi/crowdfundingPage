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