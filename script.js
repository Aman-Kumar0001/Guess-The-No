

let a = document.getElementById('guess')

let guess = Math.floor(Math.random() * 10);

a.addEventListener('click',()=>{

    let num = document.getElementById('num').value;
    let result = document.getElementById('result');
    console.log(guess)
    if (num == guess) {
        result.innerHTML = "Congratulations! for guessing correct number"
    }
    else if (num > guess) {
        result.innerText = "Number is too high"
    
    }
    else if (num < guess) {
        result.innerText = "Number is too low"
    
    }
})