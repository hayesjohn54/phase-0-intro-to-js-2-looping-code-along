// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy Birthday to me!`);
//    
//}

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
        
    }
    return gifts;
}

wrapGifts(gifts);*/


function writeCards(arr, ryan){
    let finishedCards = [];
    for (let i = 0; i < arr.length; i++){
        finishedCards.push(`Thank you, ${arr[i]}, for the wonderful ${ryan} gift!`);
    }
    return finishedCards;
}

function countDown(number){
    let i = 10;
    while (i >= 0){
        console.log(i--);
    
    }
}