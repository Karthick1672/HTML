const cardsArray = [
    {
        name:'mandalorian_1',
        icon:'<i class="fa-brands fa-mandalorian fa-bounce" style="color: #55dcae;"></i>'
    },

    {
        name:'dragon_2',
        icon:'<i class="fa-brands fa-d-and-d fa-fade" style="color: #ff0000;"></i>'
    },

    {
        name:'studiovinari_3',
        icon:'<i class="fa-brands fa-studiovinari fa-beat" style="color: #008c00;"></i>'
    },

    {
        name:'old-republic_4',
        icon:'<i class="fa-brands fa-old-republic fa-flip" style="color: #4b07ec;"></i>'
    },

    {
        name:'wolf_5',
        icon:'<i class="fa-brands fa-wolf-pack-battalion fa-beat-fade" style="color: #504A4B;"></i>'
    },

    {
        name:'phoenix-framework_6',
        icon:'<i class="fa-brands fa-phoenix-framework fa-fade" style="color: #3d8b71;"></i>'
    },

    {
        name:'mandalorian_1',
        icon:'<i class="fa-brands fa-mandalorian fa-bounce" style="color: #55dcae;"></i>'
    },

    {
        name:'dragon_2',
        icon:'<i class="fa-brands fa-d-and-d fa-fade" style="color: #ff0000;"></i>'
    },

    {
        name:'studiovinari_3',
        icon:'<i class="fa-brands fa-studiovinari fa-beat" style="color: #008c00;"></i>'
    },

    {
        name:'old-republic_4',
        icon:'<i class="fa-brands fa-old-republic fa-flip" style="color: #4b07ec;"></i>'
    },

    {
        name:'wolf_5',
        icon:'<i class="fa-brands fa-wolf-pack-battalion fa-beat-fade" style="color: #504A4B;"></i>'
    },

    {
        name:'phoenix-framework_6',
        icon:'<i class="fa-brands fa-phoenix-framework fa-fade" style="color: #3d8b71;"></i>'
    }

];

let flippedCards = []
let matchcount = 0;
shuffleCards();  // to shuffle the cards when page is refreshed
const gameBoard = document.getElementById('gameboard')
displayCards(); // to display the cards
const score = document.getElementById('score');
let move = 0;
const audio1 = new Audio();
audio1.src = "./Click_button_1.mp3";

function shuffleCards()
{
    for(i = cardsArray.length-1;i >= 0; i--)
    {
        const randIndex = Math.floor(Math.random()*(i+1))
        
        // for swapping [random & i] values
        const temp = cardsArray[randIndex]
        cardsArray[randIndex] = cardsArray[i]
        cardsArray[i] = temp
    }
}

function displayCards()
{
    // .foreach(function,(currentvalue[must],index[option],arr[option])) ==> function
    cardsArray.forEach((cur,index,arr)=>{
        const card = document.createElement('div');   //to create the each card as an div element
        card.setAttribute('id',index); // to give 'index' an id called 'id'
        card.classList.add('cardbg'); // to display the background of cards
        card.classList.add('active');  // to remove the cards, if user finds is match
        gameBoard.append(card);
        card.addEventListener('click',flipcard);
    })
}

function flipcard()
{
    if(flippedCards.length<2 && this.classList.contains('active'))
    {
        let cardId = this.getAttribute('id');   // to get clicked card's id
        flippedCards.push(this); // adding cards to flipped card array
        this.classList.remove('cardbg'); // to remove the cards back
        this.innerHTML = cardsArray[cardId].icon;  // to display the icon
        // console.log(flippedCards[0].id);

        audio1.play();

        move++;
        score.innerHTML = move;

        if(flippedCards[0].id != flippedCards[1].id)
        {
            if (flippedCards.length == 2)  // to drecrease the speed of second card turns
                {
                    setTimeout(checkmatch,750);
                }
        }
        if(flippedCards[0].id == flippedCards[1].id)
        {
            flippedCards.pop();
        }
    }
}

function checkmatch()
{
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');

    if (cardsArray[card1Id].name === cardsArray[card2Id].name)
    {
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor = '#303841';
        flippedCards[0].innerHTML = "";
        flippedCards[0].classList.remove('active');

        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = '#303841';
        flippedCards[1].innerHTML = "";
        flippedCards[1].classList.remove('active');

        // to mention game-over
        matchcount++;
        checkGameOver();
    }
    else
    {
        flippedCards[0].innerHTML = "";
        flippedCards[0].classList.add('cardbg');
        
        flippedCards[1].innerHTML = "";
        flippedCards[1].classList.add('cardbg');
    }

    flippedCards = [];
}

const nextlevel = document.getElementById('nextlevel');

function checkGameOver()
{
    if(matchcount == cardsArray.length/2)
    {
        while(gameBoard.firstChild)
        {
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'YOU WON';
        // to access the css by creating or removing the 'classes'
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');  
        nextlevel.style.visibility = 'visible';
    }
}