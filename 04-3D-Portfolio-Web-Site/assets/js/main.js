const frontCoverFrontFace = document.querySelector('.front-cover > .front-face '),
    frontCoverBackFace = document.querySelector('.front-cover > .back-face'),
    pageAFront = document.querySelector('.page-A-front'),
    pageABack = document.querySelector('.page-A-back'),
    pageBFront = document.querySelector('.page-B-front'),
    pageBBack = document.querySelector('.page-B-back'),
    pageCFront = document.querySelector('.page-C-front'),
    pageCBack = document.querySelector('.page-C-back'),
    pageDFront=document.querySelector(".page-D-front"),
    pageDBack=document.querySelector(".page-D-back"),
    pageEFront=document.querySelector(".page-E-front"),
    pageEBack=document.querySelector(".page-E-back"),
    bookContainer = document.querySelector('.book-container')

let angle = '-180deg'

const pageOrientation = () =>{
    bookContainer.getBoundingClientRect().width > bookContainer.getBoundingClientRect().height ? angle = '-180deg' : angle = '180deg'
    console.log(angle)
}

pageOrientation()

frontCoverFrontFace.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-front-cover', angle)
    document.documentElement.style.setProperty('--translate', '100%')
})
frontCoverBackFace.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-front-cover', '0deg')
    document.documentElement.style.setProperty('--translate', '50%')
    document.documentElement.style.setProperty('--z-index-front-cover', '20')
    document.documentElement.style.setProperty('--z-index-A', '15')
})
/*flip the first page*/
pageAFront.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-A', angle)
    document.documentElement.style.setProperty('--z-index-A', '25')
})

pageABack.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-A', '0deg')
    document.documentElement.style.setProperty('--z-index-A', '25')
    document.documentElement.style.setProperty('--z-index-B', '10')
})

pageBFront.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-B', angle)
    document.documentElement.style.setProperty('--z-index-B', '25')
})
pageBBack.addEventListener('click', () => {
    document.documentElement.style.setProperty('--rotate-B', '0deg');
    document.documentElement.style.setProperty('--z-index-A', '25')
    document.documentElement.style.setProperty('--z-index-B', '25')
})

// Listen for resize changes
window.addEventListener("resize", function() {
    pageOrientation()
}, false);




