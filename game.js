// ELements select: 
let  container = document.querySelector(".container")

let divLetters = document.querySelector(".letters");

let dviWordFrom = document.getElementById("Word-from");

let lettersGuess = document.querySelector(".letters-guess");

const myLetters = "abcdefghijklmnopqrstuvwxyz";

const arrFroletters = Array.from(myLetters);


for (let i = 0; i < arrFroletters.length; i++) {
    let parentLetters = document.createElement("span");
    let parentLettersText = document.createTextNode(`${arrFroletters[i]}`);
    parentLetters.appendChild(parentLettersText);
    parentLetters.className = 'letter-box';
    divLetters.appendChild(parentLetters);
};

// create the objects
const programming = {
    WordFrom: 'programming',
    list: ['PHP', 'JS', 'CSS', 'JAVA', 'SQL', 'PYTHON']
};

const movies = {
    WordFrom: 'movies',
    list: ['VENOM', 'NO WAY HOME']
}

const people = {
    WordFrom : 'people',
    list : ['MOHAB', 'NASSER', 'RAMII', 'MOMEN']
};

const countries = {
    WordFrom : 'countries',
    list : ['EGYPT', 'YEMEN', 'SURIA', 'SPAIN', 'JAPAN', 'QATAR', 'TUNISIA', 'PALESTINE', 'ARGENTINA' ]
};

// create my array
const myArray = [];
myArray.push(programming, movies, people, countries);

console.log(myArray)
// create random index;
let numRandom = Math.floor(Math.random() * myArray.length);
// append on load the word form 
let dviWordFromText = document.createTextNode(`${myArray[numRandom].WordFrom}`)
dviWordFrom.appendChild(dviWordFromText);

// create the array contain the letters guess
let wordGuess = Array.from(`${[myArray[numRandom].list[Math.floor(Math.random() * myArray[numRandom].list.length)]]}`);

console.log(wordGuess)

// create span letters guess, length him wordGuess.length
for (let i = 0; i < wordGuess.length ; i++) {
    let spanLettersGuess = document.createElement("span");
    lettersGuess.appendChild(spanLettersGuess);
};

let lettersGuessSpans = document.querySelectorAll('.letters-guess span');

const letterByEvent = document.querySelectorAll('.letters span');

let hangmanDraw = document.querySelector(".hangman-draw");

// create hang man: =>

// (1) ELements create:
let base = document.createElement("span");
let colum = document.createElement("span");
let theHang = document.createElement("span");
let theHanging = document.createElement("span");
let theRope = document.createElement("span");
let theMan = document.createElement("span");
let body = document.createElement("span");
let handLeft = document.createElement("span");
let handRight = document.createElement("span");
let legLeft = document.createElement("span");
let legRight = document.createElement("span");

// (2) create popup:
let popup = document.createElement("div");
let popupText = document.createTextNode(`Game Over, The Word Is ${wordGuess.join("")}`);
popup.className = 'popup';
popup.style.textTransform = 'uppercase'
popup.appendChild(popupText);

// (3) classList of elements created: 
base.classList.add("base")
colum.classList.add("colum")
theHang.classList.add("the-hang");
theHanging.classList.add("the-hanging");
theRope.classList.add("the-rope");
theMan.classList.add("the-man");
body.classList.add("body")
handLeft.classList.add("hand-left")
handRight.classList.add("hand-right")
legLeft.classList.add("leg-left")
legRight.classList.add("leg-right")


// if the user wrong chose the hangman start for generatorFun =>

// the generator Function: 
function* generatorFun() {
    yield hangmanDraw.appendChild(base); // (1)
    yield hangmanDraw.appendChild(colum); // (2)
    yield hangmanDraw.appendChild(theHang); // (3)
    yield hangmanDraw.appendChild(theHanging); // (4)
    yield hangmanDraw.appendChild(theRope); // (5)
    yield hangmanDraw.appendChild(theMan); // (6)
    yield hangmanDraw.appendChild(body); // (7)
    yield hangmanDraw.appendChild(handLeft) && hangmanDraw.appendChild(handRight); // (8)
    yield hangmanDraw.appendChild(legLeft) && hangmanDraw.appendChild(legRight) && container.appendChild(popup); // (9) and finish
}

let generator = generatorFun();

letterByEvent.forEach((ele) => {
// event click on th letters
    ele.addEventListener("click", eleClick)
// the fun click
        function eleClick () {
// add class on the letter clicked
        ele.classList.add('change-background');
// remove the event click after click
        ele.removeEventListener("click", eleClick);
// here theStatus start Equal false 
        let theStatus = false;
// forEach function after click
        wordGuess.forEach((ELementOfWordGuess, indexOfArray) => {

        if (ele.textContent.toUpperCase() == ELementOfWordGuess) {
// here theStatus Equal true 
        theStatus = true;

        lettersGuessSpans.forEach((eleGuessSpans, index) => {

            if (indexOfArray == index) {
                let spanLettersGuessText = document.createTextNode(`${eleGuessSpans.innerHTML}`);
                eleGuessSpans.innerHTML =  ele.textContent.toUpperCase();
                eleGuessSpans.appendChild(spanLettersGuessText);
            }
        });
    }
});
// after theStatus Not Equal true: 
        if (theStatus != true) {
            generator.next();
        }
    }
});
