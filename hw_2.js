function countLetter(str, letter){
    var str = document.getElementById('stringfield').value;
    var letter = document.getElementById('letterfield').value;
    let letterCounter = 0;
    let i = 0;
    while (i < str.length){
    if(str.charAt(i) == letter){
        letterCounter += 1;
    }
    i += 1;
    }
    console.log(letterCounter)
}

const SOMESTRING = 'adfsdfdsaffasfaaaaasfsfasfdsf'
let letterCounterFor = 0
for (p = 0; p < SOMESTRING.length; p += 1){
    if (SOMESTRING.charAt(p) == 'a'){
        letterCounterFor += 1;
    }
}
console.log(letterCounterFor);
let letterCounterWhile = 0;
let i = 0;
while (i < SOMESTRING.length){
    if (SOMESTRING.charAt(i) == 'a'){
        letterCounterWhile += 1;
    }
    i += 1;
}
console.log(letterCounterWhile)
let letterCounterDo = 0;
let finalIndex = 0
do {
 if (SOMESTRING.charAt(finalIndex) == 'a'){
    letterCounterDo += 1;
 }
 finalIndex += 1;
}while (finalIndex < SOMESTRING.length);
console.log(letterCounterDo)
