
///display even numbers in an array

function displayEvenNumbers(a, b){
    for(let i = a; i < b; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

displayEvenNumbers(3, 8);