"use strict";

const btn = document.querySelector('.add-button');
const memeSection = document.querySelector('.meme-container');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // grab values inside form inputs
    const imgUrl = document.querySelector('#img-url').value;
    const topText = document.querySelector('#top-text').value;
    const botText = document.querySelector('#bot-text').value;

    const meme = document.createElement('div');
    meme.classList.add('meme-item');

    const memeImg = document.createElement('img');
    memeImg.src = imgUrl;
    memeImg.setAttribute('alt','Picture of meme');

    const topCaption = document.createElement('div')
    topCaption.classList.add('meme-item-top')
    topCaption.innerText = topText;

    const botCaption = document.createElement('div')
    botCaption.classList.add('meme-item-bot')
    botCaption.innerText = botText;

    memeSection.appendChild(meme)
    meme.appendChild(memeImg)
    meme.appendChild(topCaption)
    meme.appendChild(botCaption)

    // Delete
    memeImg.addEventListener('click', () => {
        memeImg.parentNode.remove();
    });

    // Clear Form
    document.querySelector('#myForm').reset();

})
