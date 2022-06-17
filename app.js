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

/*
// Hover choosed
cards.forEach((card) => {
    const parentCard = card.parentNode
    if (parentCard.classList.contains('choosed')) {
        var flag = 0
        card.addEventListener('mouseover', () => {
            if (flag === 0) {
                addItem(card)
                flag = 1
            }
        })
        card.addEventListener('mouseleave', () => removeItem(card))
    }
})

function addItem(card) {
    const cardText = card.childNodes[1]
    const cardTextFirstChild = cardText.childNodes[1]
    const cardHoverText = document.createElement('div')
    cardHoverText.innerHTML = "Котэ не одобряет?"
    cardHoverText.style.color = '#E62E7A'
    cardHoverText.style.fontSize = '16px'


    cardText.insertBefore(cardHoverText, cardTextFirstChild)
}

function removeItem(card) {
    const cardHoverText = card.childNodes[1].childNodes[1]
    console.log(cardHoverText)
    cardHoverText.remove()
}
*/
