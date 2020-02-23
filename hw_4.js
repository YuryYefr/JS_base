//1. Есть массив чисел, посчитать сумму всех элементов используя
//for обычный и forEach. Реализовать через функцию, которая на вход принимает
//массив.
numList = [2, 5, 7, 8, 10]
function sumGetSimple(someList){
    let res = 0;
    for (i = 0; i < someList.length; i++){
        res += someList[i];
    }
    return res
}
console.log(sumGetSimple(numList))
let res = 0;
function sumGetEach(num){
    res += num;
    return res;
}
numList.forEach(sumGetEach);
console.log(res);
//2. Функция принимает два массива.
// Возвращает новый массив, где каждый элемент это сумма двух других массив
//Реализовать через forEach и for
let first = [2, 3]
let second = [3, 2]
//result = [5, 5];
function sumGetTwoSimple(someList, anotherList){
    let res = [];
    if (someList.length !== anotherList.length){
        alert('arrays must be equal!')
        return
    }
    for (i = 0; i < someList.length; i++){
        res.push(someList[i] + anotherList[i]);
    }
    return res;
}
console.log(sumGetTwoSimple(first, second))
res = []
function sumGetEachTwo(someList, i){
    res.push(someList + second[i])
    return res;
}
first.forEach(sumGetEachTwo)
console.log(res)
let secondList = [54, 67, 43, 32, 4]
let thirdList = [32, 56, 67, 89, 10]
//3.  Есть 3 массива, посчитать их общую сумму. На выходе одно число.
//  Должна быть функция, которая принимае эти 3 массива, на выходе возвращает 1 число
function getSumThreeArrays(someList, anotherList, thirdList){
    res = 0;
    for (i = 0; i < someList.length; i++){
        res += someList[i] + anotherList[i] + thirdList[i];
    }
    return res;
}
console.log(getSumThreeArrays(numList, secondList, thirdList))
//4. Есть массив [1, 4, 5, 1, 3, 3] На основе его создать новый массив, где
//будут квадрат каждого число, используя for и map
squareArr = [1, 4, 5, 1, 3, 3];

function getSquares(someList){
    res = [];
    for (i = 0; i < someList.length; i++){
    res.push(someList[i] * someList[i]);
    }
    return res
}
function getSquaresMap(someNum){
    return someNum * someNum;
}
console.log(getSquares(squareArr))
res = squareArr.map(getSquaresMap)
console.log(res)
//5. Есть массив имен ['fasf', 'cvser', 'fdsf']. На вход функции
//Создать новый массив на выходе, который вернет имена, которые меньше 4 букв
//Цикл for метод filter
someNamesList = ['some', 'moresome', 'triplesome', 'try']
function getThreeCharNames(namesList){
    resNames = []
    for (i = 0; i < namesList.length; i++){
        if (namesList[i].length < 4) {
        resNames.push(namesList[i]);
        }else{
           continue;
        }
    }
    return resNames;
}
function threeCharFilter(someItem){
    return someItem.length < 4;
}
console.log(getThreeCharNames(someNamesList))
res = someNamesList.filter(threeCharFilter)
console.log(res)
