const cards = document.querySelectorAll('.card__body')
const cardBtns = document.querySelectorAll('.card__link')


// Choose the card
function chooseCard(card) {
    if (!card.classList.contains('over')) {
        card.classList.toggle('choosed')
    }
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        const parentCard = card.parentNode
        chooseCard(parentCard)
    })
})

cardBtns.forEach((cardBtn) => {
    cardBtn.addEventListener('click', () => {
        const card = cardBtn.parentNode.parentNode.parentNode.parentNode
        chooseCard(card)
    })
})
