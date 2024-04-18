const cardList = document.querySelector('.cardList');
let score = 0;

buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1) //make it start as 1 not 0
}, 2000)

let interval2 = setInterval(function(){
    if (cardList.children.length === 0){
        let gameOver = document.createElement('p');
        gameOver.innerHTML = `Your score was ${score}!`
        cardList.appendChild(gameOver);
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
        return
    }
    e.target.remove();
    score = score+2
    let children = cardList.children;
    if(children.length < 1){
        clearInterval(interval);
    }
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