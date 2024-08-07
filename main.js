
const likeButton = document.querySelector('.heart-unfilled')
const likefillButton = document.querySelector('.heart-filled')
const sizeCard = document.querySelector('.card__size')
const colorCard = document.querySelector('.card__color')

function handleUnlikeClick() {
    likeButton.style.display = 'none'
    likefillButton.style.display = 'inline-block'
}

function handleLikeClick() {
    likeButton.style.display = 'inline-block'
    likefillButton.style.display = 'none'
}

sizeCard.onclick = function(e) {
    const main = e.target.closest('.card__size-element')
    if(main) {
        if (main.classList.contains('active')) {
            main.classList.remove('active')
        }
        else {
            if(document.querySelector('.card__size-element.active')) {
                document.querySelector('.card__size-element.active').classList.remove('active')
            }
            e.target.classList.add('active')
        }
    }
}

colorCard.onclick = function(e) {
    const main = e.target.closest('span')
    if (main) {
        if(main.classList.contains('active')) {
            main.classList.remove('active')
        }
        else {
            if(document.querySelector('.card__color span.active')) {
                document.querySelector('.card__color span.active').classList.remove('active')
            }
            e.target.classList.add('active')
        }
    }
}







