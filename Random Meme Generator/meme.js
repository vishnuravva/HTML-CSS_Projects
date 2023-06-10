const generateMemeBtn = document.querySelector('.meme-generator .generate-meme-btn')
const memeImage = document.querySelector('.meme-generator img')
const memeTitle = document.querySelector('.meme-generator .meme-title')
const memeAuthor = document.querySelector('.meme-generator .meme-author')

const updateDetails = (url, title, author) => {
    memeImage.setAttribute('src',url)
    memeTitle.innerHTML = title
    memeAuthor.innerHTML = `Created by :${author}`
}
generateMemeBtn.addEventListener('click',(e) => {
    fetch('https://meme-api.com/gimme')
    .then(response => response.json())
    .then(json => {
        updateDetails(json.url, json.title, json.author)
    })
})
