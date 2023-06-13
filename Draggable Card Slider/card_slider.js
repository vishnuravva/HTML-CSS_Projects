const carousel = document.querySelector('.carousel')
const arrowBtns = document.querySelectorAll('.wrapper i')
const firstCardWidth = carousel.querySelector('.card').offsetWidth

const carouselChildrens = [...carousel.children]

let isDragging = false,startX,startScrollLeft,timeoutId;

// get the no of cards that can fit in the carousel left and right
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
console.log(cardPerView)

// Insert copies of the last few cards to beginning of carousel fot infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin',card.outerHTML)
})
// Insert copies of the first few cards to end of carousel fot infinite scrolling
carouselChildrens.slice(0,cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend',card.outerHTML)
})
arrowBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        // console.log(btn.id)
        carousel.scrollLeft += btn.id === 'left'? -firstCardWidth : firstCardWidth
    })
})  

const dragStart = (e) => {
    isDragging = true
    carousel.classList.add('dragging')
    // Records the iniital cursor and scroll position of the carousel
    startX = e.pageX
    // console.log('startX',startX)
    startScrollLeft = carousel.scrollLeft
    // console.log('startScrollLeft',startScrollLeft)
}
const dragging = (e) => {
    // console.log(e.pageX)
    if(!isDragging) return // if isDragging is false return from here
    
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    // console.log('startScrollLeft',startScrollLeft)
    // console.log('e.pageX',e.pageX)
    // console.log('startX',startX)
    // console.log('carousel.scrollLeft',carousel.scrollLeft)
}

const dragStop = () => {
    isDragging = false
    carousel.classList.remove('dragging')
}

const autoPlay = () => {
    if(window.innerWidth < 800) return // retuen if window is smaller than 800
    timeoutId = setTimeout(() => carousel.scrollLeft+=firstCardWidth,2500)
}
autoPlay()

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
        carousel.classList.add('no-transition')
        // console.log('you have reached left')
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
        carousel.classList.remove('no-transition')

    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove('no-transition')

    }
    clearTimeout(timeoutId) 
    if(!wrapper.matches(':hover')) autoPlay()
}
carousel.addEventListener('mousemove',dragging)
carousel.addEventListener('mousemove',dragStart)
document.addEventListener('mouseup',dragStop)
carousel.addEventListener('scroll',infiniteScroll)
wrappper.addEventListener('mousenter',() => clearTimeout(timeoutId) )
carousel.addEventListener('mouseleave',autoPlay)

