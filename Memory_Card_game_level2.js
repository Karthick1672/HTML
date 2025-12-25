const cardsArray = [
    {
        name:'khanda_1',
        icon:'<i class="fa-solid fa-khanda fa-flip" style="color: #c8265b;"></i>'
    },

    {
        name:'jedi-order_2',
        icon:'<i class="fa-brands fa-jedi-order fa-shake" style="color: #18b12d;"></i>'
    },

    {
        name:'empire_3',
        icon:'<i class="fa-brands fa-empire fa-spin fa-spin-reverse" style="color: #22486d;"></i>'
    },

    {
        name:'cannabis_4',
        icon:'<i class="fa-sharp fa-solid fa-cannabis" style="color: #00ff00;"></i>'
    },

    {
        name:'elephant_5',
        icon:'<i class="fa-brands fa-deskpro fa-shake" style="color: #7852ba;"></i>'
    },

    {
        name:'masks-theater_6',
        icon:'<i class="fa-solid fa-masks-theater fa-flip" style="color: #90f20a;"></i>'
    },

    {
        name:'optin-monster_7',
        icon:'<i class="fa-brands fa-optin-monster fa-bounce" style="color: #2dd8ed;"></i>'
    },

    {
        name:'fulcrum_8',
        icon:'<i class="fa-brands fa-fulcrum fa-spin" style="color: #78984e;"></i>'
    },

    {
        name:'freebsd_9',
        icon:'<i class="fa-brands fa-freebsd fa-bounce" style="color: #fb874a;"></i>'
    },

    {
        name:'berry_10',
        icon:'<i class="fa-brands fa-raspberry-pi fa-shake" style="color: #f406c8;"></i>'
    },

    {
        name:'khanda_1',
        icon:'<i class="fa-solid fa-khanda fa-flip" style="color: #c8265b;"></i>'
    },

    {
        name:'jedi-order_2',
        icon:'<i class="fa-brands fa-jedi-order fa-shake" style="color: #18b12d;"></i>'
    },

    {
        name:'empire_3',
        icon:'<i class="fa-brands fa-empire fa-spin fa-spin-reverse" style="color: #22486d;"></i>'
    },

    {
        name:'cannabis_4',
        icon:'<i class="fa-sharp fa-solid fa-cannabis" style="color: #00ff00;"></i>'
    },

    {
        name:'elephant_5',
        icon:'<i class="fa-brands fa-deskpro fa-shake" style="color: #7852ba;"></i>'
    },

    {
        name:'masks-theater_6',
        icon:'<i class="fa-solid fa-masks-theater fa-flip" style="color: #90f20a;"></i>'
    },

    {
        name:'optin-monster_7',
        icon:'<i class="fa-brands fa-optin-monster fa-bounce" style="color: #2dd8ed;"></i>'
    },

    {
        name:'fulcrum_8',
        icon:'<i class="fa-brands fa-fulcrum fa-spin" style="color: #78984e;"></i>'
    },

    {
        name:'freebsd_9',
        icon:'<i class="fa-brands fa-freebsd fa-bounce" style="color: #fb874a;"></i>'
    },

    {
        name:'berry_10',
        icon:'<i class="fa-brands fa-raspberry-pi fa-shake" style="color: #f406c8;"></i>'
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
        // console.log(cardId);

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
    }
}