let submit = document.querySelector('#subt');
console.log(submit);

let count = 10;
let prevGuess;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let randomNum = parseInt(Math.random() * 10);

    let inp = document.querySelector('#guessField');
    let inpVal = parseInt(inp.value);

    if (inp.value !== "") {
        console.log(typeof randomNum);
        console.log(typeof inpVal);

        if (inpVal === randomNum) {
            alert("You Win!");
        }
        else {
            console.log('Better Luck Next Time !');
            document.querySelector(".lastResult").innerHTML = --count;
            
            if (count === 0) {
                alert("⚠️ Game Over ! You Lost.");
                window.location.reload();
            }
            
            // document.querySelector('.guesses').innerHTML = prevGuess;
            // console.log(prevGuess && false);    
            // prevGuess = randomNum;

        }

    } else {
        alert("You must enter a Number !");
    }
})

