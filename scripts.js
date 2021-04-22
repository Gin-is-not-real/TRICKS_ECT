/*
    boucle for
*/

function forLoop() {
    console.log("function forLoop()");

    for(let i = 0; i < 10; i++) {
        console.log("tour n° " + i);
    }
}

function forLoop2() {
    console.log("function forLoop2()");

    for(let i = 1; i <= 10; i++) {
        console.log("tour n° " + i);
    }

}
function forLoop3() {
    console.log("function forLoop()");

    let valeurDeDepart = 5;
    let nbrDeTours = 20;
    
    for(let i = valeurDeDepart; i <= nbrDeTours; i++) {
        console.log("tour n° " + i);
    }

}

function forLoopArray() {
    console.log("function forLoopArray()");
    let array = ["un", "deux", "trois"];

    console.log(array);
    console.log("array.length (longueur): ", array.length);

    for(let i = 0; i < array.length; i++) {
        console.log("i: " + i + ", array[i]: " + array[i]);
    }
}