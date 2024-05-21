const cardList = document.querySelector('.cardList');
const gameOver = document.getElementById('scoreBoard');
const image = document.getElementById('image');
const p = document.getElementById('p');
let score = 0;

buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1) //make it start as 1 not 0
}, 2000)

let interval2 = setInterval(function(){
    if (cardList.children.length === 0){
        gameOver.textContent = `Your score was ${score}!`
        if(score <= 40){
            p.textContent = 'Good Job!!!'
            let img = document.createElement('img');
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDh-pij36oH9hhmTRWu6ku1ij_3JlMdHBfgvzKwmTwg&s";
            img.style.width = '600px';
            img.style.height = '500px';
            image.appendChild(img);

        }
        clearInterval(interval2);
    }
},100)

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        score++
        gameOver.textContent = `Score: ${score}`
        return
    }
    score = score+2
    e.target.remove();
    let children = cardList.children;
    if(children.length < 1){
        clearInterval(interval);
    }
    gameOver.textContent = `Score: ${score}`
})

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}